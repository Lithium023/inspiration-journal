(() => {
  const BATCH = window.JOURNAL_1107;
  const BATCH9 = window.JOURNAL_1109;
  const BATCH10 = window.JOURNAL_1110;
  if (!BATCH) throw new Error("Missing 2026-11-07 journal batch");
  if (!BATCH9) throw new Error("Missing 2026-11-09 journal batch");
  if (!BATCH10) throw new Error("Missing 2026-11-10 journal batch");

  const TODAY10 = [
    {
      id: "clinia",
      title: "Clinia",
      creator: "MILL3",
      cat: "digital",
      catLabel: "数字界面",
      tag: "医疗 AI 产品站 · 字体系统与明暗模式",
      source: "Awwwards · Nominee · 2026-11-09",
      note: "最有辨识度的不是又一张医疗 AI 功能海报，而是暖象牙 Hero 场上几道发丝橙弧（左三右二、大半径相交，不是同心涟漪），再配一段无需操作、自动循环的三拍叙事：病人图谱 → 对话卡 → 目录窗口。衬线标题把故事语气从操作界面里分出来，页头胶囊切换近黑炭场地——气质在克制的纸质感，不在科技蓝。",
      href: "https://www.awwwards.com/sites/clinia",
      live: "https://clinia.com/",
      region: "国际",
      applyType: "网页/代码复刻",
      promptsLabel: "AI复刻提示词",
      essay: BATCH10.clinia.essay,
      craft: BATCH10.clinia.craft,
      prompts: BATCH10.clinia.prompts,
    },
    {
      id: "zirka",
      title: "ZIRKA Interceptor",
      creator: "Qream（Yehor Herasymenko · Illya Bilyk · Vladyslav Laruskin）",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "产品叙事站 · 滚动预渲染与界面隐喻",
      source: "Awwwards · Site of the Day · 2026-11-09",
      note: "最有辨识度的不是「把拦截机 3D 模型摆进首屏当海报」，而是加载之后的第一视口只剩 #050505 上的 Inter Display 大标题与 HUD 铬层；机身作为预渲染影像，要等到滚动进入规格 001+ 才出现，镜头、裁切与打光随滚动擦洗改变，再叠准星、圆环和后段的全幅橙色摄影调色。\n\n值得借鉴：用 MP4/WebM + Canvas 2D 序列 + Lottie/SVG 叠层，就能做出「像 3D 产品剧场」的滚动手感，而不在浏览器里跑实时三维。代价是预渲染板必须几何正确、字体与自定义准星指针必须真的加载；封面/奖项缩略图里那台显示器中被神光勾亮的机身，是后期滚动或棚拍画框，不要误锁成第一屏。",
      href: "https://www.awwwards.com/sites/zirka-interceptor",
      live: "https://www.zrk.technology/",
      region: "国际",
      applyType: "网页/代码复刻（主）· 动效/视频（次）",
      promptsLabel: "AI复刻提示词",
      essay: BATCH10.zirka.essay,
      craft: BATCH10.zirka.craft,
      prompts: BATCH10.zirka.prompts,
    },
    {
      id: "julia",
      title: "Julia",
      creator: "Hey Studio",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "咖啡馆识别 · 实物丝带字标",
      source: "BP&O · 2026-11-04",
      note: "字标不是先画再仿真材质，而是用真丝带折出字母，把折痕、阴影和松紧留在字形里再描成矢量。同一条丝带从台面绕到纸杯、工装、橱窗乙烯，点心盒则用真丝带扎上，把「多花一点心思包起来」做成整套识别。",
      href: "https://bpando.org/2026/11/04/tied-with-care/",
      region: "国际",
      applyType: "平面/图像（主 · 字标静物 / 纸杯 / 工装 / 点心盒 / 橱窗 / 小票）",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读 Hey 案例与 BP&O 文本，并对封面及物料照片作过观察。无独立咖啡馆活站。",
      essay: BATCH10.julia.essay,
      craft: BATCH10.julia.craft,
      prompts: BATCH10.julia.prompts,
    },
    {
      id: "temper",
      title: "Temper Victory Edition",
      creator: "Studio Hono（维也纳；与酿酒师 Luka Zeichmann 合作）",
      cat: "product",
      catLabel: "产品与包装",
      tag: "限定酒标 · 翻页动画包装",
      source: "It's Nice That · 2026-10-26",
      note: "把一场漫长决赛的最后四秒拆成六十帧，一帧一瓶；网球不是印上去的，而是冲孔，透光时酒液变成球。六十张按序排好就是那个赛点，Riso 的套印偏移也跟着动。",
      href: "https://www.itsnicethat.com/articles/studio-hono-temper-branding-project-261026",
      live: "https://temper.studio/shop/victory-edition-cider-2026-750ml",
      region: "国际",
      applyType: "包装/图像（主）· 动效/视频短片（辅）",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读 INT 与 Hono 案例文本，并对封面与瓶身静帧作过观察。商店站字体不是酒标字体。",
      essay: BATCH10.temper.essay,
      craft: BATCH10.temper.craft,
      prompts: BATCH10.temper.prompts,
    },
  ];

  const TODAY9 = [
    {
      id: "jefferson",
      title: "Justin Jefferson",
      creator: "LayerTwo × Assemble",
      cat: "digital",
      catLabel: "数字界面",
      tag: "运动员个人站 · 材质化 UI",
      source: "Awwwards · Site of the Day · 2026-11-07",
      note: "最有辨识度的不是「又一个运动员官网」，而是整站把美式足球皮粒面当成「纸」：cream / 紫黑 / 银灰只换主题色，几何同构。巨型标题不铺实心色，而是镂进/压印粒面，让 pebble 透过字形；Hero 则用 depth-mapped 肖像把高光视频嵌进墨镜片，再加镜片 dive。材质统一、章节主题切换——这比堆特效更像签名。\n\n值得借鉴：纹理是叙事底，不是贴图装饰；交互铬层用骨色胶囊文字标签（Watch / Drag / CLOSE）点名意图，系统箭头仍在。代价是 WebGL 肖像与粒面镂字对性能与字体授权要求高，触屏需明确 dive / 拖卡替代路径。",
      href: "https://www.awwwards.com/sites/justin-jefferson",
      live: "https://jjettas.com/",
      region: "国际",
      applyType: "网页/代码复刻",
      promptsLabel: "AI复刻提示词",
      essay: BATCH9.jefferson.essay,
      craft: BATCH9.jefferson.craft,
      prompts: BATCH9.jefferson.prompts,
    },
    {
      id: "extrafazant",
      title: "Extrafazant",
      creator: "Dylan Brouwer",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "工作室站 · 可变字体与微交互",
      source: "Awwwards · Site of the Day · 2026-11-08",
      note: "最有辨识度的不是「又一个黑白工作室站」，而是三条咬合的手感：巨型标题在鼠标半径内被逐字拉字重；服务卡悬停像拼贴纸一样胀开并把邻卡推开；团队肖像奇偶行反向 scrub，再叠一层惯性动量。钴蓝色满屏擦拭是真的 Barba 转场，不是封面外框。气质是干净底 + 高饱和贴纸/色框——克制的 UI 铬层，放肆的交互物理。\n\n值得借鉴：可变字轴当主交互，而不是装饰性 hover 色；拼贴与团队滚动把「工作室」做成可摸的材质。代价是 Helvetica Now / Serrif 子集授权与触屏替代路径必须写清；五态 SVG 光标要用 CSS url()，别做成全局圆点跟随。",
      href: "https://www.awwwards.com/sites/extrafazant",
      live: "https://www.extrafazant.nl/",
      region: "国际",
      applyType: "网页/代码复刻",
      promptsLabel: "AI复刻提示词",
      essay: BATCH9.extrafazant.essay,
      craft: BATCH9.extrafazant.craft,
      prompts: BATCH9.extrafazant.prompts,
    },
    {
      id: "museumnight",
      title: "Amsterdam Museum Night 2026",
      creator: "From Form（Ashley Govers · Jurjen Versteeg）",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "城市文化活动视觉 · 超现实动态识别",
      source: "It's Nice That · 2026-11-05",
      note: "把夜游写成 17 世纪透视箱——人像嵌进深色盒状空间，钥匙/钟/火把像剪贴物漂浮；脸部比例刻意拧长前额与颈、放大眼睛，subtle but alienating。动画全部由照片剪辑拼出，音景像夜曲。",
      href: "https://www.itsnicethat.com/articles/from-form-amsterdam-museum-night-graphic-design-project-051126",
      image: "images/museumnight.png",
      region: "国际",
      applyType: "图像静帧（主 · 海报/主视觉）· 动效/视频短片（辅）",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读 INT 文章与封面/图册观察，未核对官方完整物料手册。",
      essay: BATCH9.museumnight.essay,
      craft: BATCH9.museumnight.craft,
      prompts: BATCH9.museumnight.prompts,
    },
    {
      id: "aplomb",
      title: "Aplomb",
      creator: "Studio Lotta Nieminen（Helsinki）",
      cat: "product",
      catLabel: "产品与包装",
      tag: "香水包装 · 书信物料系统",
      source: "It's Nice That · 2026-10-29",
      note: "每支香是一封信；插画邮票嵌在压凹框里、一侧压凹齿孔；火漆不做封口戏，而做成橄榄绿哑光瓶盖垂滴。Edict 尖衬线泪滴终端配 Yorick 邮戳环，手工温度与奢侈克制同框。",
      href: "https://www.itsnicethat.com/articles/studio-lotta-nieminen-aplomb-branding-project-291026",
      region: "国际",
      applyType: "图像静帧（主 · 瓶/盒/邮票/信笺 flat lay）· 包装动效短片（可选）",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读 INT 文章与封面/图册观察。无项目活站。",
      essay: BATCH9.aplomb.essay,
      craft: BATCH9.aplomb.craft,
      prompts: BATCH9.aplomb.prompts,
    },
  ];

  const TODAY = [
    {
      id: "viv",
      title: "ViV",
      creator: "Sam Dallyn",
      cat: "digital",
      catLabel: "数字界面",
      tag: "摄影经纪 · 影像制作 · 编辑式图廊",
      source: "Awwwards · Site of the Day · 2026-11-06",
      note: "最有辨识度的不是「白底摄影网站」，而是三种尺度的反差：极小导航、巨大的粗细对比字形、从侧边和下方涌入的摄影。首屏上方大片留白让词标像一件平面作品，照片又从右下方遮住字形，打破品牌与内容的等级。进入名册，画面转成大号窄衬线姓名与悬浮肖像；进入作品页，再压成几乎无缝的图像档案。三种图像密度有意不同，不能全部统一成普通瀑布流。\n\n值得借鉴：摄影本身负责颜色，文字负责秩序；筛选不是后台工具，而是换色、换姓名节奏的画面机制。代价是首屏信息密度低，超大姓名与 hover 预览在触屏上需要明确的点击替代。",
      href: "https://www.awwwards.com/sites/viv",
      live: "https://vivmgmt.com/",
      region: "国际",
      applyType: "网页/代码复刻",
      promptsLabel: "AI复刻提示词",
      essay: BATCH.viv.essay,
      craft: BATCH.viv.craft,
      prompts: BATCH.viv.prompts,
      proofZip: "images/proof/viv/viv-proof-shots.zip",
      proofNote: [
        "活站：https://vivmgmt.com/（2026-11-07 完整滚动；2026-11-10 复核首页仍是同一活站）",
        "已知缺口：Production / About 整页静帧不足；源码中有全视口 #fac43a 黄场 masthead，该态未取帧，不要当成已观察画面。名册分类底色未逐项量取精确色号。部分名册截图停在滚动中段。",
      ],
      proofShots: [
        {
          src: "images/proof/viv/viv-a-homepage-first-fold.jpg",
          caption: "加载后第一视口：白底、巨大词标、照片从下方/侧边涌入并叠住词标",
          alt: "ViV 原站校对：加载后第一视口：白底、巨大词标、照片从下方/侧边涌入并叠住词标",
        },
        {
          src: "images/proof/viv/viv-b-gallery-mid-scroll-news.jpg",
          caption: "首页中段：游行影集之后的 News 高幅网格",
          alt: "ViV 原站校对：首页中段：游行影集之后的 News 高幅网格",
        },
        {
          src: "images/proof/viv/viv-c2-artists-roster-list.jpg",
          caption: "Artists 名册 rest：超大窄衬线姓名列表",
          alt: "ViV 原站校对：Artists 名册 rest：超大窄衬线姓名列表",
        },
        {
          src: "images/proof/viv/viv-c-artists-hover-preview.jpg",
          caption: "桌面悬停姓名：竖幅肖像覆盖在大字之上",
          alt: "ViV 原站校对：桌面悬停姓名：竖幅肖像覆盖在大字之上",
        },
        {
          src: "images/proof/viv/viv-c3-artists-filter-bg-shift.jpg",
          caption: "分类切换后整场低饱和底色改变",
          alt: "ViV 原站校对：分类切换后整场低饱和底色改变",
        },
        {
          src: "images/proof/viv/viv-d-artist-inner-arturo.jpg",
          caption: "艺人作品页：巨大姓名 + 紧密多列图像档案",
          alt: "ViV 原站校对：艺人作品页：巨大姓名 + 紧密多列图像档案",
        },
        {
          src: "images/proof/viv/viv-f-artist-lifestyle-filter.jpg",
          caption: "艺人页分类筛选（如 Lifestyle）后的作品状态",
          alt: "ViV 原站校对：艺人页分类筛选（如 Lifestyle）后的作品状态",
        },
        {
          src: "images/proof/viv/viv-g-all-artists-masonry.jpg",
          caption: "All 页：跨艺人紧密 masonry",
          alt: "ViV 原站校对：All 页：跨艺人紧密 masonry",
        },
        {
          src: "images/proof/viv/viv-h-news-inner-article.jpg",
          caption: "News 内文页",
          alt: "ViV 原站校对：News 内文页",
        },
        {
          src: "images/proof/viv/viv-e-homepage-footer.jpg",
          caption: "首页页脚",
          alt: "ViV 原站校对：首页页脚",
        },
      ],
    },
    {
      id: "grids",
      title: "Grids — DES Season 03",
      creator: "Obys；Idea：Olha Olianishyna；Design：Viacheslav Olianishyn",
      cat: "motion",
      catLabel: "运动与互动",
      tag: "设计教育 · 模块字形 · 滚动编排",
      source: "Awwwards · Site of the Day · 2026-11-02",
      note: "像素字不是装饰海报，而是从全屏幕布压成顶部横带、再留作左侧条码的空间装置；课程目录、黑白摄影与翻倒巨字在同一个网格里互相解释。它的张力来自持续固定的边缘结构与内部剧烈变动，而不是再加一组通用悬停特效。",
      href: "https://www.awwwards.com/sites/grids-1",
      live: "https://grids03.obys.agency/",
      region: "国际",
      applyType: "网页/代码复刻（主）· 动态平面/视频（辅）",
      promptsLabel: "AI复刻提示词",
      essay: BATCH.grids.essay,
      craft: BATCH.grids.craft,
      prompts: BATCH.grids.prompts,
    },
    {
      id: "pac",
      title: "P.A.C. Bakery",
      creator: "Polar（São Paulo；插画 Beatriz Batisteli；摄影署名含 Nani Rodrigues、Marcos Lôndero/Brejo）",
      cat: "brand",
      catLabel: "平面与品牌",
      tag: "面包店视觉识别 · 活字系统",
      source: "It's Nice That · 2026-11-04",
      note: "Logo 几乎就是用 Gronland / Rublena 直接打出的三个字母，故意不定死；收据机印菜单、插画保持手工温度——识别跟着烘焙节奏天天变，而不是一套永远不变的 VI 手册。",
      href: "https://www.itsnicethat.com/articles/polar-pac-graphic-design-project-041126",
      region: "国际",
      applyType: "图像静帧（主）· 印刷物料系统短提示（辅）",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读来源文章与封面，未核对完整品牌物料。",
      essay: BATCH.pac.essay,
      craft: BATCH.pac.craft,
      prompts: BATCH.pac.prompts,
    },
    {
      id: "toyto",
      title: "Toyto",
      creator: "Odd Works（Pavel Ripley 艺术指导/插画 · Alina Golubeva 设计；工作室 Lisbon/London；品牌在 Berlin）",
      cat: "product",
      catLabel: "产品与包装",
      tag: "木制玩具包装 · 触感物料",
      source: "It's Nice That · 2026-11-02",
      note: "木块积木包装干净到能摆进成人书架：自绘词标像积木拼接，Labil Grotesk 字母微微歪斜；压凹/压凸与复杂色替代尖叫童趣，把「给家长的玩具，用来和孩子玩」做成可触的物件。",
      href: "https://www.itsnicethat.com/articles/odd-works-toyto-graphic-design-project-021126",
      region: "国际",
      applyType: "图像静帧 / 包装系统",
      promptsLabel: "AI复刻提示词",
      promptUncertain: true,
      accuracyCaveat: "提示词不一定准确。已读来源文章与封面，未核对完整品牌物料。",
      essay: BATCH.toyto.essay,
      craft: BATCH.toyto.craft,
      prompts: BATCH.toyto.prompts,
    },
  ];

  const PIECES = TODAY10.concat(TODAY9).concat(TODAY).concat([
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构蒸汽朋克西部剧片头标题序列。禁止使用 Netflix、Bass Reeves、Bass X Machina、BUCK 或任何真实注册商标与原剧名。\n\n风格：宣传海报美学 × 大胆图形剪影 × 重胶片颗粒/risograph 网点。平面色块、硬边阴影，几乎无柔和渐变。像印刷海报在抖动，而不是光滑 3D。\n\n色板（严格受限）：\n- 主红 / 腥红底 #C42828–#D12D2D\n- 炭黑 / 深蓝阴影 #0A0C12–#1A2333\n- 电青/冰蓝高光 #3A7CFF–#5B8CFF（虹膜、闪电、缆线）\n- 少量惨白与血喷漆红 X\n\n镜头语言与段落（约 20–35 秒，可循环剪辑气质）：\n1. 极近：杏仁形眼睛，冰蓝虹膜放射白刺，锯齿紫蓝闪电横切画面；红黑锐角框住眼周。\n2. 切到红底广角：戴宽檐帽、穿风衣的独行剪影站在画面中心偏上；脚下六条长黑影放射如木梁辐条（超现实，非物理光影）；右下白弹道光痕划过粉尘。\n3. 特写：黑机械臂斜贯画面对角，关节硬边；三根细电青缆线拖向左下；四周血红剪影手掌爪状伸来抓取。\n4. 仪式场景：深蓝底上，中央岩座骷髅头顶橙红火柱冲天；四周一圈骷髅面向中心，红高光/蓝阴影分面，重颗粒。\n5. 字标落版：深炭黑底，粗壮 slab-serif 西式大写虚构片名（例：「IRON LAW · MACHINE RANGE」）；两词之间用鲜红喷溅/手刷大 X 连接；字边轻微磨损。\n\n运动时序：\n- 12fps 气质的「沸腾线」（boiling line）与颗粒抖动，不要 60fps 丝滑\n- 闪电与缆线：尖锐闪切 + 短余晖，非柔光拖尾\n- 剪影人物：几乎静止或极慢推进；黑影可微微脉动长度\n- 转场：硬切、色块擦除、海报叠印，少用溶解\n\n忌：赛博霓虹城市、光滑 PBR 机甲、彩虹渐变、可读真实剧名/流媒体 logo、写实血腥 gore 特写。",
        },
        {
          type: "图像静帧",
          text: "横构图四联或单帧海报：红/黑/电青受限色，重印刷颗粒。画面可含——宽檐帽剪影站在放射黑影中心；或电青虹膜被闪电切开；或机械臂+血红手影。虚构 slab-serif 片名与鲜红喷漆 X。禁止真实剧名与流媒体标。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构「复古跑车与一对伴侣」浪漫短片，油画/玻璃油画动画气质。禁止 Porsche、911/912 型号名、adam&eve、真实人物姓名等商标与专有名词。用虚构车标与文案（例：品牌「Vespera」、车型「Type 66 Coupe」）。\n\n技法核心：油彩在玻璃/画布上被不断刮改重画——不是定格插画翻页。一笔覆盖另一笔，风景溶解成人体，细节被新笔触吞没，残留前一画面的色痕。转场靠颜料流动，不靠数字溶解特效。\n\n色与光：\n- 高调日光：天蓝、乳白云笔触、沙米色地面\n- 车身：炭灰/银灰蓝，车漆高光用厚白与浅蓝扫出\n- 皮肤暖赭；偶尔工具的薄荷绿/浅蓝金属点缀\n- 海岸段：赭黄悬崖、淡紫阴影、金色小时天空\n\n段落建议（约 30–60 秒）：\n1. 车道上：深灰复古双门跑车，一侧车门敞开，前轮卸下、白色千斤顶支撑；一人俯身擦机盖，一人从门框探出对望。笔触厚、边软。\n2. 仰拍特写：一人躺在车底，手握开口扳手伸向底盘；头发与金属用长扫笔混合，背景暗褐机械虚化。\n3. 公路 chase：车尾 3/4 低机位驶向棕榈大道；路面与树干用纵向旋涡笔触制造速度，天空过曝奶油黄。\n4. 海岸：高机位跟随，车驶过拱形混凝土桥；左侧雾海与礁石，右侧峭壁，长蓝影拖在路面。\n5. 收束：颜料把公路抹成两人侧影或交叠的手，再扫出虚构片名字标（手写感细衬线或画笔字），不要汽车官方字体。\n\n运动：\n- 帧与帧之间颜料明显「重画」，保留刮痕与未干混合\n- 镜头推进缓慢，像记忆漂移；避免快剪广告感\n- 光斑随笔触闪烁，非镜头光晕插件\n\n忌：照片级 CG 车、清晰 Logo 特写、现代电动车、干净矢量插画、抖音转场模板。",
        },
        {
          type: "图像静帧",
          text: "横构图湿油画：日光下复古双门跑车（无真实车标），车门敞开、一角用千斤顶顶起；两人在修车。厚笔触、天蓝与奶油地、车身炭灰高光。气质怀旧浪漫，禁止可读真实汽车商标。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构「恢复向智能拖鞋」全球视觉发布片，约 30 秒英雄动画气质 + 可拆短 vignette。禁止 Nike、Swoosh、Hyperice、Air Zoom、Hyperslide 等商标。虚构品牌「Solace Lab」、产品名「Pulse Slide」。\n\n视觉系统：\n- 主色：骨白 / 羊皮纸 / 沙色 / 哑光灰（严格单色基底）\n- 唯一强调色：熔橙–热红辉光（加热功能），从脚床内部、舱体缝隙渗出，不要整只鞋喷红\n- 材质：软触哑光聚合物上盖、透气网眼绑带、厚泡棉波纹大底、细织纹织物面\n- 灯光：柔和棚拍顶光，阴影淡，无硬高光；宏观浅景深\n\n抽象运动概念（产品设计驱动剪辑）：\n1. Cushioning：拖鞋侧 3/4 悬浮；大底卵石/波浪分段缓慢胀缩，像受压回弹的空气腔。\n2. Vibration：俯拍方形控制舱嵌在织物表面；舱面暗标虚构符号，中心「H」形或圆点以熔橙 LED 脉动；周围织物同心涟漪向外扩散（水波/沙波）。\n3. Heat：macro 脚床沟槽，深处橙红余烬渐亮，照亮内侧网眼；可与白色康复球体堆叠床同框。\n4. Hero：双鞋对角叠放或镜像悬浮；一只有内橙辉光。穿插半透明白织带/标签缓旋（织纹清晰，勿写真实品牌字）。\n\n剪辑与节奏：\n- 整体「冷静、躺平、舒适」——慢推、慢移、长停留，不要竞技广告快剪\n- vignette 之间用同色溶解或软切；音频感：低频脉冲对齐涟漪与辉光（文案不写具体曲名）\n- 收尾：产品静置 + 一句虚构短句（如「HEAT · HUM · REST」），极细无衬线\n\n忌：炫彩跑鞋、球场人群、大勾标特写、赛博霓虹、过度粒子烟花。",
        },
        {
          type: "图像静帧",
          text: "棚拍产品静帧：沙色智能拖鞋悬浮于暖灰无缝背景，脚床内透熔橙辉光；或俯拍织物上的方形控制舱，橙光符号脉动，织物呈同心涟漪。无真实运动品牌标志。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构综合电视台「跨屏统一」包装系统展示片（id、bumpers、promo closer、信息图）。禁止 Mega、Mega Chile、Mega GO 及原台标。虚构台名「PULSO」、标识为圆角几何「P」由 pill/拱/半圆模块拼成。\n\n系统设计：\n- 从台标拆出基础形：药丸 pill、拱门 arch、圆、半圆；所有图形动画只许用这些模块重组\n- 色板：电蓝、热粉、暖黄、亮青；锚点黑与中性灰；节目可用单色「专属时刻」但形制统一\n- 材质：哑光软胶/玩具塑料 + 少量铬球 + 半透明片；柔和顶光与清晰落影（claymorphic / pop-3D）\n- 字体：圆角几何无衬线；短词如「ALERT」「LIVE」「NEXT」\n\n可演示段落：\n1. Logo ID：模块从散落弹珠/色块聚合成虚构「P」标，弹一下定位。\n2. 手机框 vignette：深蓝底中心竖立磨砂手机外框，框内堆叠粉/黄/青绿几何与标有「P」的圆章。\n3. 社交墙：白底上多层 3D UI——「Alert!」胶囊层叠弹出、「sending...」条、爱心、对话框、无脸圆头像、开关与进度球；笑哭表情可残影拖尾表现连点。\n4. 轨道信息图：俯视同心圆环轨道，粉黄青绿彩带与玻璃/铬弹珠在槽里滚动，薄发光轨线。\n5. 表情蛇体：白板上圆角开口伸出多层圆盘叠成的「蛇」，顶端黄/白圆脸做简笔表情；旁有小 pill 与叉号点缀。\n6. 棋盘框：白框黑描边黄侧边，格内滑块、弹珠、卷起纸带，零件向右飞出解构建。\n\n运动语言：\n- 弹性缓动（overshoot 小）、模块磁吸对齐、层叠弹出\n- bumper 2–5 秒可循环；promo closer 收进 logo\n- 禁止杂乱无限滚动社交媒体截图；保持「设计系统」克制玩具感\n\n忌：写实新闻主播棚、股票行情红绿、抄袭真实台标字母「M」山形波。",
        },
        {
          type: "图像静帧",
          text: "白底 3D 广播图形静帧：电蓝/热粉/暖黄/青，圆角 pill 与「Alert!」胶囊、简笔表情、无脸头像层层落影；中心虚构圆角「P」标。玩具塑料质感，禁止真实电视台商标。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      promptsNote: "成片以文章/可见静帧为准",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】两套可分开使用的虚构运动设计 brief（勿混用真实客户商标）。禁止 Apple、Apple TV、Channel 4、4Creative 及原 logo。\n\n—— A. 实拍玻璃流媒体字标（约 8–15 秒）——\n- 黑棚；磨砂/喷砂厚玻璃浇出的小写字母与抽象果形符号，立在细黑金属杆上\n- 强轮廓光（rim light）吃边缘，内部漫射微光；一人戴白手套用荧光黄/柠绿擦布轻拭表面（可入画 1–2 秒强调「物理制作」）\n- 镜头：极慢横移或微距绕射；灯光角度微调让高光沿玻璃爬行\n- 后期只做细调，主体必须像 in-camera 真玻璃，不要完美无瑕 CGI\n- 收束：字母排成虚构服务名（例：「grove」）短暂定格\n\n—— B. 公共电视台协作 ident 环（4×循环短段，可接成主 ident）——\n主题气质（虚构台「Signal Four」）：identity / love / release / system / land。四段标题用文案而非商标：\n1. Shattering Room：室内空间玻璃/瓷面缓慢裂纹扩展，碎片悬停后重组为台标几何\n2. Chemicals：宏观细胞/试剂色团蠕动融合（参考实验室美学，非恐怖 gore）\n3. Digital tracking：人群或粒子被细线/热盒追踪，数据美学克制\n4. Robotic fulfilment：自动仓机械臂与货格韵律运动，工业诗意\n- 每段可无缝循环；段落间硬切或同色溶解；整体靠统一灯光哲学（少灯、久留镜头）粘合\n- 旁白可极低密度（一篇短诗一句），不要口号喊麦\n\n—— 材质研究 vignette（可选）——\n- Ignis：深蓝黑底一排透明实验玻璃器皿，背光轮廓，微距灯光穿过产生焦散\n- Odyssey：海绵宏观金黄纤维森林 ↔ 整颗海绵产品静物白底，慢切\n\n忌：炫光 logo 齐刷、股票感 UI、过度生成式液态金属、盗用咬一口苹果剪影与 Channel 4 色块台标。",
        },
        {
          type: "图像静帧",
          text: "黑棚 BTS 静帧：磨砂厚玻璃小写字母立在细黑杆上，强 rim light；一侧白手套与荧光擦布。或深蓝底玻璃器皿横排背光静物。禁止真实消费电子/电视台商标。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构独立电影厂牌有机标识动画。禁止 A24、以及文章中其他客户商标（VICE、J. Cole 等）作为生成目标。虚构厂牌名「NORTHFRAME」或抽象字母组合。\n\n制作逻辑（写进提示，供模型模拟过程感）：\n- 媒介：真实沼泽水面 + 密集浮萍（duckweed）作「绿颜料」，深色湖水作「画布」\n- 字形：粗无衬线负形——浮萍被移除/推开后露出黑水构成字母（边缘因植株而不完美、可有少量浮萍漂回字腔内）\n- 拍摄暗示：正拍或倒放，使浮萍像主动聚拢/裂开形成字标；再以逐帧思维微调时序\n- 辅助道具气质：可想象激光切割板短暂按压水面后抬起（不要把现代工具拍得很工业广告）\n\n画面：\n- 俯视垂直构图或轻微倾斜；字标居中\n- 色：黄绿/叶绿颗粒毯，深藏青–近黑水面，零星枯叶浅褐碎片\n- 光：晴天斑驳树影斜扫，高光斑块在浮萍上跳动\n- 微风使字缘缓慢呼吸、细碎漂移；总时长 6–12 秒，结尾字标稳定 1–2 秒\n\n可选 ethereal 变体（同一作者气质，勿冒充原作）：颗粒盐/砂在黑底上聚成抽象图形再被字标挖空（冷蓝自发光），强调物质实验而非品牌 CGI。\n\n忌：矢量 flat logo 放大、完美贝塞尔边缘、绿色油漆倾倒特效、AI 生成的假植物贴图感、真实 A24 字标。",
        },
        {
          type: "图像静帧",
          text: "俯视：鲜绿浮萍铺满水面，中央粗无衬线字标由黑水负形构成，边缘不规则，斑驳日光与枯叶碎屑。虚构厂牌字母。禁止 A24 字标。",
        },
      ],
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
      applyType: "视频/动效（主）· 图像静帧（辅）",
      prompts: [
        {
          type: "视频/动效",
          text: "【适用：视频生成 / 动效生成】虚构「艺术家内心肖像」短片气质：实拍电影画面 × 手绘赛璐璐角色合成。禁止 DREAMCAT、MAKE MAMI PROUD、以及可辨认的原角色商业挪用；请设计全新圆头面具式主角与配角，虚构片名「NIGHT SKETCH」。\n\n视觉规则：\n- 实拍层：松林金色小时、城市砖楼街道、木桌速写本；电影感颗粒、浅景深、宽银幕\n- 动画层：粗黑描边、平涂饱和色、略 rubber-hose；必须投影/受光与实拍统一（火光应照亮真实纸面与桌面）\n- 焦点：景深可「颤抖」——角色与树同处焦平面，像角色活在镜头里而非贴在上层\n- 手绘部分暗示逐帧（ones/threes），不要丝滑 3D 绑定\n\n叙事气质（非逐镜抄袭）：\n1. 林中：真人背影或侧影走在土路；身边出现圆头白脸紫帽衫小角色、迷彩战术「截止日长官」、孩童感半头盔形象等——皆为「内心声音」，非外来 BOSS 怪\n2. 工作室：打开的速写本；角色从铅笔稿「站起」，举火炬，焰光 bloom 打在真实纸面；可短暂露出客户反馈弹窗激怒创作者的幽默一拍\n3. 力量回收：雾蓝空地，碎石轻微悬浮——克制、短促，不要炫技长时间「绝地」镜头\n4. 结尾：放弃仰拍天空老套收束；改为一架手绘战斗机从街道冲向镜头，座舱里挤满角色表情特写，粉紫烟尾\n\n明确不要：\n- 粉斑触手蛾蛸「外来恶魔」作为终局反派（文章已废弃该方案）\n- 用 AI 生成角色动画；合成工具可存在，但角色必须是手绘气质\n- 把封面那种稳定器 BTS 当成成片主体\n\n时长气质：短片预告 45–90 秒或循环氛围段 15 秒；剪辑有呼吸与停顿，配乐驱动情绪弧线。",
        },
        {
          type: "图像静帧",
          text: "宽银幕静帧二选一：① 金色松林实拍中，圆头紫帽衫手绘角色与迷彩配角站在土路；② 木桌速写本上，手绘小角色举火炬，焰光映在真实纸面。禁止使用原片注册名与可辨原角色照搬。",
        },
      ],
    }
  ]);

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
  const detailScroll = document.getElementById("detail-scroll");
  const detailSegments = document.getElementById("detail-segments");
  const detailPrompts = document.getElementById("detail-prompts");
  const detailEssay = document.getElementById("detail-essay");
  const detailCraft = document.getElementById("detail-craft");
  const segmentPanels = { essay: detailEssay, prompts: detailPrompts, craft: detailCraft };
  let activeSegment = "essay";
  const detailActions = document.getElementById("detail-actions");

  let activeFilter = "all";
  let activeId = null;
  let lastTrigger = null;
  let focusables = [];

  const playIcon = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.5 2.8v10.4L13.2 8 4.5 2.8Z"/></svg>`;
  const extIcon = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.5 3.5a.75.75 0 0 0 0 1.5h3.19L3.22 11.47a.75.75 0 1 0 1.06 1.06L10.75 6.06v3.19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-5Z"/></svg>`;

  function pieceImage(p) {
    return p.image || `images/${p.id}.jpg`;
  }

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
          <img src="${escapeAttr(pieceImage(p))}" alt="${escapeAttr(p.title)}" width="${mediaW}" height="${mediaH}" loading="lazy" decoding="async" />
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
          <p class="card__region">${escapeHTML(p.region)}${sourceLimitNote(p)}</p>
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
    const poster = pieceImage(piece);
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


  function hasSourceLimit(piece) {
    return Boolean(piece && (piece.cardNote || piece.sourceLimit || piece.promptUncertain));
  }

  function sourceLimitNote(piece) {
    if (!hasSourceLimit(piece)) return "";
    const limit = piece.cardNote || piece.sourceLimit || "";
    const bits = [];
    if (limit) bits.push(`<span class="card__waf">${escapeHTML(limit)}</span>`);
    bits.push(`<span class="card__waf card__caveat">提示词不一定准确</span>`);
    return bits.length ? ` · ${bits.join(" · ")}` : "";
  }

  function renderDoc(el, markdown) {
    if (!el) return;
    if (!markdown) {
      el.innerHTML = `<p class="detail__empty">本则暂无</p>`;
      return;
    }
    const html = typeof renderJournalMarkdown === "function" ? renderJournalMarkdown(markdown) : escapeHTML(markdown);
    el.innerHTML = `<div class="detail__prose">${html}</div>`;
  }

  function showSegment(next, options) {
    const id = segmentPanels[next] ? next : "essay";
    activeSegment = id;
    const tabs = [...detailSegments.querySelectorAll(".detail__segment")];
    tabs.forEach((tab) => {
      const on = tab.dataset.segment === id;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    Object.entries(segmentPanels).forEach(([key, panel]) => {
      if (!panel) return;
      panel.hidden = key !== id;
    });
    if (options && options.focusTab) {
      const tab = tabs.find((item) => item.dataset.segment === id);
      if (tab) tab.focus();
    }
    if (detailScroll && options && options.align) {
      const bar = detailSegments.parentElement;
      const delta = bar.getBoundingClientRect().top - detailScroll.getBoundingClientRect().top;
      if (delta < 0) detailScroll.scrollTop += delta;
    }
  }

  function proofShotsOf(piece) {
    return Array.isArray(piece.proofShots) ? piece.proofShots.filter((shot) => shot && shot.src) : [];
  }

  function linkifyText(text) {
    const re = /https?:\/\/[A-Za-z0-9._~:/?#\[\]@!$&'()*+,;=%-]+/g;
    let html = "";
    let last = 0;
    let match;
    const source = String(text);
    while ((match = re.exec(source))) {
      html += escapeHTML(source.slice(last, match.index));
      html += `<a href="${escapeAttr(match[0])}" target="_blank" rel="noopener noreferrer">${escapeHTML(match[0])}</a>`;
      last = match.index + match[0].length;
    }
    html += escapeHTML(source.slice(last));
    return html;
  }

  function appendProofShots(piece) {
    const shots = proofShotsOf(piece);
    if (!shots.length) return;
    const section = document.createElement("section");
    section.className = "proof-shots";
    const head = document.createElement("div");
    head.className = "proof-shots__head";
    const title = document.createElement("h3");
    title.className = "proof-shots__title";
    title.textContent = "原站校对截图";
    head.appendChild(title);
    const zip = typeof piece.proofZip === "string" ? piece.proofZip.trim() : "";
    if (zip) {
      const download = document.createElement("a");
      download.className = "btn btn--quiet btn--tiny";
      download.href = zip;
      const filename = zip.split("/").filter(Boolean).pop() || "viv-proof-shots.zip";
      download.setAttribute("download", filename);
      download.textContent = "下载全部截图";
      head.appendChild(download);
    }
    section.appendChild(head);
    const notes = Array.isArray(piece.proofNote) ? piece.proofNote.filter(Boolean) : [];
    if (notes.length) {
      const note = document.createElement("div");
      note.className = "proof-shots__note";
      notes.forEach((line) => {
        const p = document.createElement("p");
        p.innerHTML = linkifyText(line);
        note.appendChild(p);
      });
      section.appendChild(note);
    }
    const grid = document.createElement("div");
    grid.className = "proof-shots__grid";
    shots.forEach((shot) => {
      const figure = document.createElement("figure");
      figure.className = "proof-shots__figure";
      const link = document.createElement("a");
      link.className = "proof-shots__link";
      link.href = shot.src;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      const img = document.createElement("img");
      img.src = shot.src;
      img.alt = shot.alt || shot.caption || "";
      img.loading = "lazy";
      img.width = shot.width || 1800;
      img.height = shot.height || 1005;
      link.appendChild(img);
      const cap = document.createElement("figcaption");
      cap.className = "proof-shots__caption";
      cap.textContent = shot.caption || "";
      figure.appendChild(link);
      figure.appendChild(cap);
      grid.appendChild(figure);
    });
    section.appendChild(grid);
    detailPrompts.appendChild(section);
  }

  function renderPrompts(piece) {
    detailPrompts.innerHTML = "";
    const list = Array.isArray(piece.prompts) ? piece.prompts.filter((p) => p && p.text) : [];
    if (!list.length) {
      detailPrompts.innerHTML = `<p class="detail__empty">本则暂无</p>`;
      appendProofShots(piece);
      return;
    }
    const head = document.createElement("div");
    head.className = "detail__prompts-head";
    const noteHtml = piece.promptsNote
      ? `<div class="detail__prompts-note">${escapeHTML(piece.promptsNote)}</div>`
      : "";
    head.innerHTML = `<div class="detail__prompts-head-main">${noteHtml}</div><div class="detail__prompts-count">${list.length} 条</div>`;
    detailPrompts.appendChild(head);
    if (hasSourceLimit(piece)) {
      const caveat = document.createElement("p");
      caveat.className = "detail__prompt-caveat";
      caveat.textContent = piece.accuracyCaveat || "提示词不一定准确。提示词仅依据封面/可见材料。";
      detailPrompts.appendChild(caveat);
    }
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
    appendProofShots(piece);
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
    detailSource.textContent = piece.cardNote ? `${piece.source} · ${piece.cardNote}` : piece.source;
    detailRegion.textContent = piece.region;
    detailNote.textContent = piece.note;

    if (piece.applyType) {
      detailApply.textContent = piece.applyType;
      detailApplyRow.hidden = false;
    } else {
      detailApply.textContent = "";
      detailApplyRow.hidden = true;
    }

    renderDoc(detailEssay, piece.essay);
    renderPrompts(piece);
    renderDoc(detailCraft, piece.craft);
    showSegment("essay");
    if (detailScroll) detailScroll.scrollTop = 0;

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

  detailSegments.addEventListener("click", (e) => {
    const tab = e.target.closest(".detail__segment");
    if (!tab) return;
    showSegment(tab.dataset.segment, { align: true });
  });

  detailSegments.addEventListener("keydown", (e) => {
    const tabs = [...detailSegments.querySelectorAll(".detail__segment")];
    const idx = tabs.indexOf(document.activeElement);
    if (idx < 0) return;
    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    showSegment(tabs[next].dataset.segment, { focusTab: true, align: true });
  });

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

  const countEl = document.querySelector(".masthead__count");
  if (countEl) countEl.textContent = `${PIECES.length} 件精选`;

  window.__JOURNAL__ = { PIECES, counts, openDetail, closeDetail, showSegment };
})();
