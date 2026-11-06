/* Safe markdown for journal essays and craft notes. No raw HTML passthrough. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.renderJournalMarkdown = api.renderJournalMarkdown;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderInline(escaped) {
    const codes = [];
    let s = escaped.replace(/`([^`]+)`/g, function (_, code) {
      codes.push(code);
      return "\u0000C" + (codes.length - 1) + "\u0000";
    });
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, function (_, text, url) {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + text + "</a>";
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\u0000C(\d+)\u0000/g, function (_, i) {
      return "<code>" + codes[Number(i)] + "</code>";
    });
    return s;
  }

  function indentOf(line) {
    const m = /^(\s*)/.exec(line);
    return m ? m[1].length : 0;
  }
  function isUl(line) {
    return /^(\s*)[-*]\s+/.test(line);
  }
  function isOl(line) {
    return /^(\s*)\d+\.\s+/.test(line);
  }
  function isTableStart(lines, i) {
    return /^\s*\|/.test(lines[i] || "") && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1] || "");
  }
  function isStructural(lines, i) {
    const line = lines[i] || "";
    return /^#{1,6}\s+/.test(line) || /^\s*---\s*$/.test(line) || isUl(line) || isOl(line) || isTableStart(lines, i);
  }

  function renderTable(lines, i) {
    const rows = [];
    while (i < lines.length && /^\s*\|/.test(lines[i])) {
      rows.push(lines[i]);
      i += 1;
    }
    function cells(row) {
      return row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(function (c) { return c.trim(); });
    }
    const head = cells(rows[0] || "");
    const body = rows.slice(2).map(cells);
    let html = "<table><thead><tr>";
    head.forEach(function (c) { html += "<th>" + renderInline(c) + "</th>"; });
    html += "</tr></thead><tbody>";
    body.forEach(function (r) {
      html += "<tr>";
      r.forEach(function (c) { html += "<td>" + renderInline(c) + "</td>"; });
      html += "</tr>";
    });
    html += "</tbody></table>";
    return [html, i];
  }

  function renderList(lines, start) {
    const ordered = isOl(lines[start]);
    const base = indentOf(lines[start]);
    const tag = ordered ? "ol" : "ul";
    let i = start;
    const items = [];
    while (i < lines.length) {
      let line = lines[i];
      if (line.trim() === "") {
        let j = i + 1;
        while (j < lines.length && lines[j].trim() === "") j += 1;
        const next = lines[j] || "";
        if (j < lines.length && indentOf(next) >= base && ((ordered && isOl(next)) || (!ordered && isUl(next)) || indentOf(next) > base)) {
          i = j;
          continue;
        }
        break;
      }
      const ind = indentOf(line);
      if (ind < base) break;
      if (ind === base && ((ordered && isOl(line)) || (!ordered && isUl(line)))) {
        items.push([line.replace(/^\s*(?:[-*]|\d+\.)\s+/, "")]);
        i += 1;
        continue;
      }
      if (ind > base && items.length) {
        if (isUl(line) || isOl(line)) {
          const nested = renderList(lines, i);
          items[items.length - 1].push(nested[0]);
          i = nested[1];
          continue;
        }
        items[items.length - 1].push(line.trim());
        i += 1;
        continue;
      }
      break;
    }
    let html = "<" + tag + ">";
    items.forEach(function (parts) {
      const texts = [];
      const blocks = [];
      parts.forEach(function (p) {
        if (p.indexOf("<ul>") === 0 || p.indexOf("<ol>") === 0) blocks.push(p);
        else texts.push(p);
      });
      html += "<li>" + texts.map(renderInline).join("<br>") + blocks.join("") + "</li>";
    });
    html += "</" + tag + ">";
    return [html, i];
  }

  function renderJournalMarkdown(md) {
    const escaped = escapeHTML(md == null ? "" : md).replace(/\r\n/g, "\n");
    const lines = escaped.split("\n");
    const html = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === "") { i += 1; continue; }
      if (/^\s*---\s*$/.test(line)) {
        html.push("<hr>");
        i += 1;
        continue;
      }
      const heading = /^(#{1,6})\s+(.*)$/.exec(line);
      if (heading) {
        const level = Math.min(heading[1].length + 2, 6);
        html.push("<h" + level + ">" + renderInline(heading[2]) + "</h" + level + ">");
        i += 1;
        continue;
      }
      if (isTableStart(lines, i)) {
        const table = renderTable(lines, i);
        html.push(table[0]);
        i = table[1];
        continue;
      }
      if (isUl(line) || isOl(line)) {
        const list = renderList(lines, i);
        html.push(list[0]);
        i = list[1];
        continue;
      }
      const buf = [line.trim()];
      i += 1;
      while (i < lines.length && lines[i].trim() !== "" && !isStructural(lines, i)) {
        buf.push(lines[i].trim());
        i += 1;
      }
      html.push("<p>" + renderInline(buf.join(" ")) + "</p>");
    }
    return html.join("\n");
  }

  return { renderJournalMarkdown: renderJournalMarkdown };
});
