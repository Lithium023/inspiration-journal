(() => {
  const PIECES = [
    {
      id: "agrumea",
      title: "Agrumea Farm",
      creator: "Studio K95",
      cat: "digital",
      catLabel: "数字界面",
      tag: "营销站 · 含动势",
      source: "Awwwards · Site of the Day · 2026-11-05",
      note: "奶油底上浮着倾斜玻璃罐，深酒红有机色块托住绕行衬线大字；暖橙与产品本色对撞，滚动叙事把意式农产做成可食用的奢侈网页。",
      href: "https://www.awwwards.com/sites/agrumea-farm",
      live: "https://www.agrumeafarm.it/en",
      region: "国际",
    },
    {
      id: "grail",
      title: "Grail",
      creator: "denormalized",
      cat: "digital",
      catLabel: "数字界面",
      tag: "产品站 / App",
      source: "Awwwards · Site of the Day · 2026-11-04",
      note: "PP Pangaia 高对比衬线钉住「RECLAIM YOUR LIFE」，一部 iPhone 死钉画面中央，章节底色与两侧正文轮换；产品截图不动，动势全交给排版与 WebGL 任务卡。",
      href: "https://www.awwwards.com/sites/grail",
      live: "https://grail-app.com/",
      region: "国际",
    },
    {
      id: "deepbook",
      title: "DeepBook",
      creator: "HOLOGRAPHIK × Sui Foundation Design × AKKA Studio",
      cat: "digital",
      catLabel: "数字界面",
      tag: "产品站 · 含动势",
      source: "Awwwards · Site of the Day · 2026-11-03",
      note: "黑底上一场灰短竖线像烛芯般弯成同心弧，偶发 #1E6EF3 蓝点像成交；同一记号在不同页被拉成列、拆成双曲线，动效把订单簿画成可识别的图形系统。",
      href: "https://www.awwwards.com/sites/deepbook",
      live: "https://www.deepbook.tech/",
      region: "国际",
    },
    {
      id: "bmw",
      title: "BMW Next Move — F3 RRFI",
      creator: "Format-3",
      cat: "digital",
      catLabel: "数字界面",
      tag: "概念产品站",
      source: "CSS Design Awards · Website of the Day · 2026-11-05",
      note: "黑场上「NEXT MOVE」粗体无衬线从白扫到冷蓝，背后拓扑等高线涟漪扩散；展厅概念站把数据和叙事压成战术感界面，Innovation 分最高。",
      href: "https://www.cssdesignawards.com/",
      live: "https://www.bmwf3.com/",
      region: "国际",
    },
    {
      id: "dontlookup",
      title: "Don't Look Up",
      creator: "Marcelo Reis Melo",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "互动游戏",
      source: "Awwwards · Site of the Day · 2026-11-01",
      note: "米白纸上黑墨线条，Marsipan 胖手写字里两个 O 变成瞳孔；黄 / 蓝 / 红只标记「已察觉 / 相信 / 争吵」的市民，色彩即规则，Three.js + GSAP 把讽刺做成可玩的账本。",
      href: "https://www.awwwards.com/sites/dont-look-up-game",
      live: "https://www.dontlookup.app/",
      region: "国际",
    },
    {
      id: "amn",
      title: "Amsterdam Museum Night 2026",
      creator: "From Form",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "动态品牌 · 平面延伸",
      source: "It's Nice That · 2026-11-05",
      note: "超现实静物与 17 世纪西洋景比例混剪：漂浮的钥匙、钟、火把；全片用照片拼贴而非实拍，黑白夜曲气质，海报与动画共用同一套异样面孔。",
      href: "https://www.itsnicethat.com/articles/from-form-amsterdam-museum-night-graphic-design-project-051126",
      region: "国际",
    },
    {
      id: "applemusic",
      title: "Apple Music 品牌视觉重塑",
      creator: "TBWA\\Media Arts Lab × Optical Arts",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "动态品牌影像",
      source: "It's Nice That · 优设设计周刊转介 · 2026-10-28",
      note: "真声波驱动油面折射拍成百帧再合成：黑白主视觉、液态玻璃扭曲字标，静止帧也像被音乐碰过；色彩让给艺人内容，系统极度克制。",
      href: "https://www.itsnicethat.com/features/apple-music-rebrand-graphic-design-spotlight-281026",
      region: "国际",
    },
    {
      id: "barreve",
      title: "Bar Rêve",
      creator: "DutchScot",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "视觉识别",
      source: "It's Nice That · 优设设计周刊转介 · 2026-10-27",
      note: "牛血红底配雾蓝细线：书法感词标会拉长、漂浮、蒸发；绵羊 / 天鹅 / 公牛以梦的象征轻描，地址变成 Zzz，排版与插画共用同一种呼吸。",
      href: "https://www.itsnicethat.com/articles/dutchscots-bar-reve-graphic-design-project-271026",
      region: "国际",
    },
    {
      id: "crow",
      title: "CROW FFEE 乌鸦咖啡",
      creator: "余尤勇",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "海报 · 品牌",
      source: "站酷三火推荐",
      note: "奶油纸上森林绿双色：CROW 与 FFEE 故意拆开，木刻质感乌鸦占右半幅；口号「不讨好世界 只讨好你的困意」把咖啡写成对抗性的清醒。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTI0NDQ=.html",
      region: "中文",
    },
    {
      id: "huili",
      title: "百年回力丨回力虎 IP",
      creator: "几克鱼",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "IP 形象",
      source: "站酷三火推荐 · 回力100周年",
      note: "红黑白高对比：搪胶质感虎仔拉弓腾空，半调网点背景推出国潮速度感；球鞋造型与 WARRIOR 字样把百年国货钉在收藏级 IP 海报上。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTY0OTI=.html",
      region: "中文",
    },
    {
      id: "lanvia",
      title: "银发品牌｜万物归岚 / LANVIA",
      creator: "ResauceDesign",
      cat: "product",
      catLabel: "产品与包装",
      tag: "包装 · 触感物料",
      source: "站酷三火推荐",
      note: "褐、米、鼠尾草绿与朱红印章：竖排书法商标配抽象叠石纹样，牛皮纸盒与绒面袋触感冷静；银发被做成从容的东方极简，而非「老龄」标签。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTY4OTY=.html",
      region: "中文",
    },
    // —— 视频动效 · 补充报告 7 件 ——
    {
      id: "bass",
      title: "Bass X Machina · Opening Titles",
      creator: "BUCK（GCD Thomas Schmid · CD Kenesha Sneed）",
      cat: "video",
      catLabel: "视频动效",
      tag: "片头序列 · 广播/流媒体",
      source: "Stash Media · 2026-11-03",
      note: "宣传海报感剪影配红白蓝受限色，把 Bass Reeves 的英雄/亡命/机器多重身份压进 Janelle Monáe 配乐里；图形语言硬朗，适合当片头类标杆。",
      href: "https://www.stashmedia.tv/alt-western-buck-opens-bass-x-machina-on-netflix/",
      region: "国际",
      mediaKind: "video",
      watchOnSource: false,
      videoUrl: "https://www.youtube.com/embed/F-TxCbf-D8I?mute=1&playsinline=1&rel=0&modestbranding=1",
      videoWatch: "https://www.youtube.com/watch?v=F-TxCbf-D8I",
    },
    {
      id: "porsche",
      title: "Porsche · The Long Way to I Do",
      creator: "Em Cooper × Tonic DNA · 代理 adam&eve\\TBWA",
      cat: "video",
      catLabel: "视频动效",
      tag: "油画动画 · 品牌影像",
      source: "Stash Media · 2026-10-30",
      note: "真故事用持续改写的油画表面转场：风景溶进人物、笔触即剪辑；记忆流质感，而不是字面复原公路片。",
      href: "https://www.stashmedia.tv/em-cooper-tonic-dna-paint-a-true-romance-for-porsche/",
      region: "国际",
      mediaKind: "video",
      watchOnSource: false,
      videoUrl: "https://player.vimeo.com/video/1241253326?muted=1&autopause=1&title=0&byline=0&portrait=0",
      videoWatch: "https://vimeo.com/1241253326",
    },
    {
      id: "hyperslide",
      title: "Hyperice × Nike · Air Zoom Hyperslide",
      creator: "someform Studio（Berlin）",
      cat: "video",
      catLabel: "视频动效",
      tag: "产品 CG · 品牌影像",
      source: "Stash Media · 2026-10-28",
      note: "沙色单色底上用红光强调热敷功能；缓振、气垫、热量被抽象成流体剪辑，产品设计本身驱动镜头节奏。",
      href: "https://www.stashmedia.tv/someform-studio-slips-into-the-hyperslide-for-hyperice-nike/",
      region: "国际",
      mediaKind: "video",
      watchOnSource: true,
    },
    {
      id: "mega",
      title: "Mega Chile · On-Air Graphics System",
      creator: "Lumbre（Buenos Aires · CD Sergio Saleh）",
      cat: "video",
      catLabel: "视频动效",
      tag: "广播包装 · 品牌系统动效",
      source: "Stash Media · 2026-10-28",
      note: "从 Logo 拆出药丸/拱/半圆模块，再建整套 on-air 语言；电蓝、热粉、暖黄与黑灰锚点，多频道仍可一眼认 Mega。",
      href: "https://www.stashmedia.tv/fun-color-in-style-lumbre-keeps-it-mega-for-mega-chile/",
      region: "国际",
      mediaKind: "video",
      watchOnSource: true,
    },
    {
      id: "opticalarts",
      title: "Optical Arts · Channel 4 Idents / Apple TV",
      creator: "Optical Arts（Fabrice Le Nezet · Joe Jackson）",
      cat: "video",
      catLabel: "视频动效",
      tag: "台宣 Idents · 实拍光影 CG",
      source: "It's Nice That · 2026-09-02",
      note: "Channel 4 多导演片段熔成一条主 Ident；Apple TV 标则坚持真玻璃实拍再后制——物理光影优先于算法炫技。",
      href: "https://www.itsnicethat.com/articles/optical-arts-advertisements-and-idents-film-animation-project-020926",
      region: "国际",
      mediaKind: "video",
      watchOnSource: true,
    },
    {
      id: "nikarthur",
      title: "Nik Arthur × A24",
      creator: "Nik Arthur × Emi Takahashi",
      cat: "video",
      catLabel: "视频动效",
      tag: "实验动画 · 有机材质",
      source: "It's Nice That · 2026-10-19",
      note: "蒙特利尔沼泽浮萍当颜料、倒拍成型；几乎不是传统动画，而是把自然材料变成可定时的 Logo 呼吸。",
      href: "https://www.itsnicethat.com/articles/nik-arthur-animation-discover-191026",
      region: "国际",
      mediaKind: "video",
      watchOnSource: true,
    },
    {
      id: "dreamcat",
      title: "DREAMCAT",
      creator: "MAKE MAMI PROUD（Daniel Bartels）· 动画 Joost Jansen · 合成 Jakob Saretz",
      cat: "video",
      catLabel: "视频动效",
      tag: "实拍+手绘 · 作者短片",
      source: "Motionographer · 2026-11-04",
      note: "近三年实拍与逐帧手绘合成的作者短片；砍掉两周怪物镜头、改让 Dreamcat 贯穿——工艺克制与叙事诚实同在。",
      href: "https://motionographer.com/2026/11/04/im-having-a-breakdown-dreamcat-the-monster-that-wasnt-his/",
      region: "国际",
      mediaKind: "video",
      watchOnSource: true,
    },
  ];

  const FILTERS = [
    { id: "all", label: "全部" },
    { id: "digital", label: "数字界面" },
    { id: "motion", label: "运动与互动" },
    { id: "video", label: "视频动效" },
    { id: "brand", label: "平面与品牌" },
    { id: "product", label: "产品与包装" },
  ];

  const counts = {
    all: PIECES.length,
    digital: PIECES.filter((p) => p.cat === "digital").length,
    motion: PIECES.filter((p) => p.cat === "motion").length,
    video: PIECES.filter((p) => p.cat === "video").length,
    brand: PIECES.filter((p) => p.cat === "brand").length,
    product: PIECES.filter((p) => p.cat === "product").length,
  };

  const gallery = document.getElementById("gallery");
  const filterBar = document.getElementById("filter-bar");
  const overlay = document.getElementById("overlay");
  const detail = document.getElementById("detail");
  const detailClose = document.getElementById("detail-close");
  const detailMedia = document.getElementById("detail-media");
  const detailMediaFrame = document.getElementById("detail-media-frame");
  const detailTitle = document.getElementById("detail-title");
  const detailCreator = document.getElementById("detail-creator");
  const detailCat = document.getElementById("detail-cat");
  const detailTag = document.getElementById("detail-tag");
  const detailSource = document.getElementById("detail-source");
  const detailRegion = document.getElementById("detail-region");
  const detailNote = document.getElementById("detail-note");
  const detailActions = document.getElementById("detail-actions");

  let activeFilter = "all";
  let activeId = null;
  let lastTrigger = null;
  let focusables = [];

  const playIcon = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.5 2.8v10.4L13.2 8 4.5 2.8Z"/></svg>`;
  const extIcon = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.5 3.5a.75.75 0 0 0 0 1.5h3.19L3.22 11.47a.75.75 0 1 0 1.06 1.06L10.75 6.06v3.19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-5Z"/></svg>`;

  function isVideo(p) {
    return p.mediaKind === "video" || p.cat === "video";
  }

  function canEmbed(p) {
    return isVideo(p) && p.videoUrl && !p.watchOnSource;
  }

  function renderFilters() {
    filterBar.innerHTML = FILTERS.map((f) => {
      const pressed = f.id === activeFilter;
      return `<button type="button" class="filter-chip" role="tab" id="tab-${f.id}" data-filter="${f.id}" aria-selected="${pressed}" aria-pressed="${pressed}" tabindex="${pressed ? 0 : -1}">${f.label}<span class="filter-chip__count">${counts[f.id]}</span></button>`;
    }).join("");
  }

  function cardHTML(p, index) {
    const video = isVideo(p);
    const mediaW = video ? 800 : 800;
    const mediaH = video ? 450 : 600;
    const overlayBits = video
      ? `<span class="card__play" aria-hidden="true"><span class="card__play-disc">${playIcon}</span></span>${
          p.watchOnSource || !p.videoUrl
            ? `<span class="card__badge">在来源观看</span>`
            : ``
        }`
      : "";
    return `
      <button type="button" class="card${video ? " card--video" : ""}" data-id="${p.id}" data-cat="${p.cat}" aria-label="查看 ${escapeAttr(p.title)} 详情" style="animation-delay:${Math.min(index, 6) * 40}ms">
        <div class="card__media">
          <img src="images/${p.id}.jpg" alt="${escapeAttr(p.title)}" width="${mediaW}" height="${mediaH}" loading="lazy" decoding="async" />
          ${overlayBits}
        </div>
        <div class="card__body">
          <div class="card__chips">
            <span class="chip chip--${p.cat}"><span class="chip__dot" aria-hidden="true"></span>${p.catLabel}</span>
            <span class="chip chip--tag">${escapeHTML(p.tag)}</span>
          </div>
          <h3 class="card__title">${escapeHTML(p.title)}</h3>
          <p class="card__creator">${escapeHTML(p.creator)}</p>
          <p class="card__note">${escapeHTML(p.note)}</p>
          <p class="card__region">${escapeHTML(p.region)}</p>
        </div>
      </button>`;
  }

  function renderGallery() {
    gallery.innerHTML = PIECES.map((p, i) => cardHTML(p, i)).join("");
    applyFilter(activeFilter, false);
  }

  function applyFilter(next, animate = true) {
    activeFilter = next;
    [...filterBar.querySelectorAll(".filter-chip")].forEach((chip) => {
      const on = chip.dataset.filter === next;
      chip.setAttribute("aria-pressed", String(on));
      chip.setAttribute("aria-selected", String(on));
      chip.tabIndex = on ? 0 : -1;
    });
    [...gallery.querySelectorAll(".card")].forEach((card) => {
      const show = next === "all" || card.dataset.cat === next;
      if (!show) {
        card.classList.add("is-hidden");
        return;
      }
      card.classList.remove("is-hidden");
      if (animate) {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
      }
    });
  }

  function stopDetailMedia() {
    const iframe = detailMediaFrame.querySelector("iframe");
    if (iframe) {
      // blank src to stop playback without leaving sound
      iframe.src = "about:blank";
      iframe.remove();
    }
    detailMediaFrame.innerHTML = "";
  }

  function renderDetailMedia(piece) {
    stopDetailMedia();
    const poster = `images/${piece.id}.jpg`;
    if (canEmbed(piece)) {
      detailMedia.classList.add("is-video");
      // muted autoplay attempt; never unmute
      const sep = piece.videoUrl.includes("?") ? "&" : "?";
      const src = `${piece.videoUrl}${sep}autoplay=1`;
      detailMediaFrame.innerHTML = `<iframe title="${escapeAttr(piece.title)}" src="${escapeAttr(src)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      return;
    }
    if (isVideo(piece)) {
      detailMedia.classList.add("is-video");
      detailMediaFrame.innerHTML = `<img src="${poster}" alt="${escapeAttr(piece.title)}" width="960" height="540" />`;
      return;
    }
    detailMedia.classList.remove("is-video");
    detailMediaFrame.innerHTML = `<img src="${poster}" alt="${escapeAttr(piece.title)}" width="960" height="600" />`;
  }

  function openDetail(id, trigger) {
    const piece = PIECES.find((p) => p.id === id);
    if (!piece) return;
    activeId = id;
    lastTrigger = trigger || null;

    renderDetailMedia(piece);
    detailTitle.textContent = piece.title;
    detailCreator.textContent = piece.creator;
    detailCat.innerHTML = `<span class="chip chip--${piece.cat}"><span class="chip__dot" aria-hidden="true"></span>${escapeHTML(piece.catLabel)}</span>`;
    detailTag.textContent = piece.tag;
    detailSource.textContent = piece.source;
    detailRegion.textContent = piece.region;
    detailNote.textContent = piece.note;

    const buttons = [];
    if (isVideo(piece) && (piece.watchOnSource || !piece.videoUrl)) {
      buttons.push(
        `<a class="btn btn--primary" href="${escapeAttr(piece.href)}" target="_blank" rel="noopener noreferrer">在来源观看 ${extIcon}</a>`
      );
      buttons.push(
        `<a class="btn btn--quiet" href="${escapeAttr(piece.href)}" target="_blank" rel="noopener noreferrer">来源页 ${extIcon}</a>`
      );
    } else if (isVideo(piece) && piece.videoUrl) {
      // embeddable: primary can open watch page if present, else source; quiet = source
      const watch = piece.videoWatch || piece.href;
      buttons.push(
        `<a class="btn btn--primary" href="${escapeAttr(watch)}" target="_blank" rel="noopener noreferrer">在来源观看 ${extIcon}</a>`
      );
      buttons.push(
        `<a class="btn btn--quiet" href="${escapeAttr(piece.href)}" target="_blank" rel="noopener noreferrer">来源页 ${extIcon}</a>`
      );
    } else {
      if (piece.live) {
        buttons.push(
          `<a class="btn btn--primary" href="${escapeAttr(piece.live)}" target="_blank" rel="noopener noreferrer">打开原站 ${extIcon}</a>`
        );
      }
      buttons.push(
        `<a class="btn btn--quiet" href="${escapeAttr(piece.href)}" target="_blank" rel="noopener noreferrer">来源页 ${extIcon}</a>`
      );
    }
    detailActions.innerHTML = buttons.join("");

    overlay.classList.add("is-open");
    detail.classList.add("is-open");
    detail.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");

    focusables = getFocusable(detail);
    detailClose.focus();
  }

  function closeDetail() {
    if (!detail.classList.contains("is-open")) return;
    stopDetailMedia();
    overlay.classList.remove("is-open");
    detail.classList.remove("is-open");
    detail.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    activeId = null;
    if (lastTrigger && typeof lastTrigger.focus === "function") {
      lastTrigger.focus();
    }
    lastTrigger = null;
  }

  function getFocusable(root) {
    return [...root.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
      (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
    );
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(str) {
    return escapeHTML(str).replace(/'/g, "&#39;");
  }

  filterBar.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    applyFilter(chip.dataset.filter);
  });

  filterBar.addEventListener("keydown", (e) => {
    const chips = [...filterBar.querySelectorAll(".filter-chip")];
    const idx = chips.indexOf(document.activeElement);
    if (idx < 0) return;
    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % chips.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + chips.length) % chips.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = chips.length - 1;
    else return;
    e.preventDefault();
    chips[next].focus();
    applyFilter(chips[next].dataset.filter);
  });

  gallery.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    openDetail(card.dataset.id, card);
  });

  detailClose.addEventListener("click", closeDetail);
  overlay.addEventListener("click", closeDetail);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detail.classList.contains("is-open")) {
      e.preventDefault();
      closeDetail();
      return;
    }
    if (e.key === "Tab" && detail.classList.contains("is-open")) {
      focusables = getFocusable(detail);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  renderFilters();
  renderGallery();

  window.__JOURNAL__ = { PIECES, counts };
})();
