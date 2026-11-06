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
      applyType: "网页/代码复刻（主）· 图像静帧（辅）· 视频/动效（辅）",
      prompts: [
        {
          type: "网页/代码复刻",
          text: "复刻 Agrumea Farm（https://www.agrumeafarm.it/en）首页气质与交互，不要做成通用食品电商。\n\n视觉令牌（必须用这些值）：\n- 背景奶油 #FDF3EB（变量名可以叫 white，但看起来是纸色，不是纯白）\n- 酒红 #762530：正文、描边、有机色块、页脚背景\n- 品牌橙 #E94E1B：强调、环形字、图标、菜单圆点、链接悬停\n- 辅黄 #F39200，少用\n- 圆角 15px；胶囊与语言切换用满圆\n- 字体：展示与大菜单用优雅衬线（接近 ivymode / Palatino），UI 与正文用人文无衬线（接近 ivystyle-sans / Avenir Next）。标题字重 400，不要加粗标题。正文 16px/1.3。展示字号用 clamp(4rem, 2.9rem + 11vw)，英雄级 clamp(4.1rem, 2.65rem + 5.95vw)\n- 12 列网格，列间距 clamp(12px, 1.45vw, 30px)，左右内边距 clamp(30px, 2vw, 40px)\n\n结构：\n1) 固定顶栏：左是 IT / EN 两个 37px 描边圆环（当前项填品牌橙、字反成奶油色）；正中品牌：橙色线描农夫+柑橘图标，AGRUMEA 酒红，Farm 橙色；右是 MENU 描边胶囊 + 37px 橙底圆，圆内一枚旋转 45° 的白色小菱形。顶栏滚动时可上移隐藏；紧凑态图标缩掉，字标上移。\n2) 首屏满视口：奶油底。底部升起一块宽约 clamp(750px, 80vw) 的深酒红有机色块（不规则圆角、像打翻的果酱摊开）。色块上叠一圈绕行衬线大字，橙色，文案 CONSERVE ARTIGIANALI DI SICILIA，被罐子遮挡一部分。4 只真实玻璃罐沿大约 10° 的斜带排列，可左右拖动（光标 grab），每罐约 200×320，银盖、透明玻璃、可见内容物；标签是印刷纸贴在罐上，色彩跟随产品（橙marmalade / 薄荷绿切森林绿的 Smeraldo / 灰蓝 Gelsi Neri / 砖红 Pesto Rosso）。中央一粒白底橙字小胶囊「SCOPRI IL PRODOTTO」，底部细衬线「SCROLL TO DISCOVER」。鼠标移动时色块和环形字做极轻视差（约 8–14px）。\n3) 点菜单：整页品牌橙从上方滑入盖住画面（0.9s，cubic-bezier(.645,.045,.355,1)），不是侧边抽屉。主链是超大衬线大写：Home / Pantry / Production / Experience，条目逐条错位缩入；当前项旁边一枚旋转 45° 的白菱形。悬停时字母逐个上滚，间隔 18ms。次链 About / Contacts / Shop。\n4) 首次进入：奶油底上衬线大字显示加载百分比，随后一整块品牌橙从底部扫到顶部，时长约 1.8s，easing cubic-bezier(.19,1,.22,1)。\n5) 页脚：满屏 #762530，奶油色文字，标签和大链接用 #E94E1B，最低一屏高，大量留白。\n6) 跟随光标的白胶囊提示，带一枚橙色小菱形。\n7) 必须实现 prefers-reduced-motion：动画时长降到接近 0。\n8) 焦点可见：2px #762530 描边 + 5px #FDF3EB 外光晕。\n\n负面约束：不要出现 Awwwards 展示卡的外圈酒红相框；不要购物车、评分、折扣徽章、搜索框；不要黑金大理石奢侈模板；不要把罐子做成 3D 粘土或塑料；不要用字重 700 的无衬线巨型英文口号；不要侧滑抽屉菜单；不要自动播放喧闹的背景视频。页面过渡和罐子弹出可用 0.42s 淡出并 scale(0.94)。",
        },
        {
          type: "图像静帧 · 餐桌",
          text: "Overhead photograph of a Mediterranean lunch on glossy terracotta-orange tiles. Hands reach in from the edges (blue knit sleeve, magenta sleeve, mustard sleeve) holding toasted bread spread with caponata and red pesto. Three glass jars on the table: purple label Sinfonia Barocca, red Pesto Rosso, green Smeraldo. Blue-and-white patterned ceramic plates, a bowl of green olives, sliced pale cheese, pink textured drinking glasses catching hard sunlight. Warm, appetizing, documentary-fashion lighting, not stock food styling.\nNegative: plastic CGI food, empty white studio sweep, overly dark moody restaurant, text watermarks, extra logos.",
        },
        {
          type: "视频/动效",
          text: "5–7 second UI motion, 16:9. Start on cream #FDF3EB with a large serif percentage that ticks up, then a solid #E94E1B panel wipes from bottom to top in 1.8s with elegant overshoot (cubic-bezier .19,1,.22,1). Reveal the Agrumea hero: burgundy organic shape rises 24px and fades in, circular orange serif type settles from -18° , four photoreal jars slide into a 10° diagonal band. A small white product pill and “scroll to discover” fade up. Subtle mouse parallax. No shake, no whoosh sound graphics, no clay jars.",
        },
      ],
    },
    {
      id: "grail",
      title: "Grail",
      creator: "denormalized",
      cat: "digital",
      catLabel: "数字界面",
      tag: "产品站 / App",
      source: "Awwwards · Site of the Day · 2026-11-04",
      note: "PP Pangaia Light 超大衬线钉住「RECLAIM YOUR LIFE」；一部 iPhone 以 perspective 死钉视口中央，章节底色在黑/暖灰/粉雾间轮换；产品截图几乎不动，动势交给左右正文与 WebGL/Matter 任务卡漂移。",
      href: "https://www.awwwards.com/sites/grail",
      live: "https://grail-app.com/",
      region: "国际",
      applyType: "网页/代码复刻（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "网页/代码复刻",
          text: "你在复刻一款「现实任务 / 生活冒险」App 营销单页的气质与交互，不是照搬 Grail 商标与原文。请用虚构品牌名与全新文案。\n\n【视觉令牌 · 来自实测 CSS】\n- 落地浅底 --landing-bg: #fafaf8；暖浅底 --landing-bg-warm: #f0ede6；壳层 --shell-bg: #eeeae3\n- 主字 --landing-text: #18181b；次字 #71717a / #a1a1aa\n- 深章节能参照 Awwwards 深色 #182124 与纯黑章节；浅卡片 #fff；玻璃 --glass-bg: #fffc、blur 20px\n- 强调金 --accent: #c9a24a；粉雾点缀 #e9b8ff / #f6e3fb / #ffcdff（章节/ pill 用，勿整页糖果色）\n- 圆角 --landing-radius: 2rem；卡片 radius 约 20px\n- 字体：大标题 PP Pangaia（或近义高对比衬线）weight 300、uppercase、letter-spacing -0.01em、line-height ~0.88；正文 Switzer / SF Pro 系无衬线\n- 全局过渡 --landing-transition: cubic-bezier(.32, .72, 0, 1)；首页另见 cubic-bezier(0.22, 1, 0.36, 1)\n\n【结构（自上而下章节叙事，约 Chapter 01–08）】\n1. Preloader：短促图形或图腾闪入，再进首屏\n2. Hero：巨幅衬线标语占上半或全幅；中央竖立 iPhone（真机框+App 截图）；右上 Waitlist 胶囊\n3. 问题陈述章（深底）：两侧窄栏短文，手机仍居中\n4. 计时器/任务章（浅底）：说明「限时任务」逻辑；手机屏幕内容可切换，机身位置不变\n5. 旅程/结果卡片墙：多张圆角任务卡（部分纯图案：棋盘、条纹、插画），可轻微 3D 漂移\n6. 语音反馈 / 图腾 Totems / 属性 Stats / 公会 Guilds：各占 sticky 视口段\n7. Waitlist + Footer：深底邮箱与条款\n\n【必须实现的交互与时序】\n- 平滑滚动（Lenis 类），整页 storytelling，非生硬锚点跳切\n- 中央手机：长段滚动中 position 视觉上 sticky；用 CSS 变量驱动 perspective(1400px)、rotateY(约 -22°→0)、rotateX(约 10°→0)、translateY 与 scale(0.84→1)，手机本身几乎不位移，只做姿态回正\n- 章节切换：背景色/文字色交叉淡入；左右文案随 scroll 进场（opacity + 短距 translateY 12px 级），手机截图可 crossfade，机框不动\n- 任务卡：WebGL 或轻量物理（可 Matter.js 气质）—悬停微抬、松手回弹；不要整页粒子烟花\n- Totems / Guilds：横向或环形选择，选中缩放+描边；Stats 段 sticky，数字或条形随进入视口填充\n- Waitlist：输入聚焦描边，提交微反馈；Footer 链悬停下划线展开\n- 鼠标互动：Stats 等区块可有轻微跟随/滤镜，克制\n- 所有过渡优先 cubic-bezier(.32,.72,0,1)；尊重 prefers-reduced-motion（改为瞬时或淡入）\n\n【应保留】高对比衬线标语、手机死钉构图、章节底色轮换、任务卡图案化、少装饰线  \n【应避免】电商货架网格、彩虹渐变英雄区、手机满屏乱飞、盗用 Grail / denormalized 商标与原任务文案",
        },
        {
          type: "图像静帧",
          text: "竖构图营销静帧：暗黑剧场光从左上打下，中央一台开盖笔记本或手机屏幕显示 App 营销页——超大白色衬线大写标语，周围漂浮圆角任务卡片（白底短句卡 + 黄黑棋盘/红橙条纹图案卡），景深虚化。可有微小金属骑士/图腾摆件点缀，不要可读真实商标。胶片灰尘光柱。禁止杂乱 UI 图标墙。",
        },
      ],
    },
    {
      id: "deepbook",
      title: "DeepBook",
      creator: "HOLOGRAPHIK × Sui Foundation Design × AKKA Studio",
      cat: "digital",
      catLabel: "数字界面",
      tag: "产品站 · 含动势",
      source: "Awwwards · Site of the Day · 2026-11-03",
      note: "黑底上灰短竖线弯成同心弧，偶发品牌蓝点如成交；同一记号在不同页被拉成列、拆成双曲线；API 区是三层文件「文件夹」堆叠，数字用 counter reel 翻动。",
      href: "https://www.awwwards.com/sites/deepbook",
      live: "https://www.deepbook.tech/",
      region: "国际",
      applyType: "网页/代码复刻（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "网页/代码复刻",
          text: "复刻「链上订单簿 / 深度交易」产品营销站的图形系统与滚动动效。使用虚构协议名与数据，不要复制 DeepBook / Sui 商标与真实交易文案。\n\n【视觉令牌 · 实测 CSS】\n- --color-brand: #1E6EF3；hover #145DD9；edge 点缀 #74A0EC\n- --color-ink / dark: #000；inverse #FFF\n- --color-muted: #6A7681（Awwwards 亦标此灰）\n- --color-surface / border: #DAE0E5；canvas #FFF\n- 字体：PP Mori（Bold 标题 / Regular 正文），Arial 回退\n- Display: clamp(2.5rem, 1.75rem + 3vw, 5rem)，line-height ~1.05\n- 链接下划线：scaleX 0→1，.24s cubic-bezier(.23, 1, .32, 1)\n- Folder 缩放悬停：scale/filter .24s ease-out\n\n【结构】\n1. 顶栏：左 Logo（双横杠文件夹形符号+词标）、中/右导航、CTA\n2. Hero（深底）：全屏或近全屏短视频/海报——灰短竖线粒子场弯成同心弧，稀疏 #1E6EF3 短划像成交；叠大标题「The Home of …」与一句 lead；可有半透明黑罩 #0006\n3. 指标条：4 个品牌蓝大数字（counter），标签为 muted 灰\n4. SPOT / PREDICT 双产品块：浅底或白底，左文右图或对半；图为订单簿记号变体（竖列、双曲线）\n5. API & SDK：三层彩色文件夹 stack（01/02/03），纹理纸面+描边 #74a0ec\n6. Custody 事实网格、FAQ 手风琴、Footer（crowd 视差图层可选）\n\n【必须实现的交互与时序】\n- 全文滚动叙事；关键标题/正文 data-motion 入场（opacity + 短距上移），不要夸张弹跳\n- Hero：短竖线场持续缓慢旋转/呼吸；蓝点随机闪现（低频）；若有 video，仅装饰、pointer-events none\n- 数字 counter：进入视口时 reel/翻牌到目标值，时长约 0.8–1.4s，ease-out\n- 全页或大段 scroll：章节间可有「满屏段落」推进感（非强制 scroll-snap），插画记号随段落变形（弧→列→双曲线）—同一图形系统，不同页不同拓扑\n- Folder stack：叠放；hover 当前层 scale 微增、其余略暗；点击可展开描述\n- FAQ：accordion，问题 hover 变品牌蓝，折叠箭头旋转 .18s ease-out\n- Footer 链：下划线 draw；可选人群图多层 translate 视差（data-crowd-layer）\n- 尊重 prefers-reduced-motion\n\n【应保留】黑底烛芯弧线、#1E6EF3 作为唯一高饱和强调、文件夹堆叠、克制灰白正文  \n【应避免】币圈霓虹绿红涨跌表、复杂 3D 币、照搬 DeepBook 标志与 slogans",
        },
        {
          type: "图像静帧",
          text: "极简黑底或深灰显示器画面：中央白色无衬线词标旁双横杠蓝符号；周围一圈由细灰短竖线组成的同心弧，弧上稀疏点缀亮蓝短划。干净桌面静物可选。不要交易 K 线截图堆满。",
        },
      ],
    },
    {
      id: "bmw",
      title: "BMW Next Move — F3 RRFI",
      creator: "Format-3",
      cat: "digital",
      catLabel: "数字界面",
      tag: "概念产品站",
      source: "CSS Design Awards · Website of the Day · 2026-11-05",
      note: "黑场上「NEXT MOVE」粗无衬线从左白扫到右冷蓝，背后拓扑等高线涟漪扩散；概念提案站把展厅叙事压成战术界面，滚动大段 pin 讲故事。",
      href: "https://www.cssdesignawards.com/",
      live: "https://www.bmwf3.com/",
      region: "国际",
      applyType: "网页/代码复刻（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "网页/代码复刻",
          text: "复刻一份「汽车智能展厅 / 概念提案」单页的氛围与滚动叙事。品牌与车型名请全部虚构，禁止使用 BMW 圆标、M 标、真实车型名与 Format-3 署名冒充官方。\n\n【视觉令牌 · 实测】\n- 深底 #0A0A0A / #0A0A0B / #051E32；暖浅阅读底 #F7F5F2\n- 标题扫色：左 #FFFFFF → 右冷蓝 #5F9FD8 / #1054DC；品牌蓝点缀 #0066B1\n- 警告/强调红（少用）#E22718 / #EB001A\n- 中性字 #51595F、#212324\n- 字体：大标题 Google Sans Flex Variable 或近义宽几何无衬线（可 Archivo）；正文 DM Sans；等宽标签 Space Mono\n- 缓动：cubic-bezier(0.16, 1, 0.3, 1)；次级 cubic-bezier(0.65, 0, 0.35, 1)\n\n【结构】\n1. 全屏 Hero：叠字「NEXT / MOVE」（或虚构对等），背后 canvas 拓扑等高线自中心涟漪；可选细黑框\n2. 问题陈述长文：深底白字，引用客户原话卡片\n3. 「经销商盲区」段：双栏或大标题 sticky\n4. 方案五面（five surfaces）：卡片/面板横向或纵向展开\n5. FAQ / 制作自白：浅底或深底问答\n6. 结尾 CTA：Make the next move\n\n【必须实现的交互与时序】\n- 平滑滚动；Hero 标题可 pin 1 屏，拓扑线随 scroll 半径扩大或线密度变化（canvas/SVG）\n- 标题色：可用背景-clip 或双层字做白→蓝水平扫光，随滚动或时间缓慢移动（周期约 6–12s，勿闪烁）\n- 章节进入：大标题分词上移+淡入（0.16,1,0.3,1）；引用块延迟 80–120ms 错峰\n- 面板 hover：边框/光晕微亮，不要玻璃拟态过度\n- 可选数据 HUD 小标签（Space Mono）跟随章节出现\n- 视频叠段：若有，用约 100dvh overlap 叙事，文字压在画面上\n- reduced-motion：拓扑改为静态等高线，扫光冻结\n\n【应保留】黑场、拓扑涟漪、白到冷蓝扫字、提案站长文节奏  \n【应避免】官方车展炫光粒子、真实宝马商标、跑车 3D 绕场循环",
        },
        {
          type: "图像静帧",
          text: "16:9 黑底海报：「NEXT MOVE」两行超粗无衬线，左白右冰蓝水平渐变；背景细密拓扑等高线圆形涟漪，暗角，中央微弱红蓝光晕。无车标。",
        },
      ],
    },
    {
      id: "dontlookup",
      title: "Don't Look Up",
      creator: "Marcelo Reis Melo",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "互动游戏",
      source: "Awwwards · Site of the Day · 2026-11-01",
      note: "米白纸底黑墨线；Marsipan 胖手写里两个 O 变成向上看的瞳孔；黄=已察觉、蓝=相信、红=争吵，色彩即规则；Three.js 人群 + GSAP UI，目标凑满万亿同时别让黄人聚到脚边。",
      href: "https://www.awwwards.com/sites/dont-look-up-game",
      live: "https://www.dontlookup.app/",
      region: "国际",
      applyType: "视频/动效 · 网页/代码复刻（含游戏交互）",
      prompts: [
        {
          type: "网页/代码复刻",
          text: "做一个讽刺题材的浏览器小游戏落地页+主玩法（虚构游戏名）。技术气质：Three.js 场景 + GSAP/CSS UI，手绘墨线，不要写实枪战。\n\n【视觉令牌 · 实测】\n- --paper: #F4F3EF；--ink: #14140F\n- 黄（已察觉）：#F8E08A / #F2C31A / #C98F06\n- 蓝（相信）：#9ABEEF，跟随/深蓝 #2B5A9B\n- 红（争吵）：#C0342A\n- 字体：展示 Marsipan（回退 Luckiest Guy）；正文 Nunito 圆体\n- UI 按钮高约 44px、圆角 14px、描边约 2.5–3px 墨线\n\n【界面结构】\n- 顶栏：金钱读数、目标（如 $1 trillion）、已用时间\n- 主舞台：俯视/斜视 Three 人群，玩家是「很高的富人」立于人群之上（剪影或简单几何即可）\n- 底/侧：distraction 道具栏（1–9 选择）、fee 滑条、教程面板\n- 字标：胖手写，O=瞳孔\n\n【游戏交互（必须写清规则，可用原创数值）】\n1. 初始市民为「白」：付钱且可被转化\n2. 变黄：已察觉费用——不付钱、会说服别人、走向你的脚边；黄人在脚边聚集过多则失败（推翻你）\n3. 变蓝：相信——付费最好、难被劝回\n4. 变红：争吵中——仍付费但远离脚边\n5. 空格/按钮：在瞄准处投放 distraction；靠近黄人时影响圈更大\n6. 提高 fee：红线示意群众承受上限（约 35% 气质），涨费前最好先 distraction\n7. 胜利：攒到目标巨款；失败：黄人同时抵达脚边超阈值\n8. 教程：可暂停阅读；esc 取消投放；↑↓ 调 fee\n\n【动效时序】\n- UI 面板：GSAP 弹入，overshoot 轻微；纸色阴影\n- 投放 distraction：短促扩散环 + 人群状态色过渡 0.3–0.6s\n- 硬币/光标可自定义（lens/手型）\n- 胜利/失败全屏手写字 + 墨线插画，不要粒子烟花\n\n【应保留】纸色、墨线、三色即规则、胖字瞳孔 O  \n【应避免】写实暴力、抄袭原作角色资产与「Don't Look Up」商标字标（请换名）",
        },
        {
          type: "视频/动效",
          text: "5–8 秒循环：米白纸纹理底，黑墨粗手写「DON'T LOOK UP」，两个 O 为圆瞳孔向上看；四周黑色线描美元硬币轻轻旋转弹跳。节奏讽刺、轻快，无写实 3D 皮肤人群。末帧可闪黄/蓝/红三色色块作为状态图例。",
        },
      ],
    },
    {
      id: "amn",
      title: "Amsterdam Museum Night 2026",
      creator: "From Form",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "动态品牌 · 平面延伸",
      source: "It's Nice That · 2026-11-05",
      note: "超现实静物（手、鸟形器物、刻花杯）与闭眼肖像拼进暗箱角落；17 世纪西洋景比例（偏长额颈、略大眼）带来疏离感；动画全是照片剪贴而非实拍，黑白夜曲为主（街上海报另有彩版延展）。",
      href: "https://www.itsnicethat.com/articles/from-form-amsterdam-museum-night-graphic-design-project-051126",
      region: "国际",
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "黑白夜曲风动态品牌短片 6–10 秒：暗角箱型空间内，一张闭眼古典比例肖像（略长额头与脖子）静止如蜡像；周围照片剪贴物件——断手、金属鸟形物、刻花玻璃杯——缓慢悬浮、交错、轻微缩放，像西洋景层片。禁止实拍演员走动。音效气质：竖琴闪烁、钟声、远处猫头鹰（画面可不含 UI）。淡入淡出如翻页，不要现代 MG 弹性字。",
        },
        {
          type: "图像静帧",
          text: "黑白超现实海报：暗箱角落中的闭眼女子正脸，周围漂浮断手、鸟形金属物与刻花杯；轻微胶片颗粒；西洋景比例。留白给活动标题与日期（用虚构活动名，勿冒充官方 Museum Night 锁标）。亦可做彩色街贴版：粉衣蓝靴人物走在过绿植物间，巨大银钥匙与灯泡漂浮——仍是拼贴而非 CGI 光滑人偶。",
        },
      ],
    },
    {
      id: "applemusic",
      title: "Apple Music 品牌视觉重塑",
      creator: "TBWA\\Media Arts Lab × Optical Arts",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "动态品牌影像",
      source: "It's Nice That · 优设设计周刊转介 · 2026-10-28",
      note: "真声波驱动油面折射拍成百帧再合成；黑白主视觉、液态玻璃球扭曲字标；静止帧也像被音乐碰过；色彩让给艺人内容，系统本身极度克制。",
      href: "https://www.itsnicethat.com/features/apple-music-rebrand-graphic-design-spotlight-281026",
      region: "国际",
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "高端品牌动态 5–8 秒，黑白为主：一块粘稠油/液态玻璃表面被真实声波振动，折射下方的无衬线小写词标与简标，产生放大、重影与边缘鬼影。镜头极缓推近。不要霓虹频谱条、不要彩色均衡器。可在末帧切到干净字标。强调「物理折射」而非 AE 卡通水波。请使用虚构流媒体品牌名与几何简标，禁止苹果商标与 Apple Music 字标。",
        },
        {
          type: "图像静帧",
          text: "白灰底上黑色小写词标；正中一颗透明液滴/玻璃球透镜，球内字母放大扭曲，球外出现重影与轻微色散（仅灰阶）。表面有细微尘点如实拍。极简、克制、像 Liquid Glass 被声音碰过。禁止彩虹、禁止官方苹果标志。",
        },
      ],
    },
    {
      id: "barreve",
      title: "Bar Rêve",
      creator: "DutchScot",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "视觉识别",
      source: "It's Nice That · 优设设计周刊转介 · 2026-10-27",
      note: "牛血红底配雾蓝细线；书法感词标会拉长、漂浮、蒸发；绵羊/天鹅/公牛以梦的象征轻描；地址变成 Zzz，网站甚至引导「向上漂」而非向下滚。",
      href: "https://www.itsnicethat.com/articles/dutchscots-bar-reve-graphic-design-project-271026",
      region: "国际",
      applyType: "图像静帧（主）",
      prompts: [
        {
          type: "图像静帧",
          text: "竖版品牌明信片：深牛血红/勃艮第底（约 #2C0E14–#3A1018）；雾蓝（约 #A7C4D8）全大写无衬线地址叠在上方；中央一只由断裂曲线构成的绵羊线描——卷毛不闭合、闭眼、腿为 U 形描边，带一点书法甩笔。大量留红。也可替换为天鹅或公牛，同一细线语言。词标若出现：欧陆书法脚本，字母间距可被拉长如蒸汽。禁止写实油画、禁止金色奢侈品纹样。品牌名请改成虚构酒吧名。",
        },
      ],
    },
    {
      id: "crow",
      title: "CROW FFEE 乌鸦咖啡",
      creator: "余尤勇",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "海报 · 品牌",
      source: "站酷三火推荐",
      note: "奶油纸底上单一森林绿；「CROW」「FFEE」故意拆成两词；右半幅木刻/橡皮章质感乌鸦；口号「不讨好世界 只讨好你的困意」形成对抗性清醒。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTI0NDQ=.html",
      region: "中文",
      applyType: "图像静帧（主）",
      cardNote: "封面观察 / 详情页 WAF",
      prompts: [
        {
          type: "图像静帧",
          text: "咖啡品牌海报，仅两色：奶油白/纸白底 + 森林绿（约 #1F4D3A–#2D5A3F）。顶上大号无衬线「CROW」与「FFEE」分两处排布，中间可空或小字「咖啡品牌形象设计」。右侧大半幅木刻风乌鸦侧影，墨绿色块内有凿刻白斑与毛刺边缘。左下装饰「Crow」印章字 + 中英口号（可改写同气质金句）。大量留白。禁止渐变、禁止摄影拉花、禁止第三色。",
        },
      ],
    },
    {
      id: "huili",
      title: "百年回力丨回力虎 IP",
      creator: "几克鱼",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "IP 形象",
      source: "站酷三火推荐 · 回力100周年",
      note: "红黑白高对比；搪瓷/潮玩质感虎仔腾空拉弓；背后红色半调网点喷出速度感；球鞋造型与国潮字标把百年国货做成收藏级 IP 海报。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTY0OTI=.html",
      region: "中文",
      applyType: "图像静帧（主）",
      cardNote: "封面观察 / 详情页 WAF",
      prompts: [
        {
          type: "图像静帧",
          text: "国潮 IP 角色海报：红、黑、白三色。中央搪瓷光滑质感的圆润虎仔（短肢、大眼、额头黑纹），白衣红竖条，胸前可有虚构英文短词；黑短裤；厚底白红运动鞋。腾空拉弓射向左上。背景上黑下红，主角色后有红色半调圆点放射。四角可放周年信息与徽章，但不要复制「回力/Warrior」注册商标——改用虚构国货运动品牌名。禁止二次元过度美型、禁止五彩渐变。",
        },
      ],
    },
    {
      id: "lanvia",
      title: "银发品牌｜万物归岚 / LANVIA",
      creator: "ResauceDesign",
      cat: "product",
      catLabel: "产品与包装",
      tag: "包装 · 触感物料",
      source: "站酷三火推荐",
      note: "褐、米、鼠尾草绿与朱红印章点；竖排书法主标配抽象叠石插画；牛皮纸盒、绒面袋、棉绳与眼镜静物把银发生活做成从容东方极简，而非「老龄」标签。",
      href: "https://www.zcool.com.cn/work/ZNzQzNTY4OTY=.html",
      region: "中文",
      applyType: "图像静帧（主）",
      cardNote: "封面观察 / 详情页 WAF",
      prompts: [
        {
          type: "图像静帧",
          text: "俯视产品静物：深木桌面，米灰背景。物料含牛皮纹理长盒（棉绳捆扎）、深褐绒面手提袋（白色腰封）、小玻璃瓶与铝管、茶包纸袋、圆形玳瑁纹眼镜。主视觉字为竖排书法中文词（请用虚构品牌名），下方拉丁衬线小词标；腰封上有抽象叠石/卵石水彩插画（褐、鼠尾绿、米、一点朱红章）。文案气质：「生活自有从容」。光线柔和，强调纸纤维与布面触感。禁止医院风浅蓝、禁止大号「老年」字样、禁止闪亮塑料。",
        },
      ],
    },
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
    }
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
  const detailApplyRow = document.getElementById("detail-apply-row");
  const detailApply = document.getElementById("detail-apply");
  const detailPrompts = document.getElementById("detail-prompts");
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
          <p class="card__region">${escapeHTML(p.region)}${p.cardNote ? ` · <span class="card__waf">${escapeHTML(p.cardNote)}</span>` : ""}</p>
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


  function renderPrompts(piece) {
    detailPrompts.innerHTML = "";
    const list = Array.isArray(piece.prompts) ? piece.prompts.filter((p) => p && p.text) : [];
    if (!list.length) {
      detailPrompts.hidden = true;
      return;
    }
    detailPrompts.hidden = false;
    const head = document.createElement("div");
    head.className = "detail__prompts-head";
    head.innerHTML = `<div class="detail__label">可复刻提示词</div><div class="detail__prompts-count">${list.length} 条</div>`;
    detailPrompts.appendChild(head);
    list.forEach((item, idx) => {
      const block = document.createElement("div");
      block.className = "prompt-block";
      const top = document.createElement("div");
      top.className = "prompt-block__top";
      const typ = document.createElement("div");
      typ.className = "prompt-block__type";
      typ.textContent = item.type || `提示词 ${idx + 1}`;
      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn btn--quiet btn--tiny";
      copyBtn.textContent = "复制";
      copyBtn.setAttribute("aria-label", `复制${typ.textContent}`);
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(item.text);
          copyBtn.textContent = "已复制";
          setTimeout(() => { copyBtn.textContent = "复制"; }, 1600);
        } catch (err) {
          // fallback
          const ta = document.createElement("textarea");
          ta.value = item.text;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); copyBtn.textContent = "已复制"; }
          catch (e2) { copyBtn.textContent = "失败"; }
          document.body.removeChild(ta);
          setTimeout(() => { copyBtn.textContent = "复制"; }, 1600);
        }
      });
      top.appendChild(typ);
      top.appendChild(copyBtn);
      const pre = document.createElement("pre");
      pre.className = "prompt-block__text";
      pre.textContent = item.text;
      block.appendChild(top);
      block.appendChild(pre);
      detailPrompts.appendChild(block);
    });
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

    if (piece.applyType) {
      detailApply.textContent = piece.applyType;
      detailApplyRow.hidden = false;
    } else {
      detailApply.textContent = "";
      detailApplyRow.hidden = true;
    }

    renderPrompts(piece);

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
