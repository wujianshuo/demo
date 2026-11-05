/**
 * 四航三官网 - 本地静态数据（模拟后端 API 返回，驱动轮播/列表/tab 等交互）
 * 结构模拟原后端 /api/public/shj/categories 与 /api/public/shj/articles 的返回格式。
 *
 * 说明（离线本地版）：
 *  1. 顶级栏目 page_url 统一为本地相对路径（1_home.html ~ 7_hr.html）。
 *  2. 各二级子栏目均带 page_url = 其容器页 + ?cat=<slug>，供侧边栏/卡片正确跳转。
 *  3. 栏目 id 已消除重复：媒体矩阵=480，党建工作子栏目=551~554。
 */
/** 站点显示名（页面标题等统一取此值） */
window.SITE_NAME = '中交四航局第三工程有限公司';
window.SITE_CATEGORIES = [
    // ===== 顶级栏目 =====
    {
        id: 1,
        name: '首页',
        slug: 'home',
        parent_id: 0,
        is_nav: true,
        sort_order: 1,
        nav_type: 'PAGE',
        page_url: './1_home.html'
    },
    {
        id: 2,
        name: '关于四航三',
        slug: 'about',
        parent_id: 0,
        is_nav: true,
        sort_order: 2,
        nav_type: 'PAGE',
        page_url: './2_about.html'
    },
    {
        id: 3,
        name: '新闻中心',
        slug: 'news',
        parent_id: 0,
        is_nav: true,
        sort_order: 3,
        nav_type: 'PAGE',
        page_url: './3_news.html'
    },
    {
        id: 4,
        name: '核心业务',
        slug: 'business',
        parent_id: 0,
        is_nav: true,
        sort_order: 4,
        nav_type: 'PAGE',
        page_url: './4_business.html',
        images: './4_business_files/1-6.jpg'
    },
    {
        id: 5,
        name: '党建工作',
        slug: 'party',
        parent_id: 0,
        is_nav: true,
        sort_order: 5,
        nav_type: 'PAGE',
        page_url: './5_party.html'
    },
    {
        id: 6,
        name: '科技创新',
        slug: 'tech',
        parent_id: 0,
        is_nav: true,
        sort_order: 6,
        nav_type: 'PAGE',
        page_url: './6_tech.html'
    },
    {
        id: 7,
        name: '人力资源',
        slug: 'hr',
        parent_id: 0,
        is_nav: true,
        sort_order: 7,
        nav_type: 'PAGE',
        page_url: './7_hr.html'
    },

    // ===== 关于四航三（id=2） =====
    {
        id: 21,
        name: '公司概况',
        slug: 'about-overview',
        parent_id: 2,
        is_nav: true,
        sort_order: 1,
        page_url: './2_about.html?cat=about-overview',
        images: './4_business_files/1-6.jpg',
        description: '公司基本情况、资质实力与企业发展概况',
        content: '<p>中交四航局第三工程有限公司（以下简称三公司）是世界500强企业中国交通建设股份有限公司旗下的中交第四航务工程局有限公司的全资子公司。三公司成立于1974年，是历史悠久、技术力量及综合实力雄厚的驻湛建筑类央企，经过50年的发展，三公司拥有丰富的施工经验、先进的施工设备、完善的管理体系，是广东省土木建筑科技创新先进企业，目前拥有1200多名员工，年营业额近100亿元。</p><p>三公司前身为交通部公路三局第五工程处。1965年，为支援国家三线建设，交通部公路三局第三工程处组建了一个八人的工作组，带领二、四工程队，由福建调到贵州遵义，为了建设的需要，成立了交通部公路三局第五工程处，并于1973年归属贵州省交通局领导，更名为贵州省交通局公路五处。1974年，为响应周恩来总理“三年改变港口面貌”的指示，贵州省交通局公路五处近两千名干部职工携家带口搬迁至广东湛江，改称交通部第四航务工程局第三工程处，参与南方港口建设。并于2006年更名为中交四航局第三工程有限公司。</p><p>三公司在国内10多个省（自治区、直辖市）以及海外苏丹、安哥拉、尼日利亚、喀麦隆、纳米比亚、科特迪瓦、加纳、贝宁、越南等国家建筑市场承建了各种形式的码头泊位200多个，深水防波堤、护岸10000多米，码头后方配套设施、道路、堆场200多万平方米；从最初的水工项目发展到市政、路桥、高速铁路、水利水电、城际轨道、海上风电、水环境治理、房地产开发等多个领域，参建了湛江港、海南工程、平陆运河、江西万安船闸、云桂铁路、珠海城轨、广连高速、海口新海枢纽等大型重点项目。</p><p>三公司不断打造精品工程，参建的大批工程先后荣获“国家优质工程金奖”“国家优质工程奖”“鲁班奖”“詹天佑土木工程奖”“军队优质工程奖”等国家 、省（部）级大奖。同时，三公司诚信经营的品格和科学发展的成果得到了上级组织和社会各界的肯定，先后获评“全国文明单位”、“全国交通运输企业文化卓越单位”、“广东省守合同重信用企业（连续二十一年）”等荣誉，获评中交集团重要三级子公司、RH工程专业领航企业。</p><p>站在新起点，谋求新发展，实现新跨越。三公司人将以更饱满的热情、更昂扬的斗志、更务实的作风，为打造成为客户满意、员工幸福、社会赞誉的中交优秀三级子公司而不懈奋斗！</p><p>执行董事、总经理、党委副书记：刘平 党委书记、副总经理：彭远续</p><p>电 话：（0759）3613137 传 真：86-759-3613307</p>'
    },
    {
        id: 22,
        name: '历史传承',
        slug: 'about-history',
        parent_id: 2,
        is_nav: true,
        sort_order: 2,
        page_url: './2_about.html?cat=about-history',
        images: './4_business_files/1-2.jpg',
        description: '七十余年奋斗历程与企业文化传承',
        content: '<p>三公司前身为交通部公路三局第五工程处。1965年，为支援国家三线建设，交通部公路三局第三工程处组建了一个八人的工作组，带领二、四工程队，由福建调到贵州遵义，为了建设的需要，成立了交通部公路三局第五工程处，并于1973年归属贵州省交通局领导，更名为贵州省交通局公路五处。1974年，为响应周恩来总理“三年改变港口面貌”的指示，贵州省交通局公路五处近两千名干部职工携家带口搬迁至广东湛江，改称交通部第四航务工程局第三工程处，参与南方港口建设。并于2006年更名为中交四航局第三工程有限公司。</p><p><img src="./2_about_files/heritage.jpg" alt="历史传承"></p>'
    },
    {
        id: 23,
        name: '组织架构',
        slug: 'about-structure',
        parent_id: 2,
        is_nav: true,
        sort_order: 3,
        page_url: './2_about.html?cat=about-structure',
        images: './4_business_files/1-3.jpg',
        description: '公司治理结构与组织管理体系',
        content: '<p><img src="./2_about_files/org-structure.png" alt="组织架构"></p>'
    },
    {
        id: 24,
        name: '全球分布',
        slug: 'about-online',
        parent_id: 2,
        is_nav: true,
        sort_order: 4,
        page_url: './2_about.html?cat=about-online',
        images: './1_home_files/global-layout.jpg',
        description: '立足华南、辐射全国、走向世界的市场版图',
        content: '<p class="sub-title">业务布局说明</p><p>下图为三公司市场业务布局示意图。公司立足华南、辐射全国、走向世界：国内业务覆盖广东、海南、广西、重庆、四川、江西、福建、浙江、上海、江苏、云南、贵州、湖南、湖北、吉林、西藏等省（自治区、直辖市），海外业务已进入苏丹、安哥拉、喀麦隆、尼日利亚、纳米比亚、科特迪瓦、加纳、贝宁、越南、瑙鲁等国家建筑市场，形成国内外相互支撑的市场格局。</p><p><img src="./1_home_files/global-layout.jpg" alt="全球布局"></p><p class="sub-title">国内市场</p><p>公司本部所在地湛江市为广东省域副中心城市，是粤西和北部湾城市群中心城市、全国首批沿海开放城市、首批“一带一路”海上合作支点城市、首批全国海洋经济创新发展示范城市。</p><p>三公司在国内10多个省（自治区、直辖市）承建了各种形式的码头泊位200多个，深水防波堤、护岸10000多米，码头后方配套设施、道路、堆场200多万平方米；业务从最初的水工项目发展到市政、路桥、高速铁路、水利水电、城际轨道、房地产开发、海上风电、水环境治理等多个领域，参建了湛江港项目、宝钢湛江钢铁项目、海南工程、江苏连云港项目、平陆运河项目、江西万安船闸、云桂铁路、珠海城轨、海口白驹大道、广连高速等大型重点项目。</p><p class="sub-title">海外市场</p><p>公司海外业务覆盖苏丹、安哥拉、喀麦隆、尼日利亚、纳米比亚、科特迪瓦、加纳、贝宁、越南、瑙鲁等国家，深入参与“一带一路”建设，形成互为支持的境外区域市场。</p>'
    },
    {
        id: 26,
        name: '企业荣誉',
        slug: 'about-honor',
        parent_id: 2,
        is_nav: true,
        sort_order: 6,
        page_url: './2_about.html?cat=about-honor',
        images: './4_business_files/1-6.jpg',
        description: '国家级、省部级荣誉与行业认可',
        content: '<p>公司获国家级优质工程奖28项，其中国家优质工程金奖4项、国家优质工程奖15项、鲁班奖3项、詹天佑奖2项、军优4项；省部级优质工程奖126项；并获美国《工程新闻纪录》（ENR）杂志年度全球最佳项目奖。</p><p>公司先后荣获“全国青年文明号”“广东省守合同重信用企业”“广东省扶贫开发工作优秀单位”“广东省交通运输文化建设示范单位”等荣誉称号；画册同时展示了全国文明单位、工人先锋号、模范职工之家、全国交通运输行业文明示范窗口、广东省安全文化示范企业、广东省文明单位等荣誉证书。</p>'
    },


    {
        id: 31,
        name: '公司要闻',
        slug: 'news-yaowen',
        parent_id: 3,
        is_nav: true,
        sort_order: 1,
        page_url: './3_news.html?cat=news-yaowen',
        images: './4_business_files/1-3.jpg'
    },
    {
        id: 33,
        name: '媒体聚焦',
        slug: 'news-media',
        parent_id: 3,
        is_nav: true,
        sort_order: 2,
        page_url: './3_news.html?cat=news-media',
        images: './4_business_files/1-4.jpg'
    },

    // ===== 核心业务（id=4，原栏目名：公司业务） =====
    {
        id: 41,
        name: '港口及航运设施工程',
        slug: 'business-port',
        parent_id: 4,
        is_nav: true,
        sort_order: 1,
        page_url: './4_business.html?cat=business-port',
        images: './4_business_files/bw-02.jpg',
        description: '沿海与内河码头、深水泊位、航道整治、疏浚吹填、岛隧工程及港口配套设施建设'
    },
    {
        id: 42,
        name: '公路工程',
        slug: 'business-road',
        parent_id: 4,
        is_nav: true,
        sort_order: 2,
        page_url: './4_business.html?cat=business-road',
        images: './4_business_files/bw-13.jpg',
        description: '高速公路、国省干线、山区公路、互通立交及公路配套工程建设'
    },
    {
        id: 43,
        name: '铁路工程',
        slug: 'business-railway',
        parent_id: 4,
        is_nav: true,
        sort_order: 3,
        page_url: './4_business.html?cat=business-railway',
        images: './4_business_files/bw-19.jpg',
        description: '高速铁路、普速铁路、站场枢纽及铁路配套工程建设'
    },
    {
        id: 44,
        name: '城市轨道交通工程',
        slug: 'business-rail',
        parent_id: 4,
        is_nav: true,
        sort_order: 4,
        page_url: './4_business.html?cat=business-rail',
        images: './4_business_files/bw-22.jpg',
        description: '城市地铁、轻轨、车辆段及盾构区间等轨道交通工程建设'
    },
    {
        id: 45,
        name: '市政工程',
        slug: 'business-admin',
        parent_id: 4,
        is_nav: true,
        sort_order: 5,
        page_url: './4_business.html?cat=business-admin',
        images: './4_business_files/bw-24.jpg',
        description: '城市道路、桥梁、隧道、管网改造及片区综合开发等市政基础设施建设'
    },
    {
        id: 46,
        name: '隧道和桥梁工程',
        slug: 'business-cat-bridge',
        parent_id: 4,
        is_nav: true,
        sort_order: 6,
        page_url: './4_business.html?cat=business-cat-bridge',
        images: './4_business_files/bw-28.jpg',
        description: '跨海大桥、特大桥梁、长大隧道、沉管隧道及顶管工程建设'
    },
    {
        id: 47,
        name: '水利、船闸、船坞工程',
        slug: 'business-cat-ship',
        parent_id: 4,
        is_nav: true,
        sort_order: 7,
        page_url: './4_business.html?cat=business-cat-ship',
        images: './4_business_files/bw-35.jpg',
        description: '水利枢纽、船闸、船坞、航道护岸及其他水工构筑物建设'
    },
    {
        id: 48,
        name: '房屋建筑工程',
        slug: 'business-cat-house',
        parent_id: 4,
        is_nav: true,
        sort_order: 8,
        page_url: './4_business.html?cat=business-cat-house',
        images: './4_business_files/bw-41.jpg',
        description: '工业厂房、民用建筑、公共设施和城市更新等房屋工程建设'
    },
    {
        id: 49,
        name: '生态保护工程',
        slug: 'business-cat-ecology',
        parent_id: 4,
        is_nav: true,
        sort_order: 9,
        page_url: './4_business.html?cat=business-cat-ecology',
        images: './4_business_files/bw-46.jpg',
        description: '岸线修复、湿地与海域生态修复、环境治理等绿色工程建设'
    },
    {
        id: 50,
        name: '河湖治理工程',
        slug: 'business-cat-river',
        parent_id: 4,
        is_nav: true,
        sort_order: 10,
        page_url: './4_business.html?cat=business-cat-river',
        images: './4_business_files/bw-50.jpg',
        description: '江河湖海整治、堤岸防护、清淤扩容与水环境综合治理'
    },
    {
        id: 51,
        name: '综合管廊工程',
        slug: 'business-cat-utility',
        parent_id: 4,
        is_nav: true,
        sort_order: 11,
        page_url: './4_business.html?cat=business-cat-utility',
        images: './4_business_files/bw-52.jpg',
        description: '城市地下综合管廊、地下空间开发及市政管线迁改工程'
    },
    {
        id: 52,
        name: '海外风能发电工程',
        slug: 'business-cat-wind',
        parent_id: 4,
        is_nav: true,
        sort_order: 13,
        page_url: './4_business.html?cat=business-cat-wind',
        images: './4_business_files/bw-62.jpg',
        description: '海外海上风电、陆上风电及其他新能源工程建设'
    },
    {
        id: 53,
        name: '海外港口及航运设施工程',
        slug: 'business-cat-port_overseas',
        parent_id: 4,
        is_nav: true,
        sort_order: 12,
        page_url: './4_business.html?cat=business-cat-port_overseas',
        images: './4_business_files/bw-53.jpg',
        description: '海外港口、码头、临海设施等国际工程，含尼日利亚瓦里港、安哥拉洛比托港等项目'
    },
    {
        id: 411,
        name: '疏浚工程',
        slug: 'business-port-cat-mtwok9jo',
        parent_id: 41,
        is_nav: false,
        sort_order: 1,
        page_url: './4_business.html?cat=business-port-cat-mtwok9jo',
        images: './4_business_files/1-7.jpg'
    },
    {
        id: 412,
        name: '道路工程',
        slug: 'business-port-cat-mtwnpg7p',
        parent_id: 41,
        is_nav: false,
        sort_order: 2,
        page_url: './4_business.html?cat=business-port-cat-mtwnpg7p',
        images: './4_business_files/1-7.jpg'
    },
    {
        id: 413,
        name: '岛隧工程',
        slug: 'business-port-cat-mtwnq4c6',
        parent_id: 41,
        is_nav: false,
        sort_order: 3,
        page_url: './4_business.html?cat=business-port-cat-mtwnq4c6',
        images: './4_business_files/1-7.jpg'
    },
    {
        id: 414,
        name: '港口码头',
        slug: 'business-port-cat-mtwnqjey',
        parent_id: 41,
        is_nav: false,
        sort_order: 4,
        page_url: './4_business.html?cat=business-port-cat-mtwnqjey',
        images: './4_business_files/1-7.jpg'
    },

    // ===== 党建工作（id=5，原栏目名：党的建设） =====
    {
        id: 551,
        name: '综合动态',
        slug: 'party-news',
        parent_id: 5,
        is_nav: true,
        sort_order: 1,
        page_url: './5_party.html?cat=party-news',
        images: './4_business_files/1-1.jpg'
    },
    {
        id: 552,
        name: '党建品牌',
        slug: 'party-brand',
        parent_id: 5,
        is_nav: true,
        sort_order: 2,
        page_url: './5_party.html?cat=party-brand',
        images: './4_business_files/1-1.jpg'
    },
    {
        id: 553,
        name: '工团工作',
        slug: 'party-union',
        parent_id: 5,
        is_nav: true,
        sort_order: 3,
        page_url: './5_party.html?cat=party-union',
        images: './4_business_files/1-1.jpg'
    },

    // ===== 科技创新（id=6） =====
    {
        id: 61,
        name: '科技动态',
        slug: 'tech-dynamic',
        parent_id: 6,
        is_nav: true,
        sort_order: 2,
        page_url: './6_tech.html?cat=tech-project',
        images: './4_business_files/1-9.jpg',
        description: '科技创新动态与研发进展'
    },
    {
        id: 68,
        name: '科研项目',
        slug: 'tech-project',
        parent_id: 61,
        is_nav: false,
        sort_order: 1,
        page_url: './6_tech.html?cat=tech-project',
        images: './4_business_files/1-9.jpg',
        description: '公司承担及参与的科研项目立项情况',
        content: '<p class="sub-title">科研方向与成果</p><p>三公司注重科研和技术创新，开展装备和工艺研发，探索数字化管理转型，在运河与船闸建造技术、超大型构件出运安装技术、水下基床自动化设备处理技术、防波堤可视化建造技术等方面有领先的实力和施工经验。</p><p>公司在国内外核心期刊、国际学术会议上发表论文38篇。</p>'
    },

    {
        id: 62,
        name: '科技成果',
        slug: 'tech-results',
        parent_id: 6,
        is_nav: true,
        sort_order: 1,
        page_url: './6_tech.html?cat=tech-award',
        images: './4_business_files/1-9.jpg',
        description: '科技奖励、专利、工法与标准规范一览'
    },
    {
        id: 64,
        name: '科技奖励',
        slug: 'tech-award',
        parent_id: 62,
        is_nav: false,
        sort_order: 1,
        page_url: './6_tech.html?cat=tech-award',
        images: './4_business_files/1-9.jpg',
        description: '近年所获省部级科技进步奖一览表',
        content: '<p class="sub-title">成果概况</p><p>公司获省部级以上及中交科技奖31项。</p><table><thead><tr><th>序号</th><th>获奖年份</th><th>项目名称</th><th>评奖机构</th><th>获奖等级</th></tr></thead><tbody><tr><td>1</td><td>2026</td><td>深厚松散砂卵石地质高水头差船闸施工关键技术研究</td><td>四航局</td><td>二等奖</td></tr><tr><td>2</td><td></td><td>基于履带自升式布料机船闸大体积低坍落度混凝土浇筑施工关键技术研究</td><td>广东省土木建筑学会</td><td>一等奖</td></tr><tr><td>3</td><td></td><td>典型危大工程施工安全垂直领域模型构建与数字化管控技术</td><td>广东省土木建筑学会</td><td>一等奖</td></tr><tr><td>4</td><td></td><td>复杂海况典型工程船舶作业安全保障技术研究</td><td>广东省土木建筑学会</td><td>一等奖</td></tr><tr><td>5</td><td></td><td>桩基形态与缺陷检测评估新技术及应用</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>6</td><td></td><td>复杂海域大型扭王块体安装关键技术及装备研究</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>7</td><td></td><td>航运枢纽大体积混凝土冷却水集中供水及智能化温控关键技术研究</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>8</td><td></td><td>水下大型预制箱涵三维可视化定位与安装施工关键技术</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>9</td><td></td><td>水上承台应用免拆混凝土模板施工关键技术</td><td>广东省土木建筑学会</td><td>三等奖</td></tr><tr><td>10</td><td></td><td>高桩码头分离式阳板块免滑安装施工关键技术</td><td>广东省土木建筑学会</td><td>三等奖</td></tr><tr><td>11</td><td>2025</td><td>生态敏感区公路边坡生态功能修复与评估技术及应用</td><td>四航局</td><td>三等奖</td></tr><tr><td>12</td><td></td><td>取排水预制箱涵整体连续浇筑施工关键技术</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>13</td><td></td><td>消浪沉箱内现浇靠船块施工关键技术</td><td>广东省土木建筑学会</td><td>二等奖</td></tr><tr><td>14</td><td></td><td>大水位差多层框架码头架空式平台梁板施工关键技术</td><td>广东省土木建筑学会</td><td>三等奖</td></tr><tr><td>15</td><td></td><td>内河航道装配式边坡坡面防护结构施工关键技术</td><td>广东省土木建筑学会</td><td>三等奖</td></tr><tr><td>16</td><td></td><td>一种具有液压驱动机构的水下块石基床自动控制夯实系统</td><td>中国施工企业管理协会</td><td>二等奖</td></tr><tr><td>17</td><td></td><td>生态敏感区公路边坡生态功能修复与评估技术及应用</td><td>中国施工企业管理协会</td><td>二等奖</td></tr><tr><td>18</td><td></td><td>复杂海洋地质动力沉桩理论及关键技术研究与应用</td><td>中国水运建设行业协会</td><td>特等奖</td></tr><tr><td>19</td><td></td><td>大型水运工程岩质边坡爆破开挖支护施工安全控制及生态关键技术</td><td>中国水运建设行业协会</td><td>一等奖</td></tr><tr><td>20</td><td></td><td>油气化工码头工程数字化关键技术研究与应用</td><td>中国水运建设行业协会</td><td>一等奖</td></tr><tr><td>21</td><td></td><td>船闸工程施工安全状态AI监控与动态评估技术研究</td><td>中国水运建设行业协会</td><td>二等奖</td></tr></tbody></table><p><strong>配套证书</strong></p><p><img src=\'./6_tech_files/keji-cert-01.jpg\' alt=\'科技证书\'></p><p><img src=\'./6_tech_files/keji-cert-02.jpg\' alt=\'科技证书\'></p><p><img src=\'./6_tech_files/keji-cert-03.jpg\' alt=\'科技证书\'></p><p class="sub-title">成果证书</p><div class="cert-grid"><figure><img src="./6_tech_files/kyc-01.jpg" alt="中国航海学会科学技术奖励证书"><figcaption>中国航海学会科学技术奖励证书</figcaption></figure></div>'
    },

    {
        id: 65,
        name: '国家专利',
        slug: 'tech-patent',
        parent_id: 62,
        is_nav: false,
        sort_order: 2,
        page_url: './6_tech.html?cat=tech-patent',
        images: './4_business_files/1-9.jpg',
        description: '所获发明专利与实用新型专利一览表',
        content: '<p class="sub-title">成果概况</p><p>公司获国家专利268项，其中发明专利29项（包含国防专利6项）。</p><table><thead><tr><th>序号</th><th>获得年份</th><th>专利号</th><th>专利名称</th><th>专利类型</th><th>专利单位</th></tr></thead><tbody><tr><td>1</td><td>2026</td><td>202510448502.9</td><td>一种敏感区域既有结构保护施工方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>2</td><td></td><td>202510463680.9</td><td>一种疏浚料环保水泥基复合材料及其制备方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>3</td><td></td><td>202510938759.2</td><td>基于船闸施工的智能管冷循环控制系统及方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>4</td><td></td><td>202510770808.6</td><td>一种预冷混凝土生产物联网温控方法及系统</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>5</td><td></td><td>202510853134.6</td><td>一种混凝土生产车辆识别方法及系统</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>6</td><td></td><td>202510952512.6</td><td>一种PH值响应型自粘式保温保湿毯及其制备方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>7</td><td></td><td>202510434289.6</td><td>一种环保型降尘剂及其应用</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>8</td><td></td><td>202510996177.X</td><td>混凝土生产后台骨料智能上料方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>9</td><td></td><td>2026104789175</td><td>一种自适应多尺度注意力机制的声纳点云异常值检测方法</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>10</td><td></td><td>202423198833.1</td><td>一种圆锥机除尘装置及其圆锥机</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>11</td><td></td><td>202520698230.3</td><td>一种用于扭王字块的混凝土浇筑操作平台</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>12</td><td></td><td>202521021265.X</td><td>一种用于省水船闸的省水池结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>13</td><td></td><td>202521021267.9</td><td>一种利用弃渣场构筑的混凝土搅拌站</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>14</td><td></td><td>202521104180.8</td><td>一种用于防止叠合板后浇带漏浆的施工工具及吊模结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>15</td><td></td><td>202521021264.5</td><td>一种适用于丘陵地区的省水船闸</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>16</td><td></td><td>202521021263.0</td><td>一种水利枢纽结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>17</td><td></td><td>202521021268.3</td><td>一种闸墙结构及船闸</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>18</td><td></td><td>202521143162.0</td><td>一种用于施工生态挡土墙的装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>19</td><td>2025</td><td>202510975064.1</td><td>一种基于深度学习的混凝土冲毛质量视觉检测与分级系统</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>20</td><td></td><td>202422171412.3</td><td>一种预制梁水平转体施工设备</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>21</td><td></td><td>202422254689.2</td><td>一种预制箱梁钢筋绑扎定位胎架</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>22</td><td></td><td>202422607637.9</td><td>一种兼作边檩条的天沟结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>23</td><td></td><td>202422691451.6</td><td>一种用于辅助沉桩的液压夹具和沉桩工具</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>24</td><td></td><td>202422793973.7</td><td>一种桩孔封堵装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>25</td><td></td><td>202422793975.6</td><td>一种立杆限位器及悬挑式脚手架</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>26</td><td></td><td>202422793976.0</td><td>一种万向支撑底座及脚手架</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>27</td><td></td><td>202422793977.5</td><td>一种水上密排仿木桩的导向装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>28</td><td></td><td>202422695217.0</td><td>一种具有倒角的内模板</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>29</td><td></td><td>202422714638.3</td><td>一种悬挂式支架及施工作业平台</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>30</td><td></td><td>202423058441.5</td><td>一种筒仓喷淋养护系统</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>31</td><td>2024</td><td>202322724170.1</td><td>一种模板侧面人员施工平台</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>32</td><td></td><td>202322620900.3</td><td>一种预制装配式叠合板用可调式吊具</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>33</td><td></td><td>202322884214.7</td><td>一种道路植筋辅助钻孔装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>34</td><td></td><td>202323256790.3</td><td>一种ALC内墙板与外墙板连接结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>35</td><td></td><td>202322884209.6</td><td>一种检查井内壁抹泥刀</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>36</td><td></td><td>202322884217.0</td><td>一种包封混凝土浇筑的定型模板</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>37</td><td></td><td>202323315296.X</td><td>一种装配式溜槽</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>38</td><td></td><td>202420009354.1</td><td>一种海洋生态修复用的藻类附着床</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>39</td><td></td><td>202323416969.0</td><td>一种水上抛石集装箱式临时码头结构</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>40</td><td></td><td>202323400110.0</td><td>一种可变式联系桥及水上施工平台</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>41</td><td></td><td>202420272364.4</td><td>一种混凝土上料装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>42</td><td></td><td>202420173326.3</td><td>一种王字型铁链式整体吊装</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>43</td><td></td><td>202420274668.4</td><td>一种伸缩布料装置</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>44</td><td>2023</td><td>202210145528.2</td><td>一种下穿高速铁路修建用支护结构</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>45</td><td></td><td>202211034407.7</td><td>一种公路桥梁梁板预制混凝土废料的处理装置</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>46</td><td></td><td>202110105409.X</td><td>一种断裂桥梁的临时快速搭建设备</td><td>发明专利</td><td>四航局三公司</td></tr><tr><td>47</td><td></td><td>202320158821.2</td><td>一种工字钢或H型钢吊具</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>48</td><td></td><td>202321078088.X</td><td>一种桥梁施工安全操作平台</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>49</td><td></td><td>202320570139.4</td><td>边坡预制骨架节点支撑器</td><td>实用新型</td><td>四航局三公司</td></tr><tr><td>50</td><td></td><td>202320171510.X</td><td>一种用于脚手架可调托座的调节装置</td><td>实用新型</td><td>四航局三公司</td></tr></tbody></table><p><strong>配套证书</strong></p><p><img src=\'./6_tech_files/keji-cert-04.jpg\' alt=\'科技证书\'></p><p><img src=\'./6_tech_files/keji-cert-05.jpg\' alt=\'科技证书\'></p><p><img src=\'./6_tech_files/keji-cert-06.jpg\' alt=\'科技证书\'></p><p><img src=\'./6_tech_files/keji-cert-07.jpg\' alt=\'科技证书\'></p><p class="sub-title">成果证书</p><div class="cert-grid"><figure><img src="./6_tech_files/kyc-03.jpg" alt="实用新型专利证书"><figcaption>实用新型专利证书</figcaption></figure><figure><img src="./6_tech_files/kyc-04.jpg" alt="发明专利证书"><figcaption>发明专利证书</figcaption></figure></div>'
    },

    {
        id: 66,
        name: '施工工法',
        slug: 'tech-method',
        parent_id: 62,
        is_nav: false,
        sort_order: 3,
        page_url: './6_tech.html?cat=tech-method',
        images: './4_business_files/1-9.jpg',
        description: '获评审认定的施工工法一览表',
        content: '<p class="sub-title">成果概况</p><p>公司获省部级和中交工法52项。</p><table><thead><tr><th>序号</th><th>工法名称</th><th>工法级别</th><th>编号</th></tr></thead><tbody><tr><td>1</td><td>应用反挂式模板系统修复破损码头沉箱施工工法</td><td>四航局</td><td>ZJSHGF-2023-16</td></tr><tr><td>2</td><td>反挂式模板修复码头破损沉箱施工工法</td><td>水运工程二级工法</td><td>SYGF-2-09-2023</td></tr><tr><td>3</td><td>钢绞线加固大体积混凝土模板的施工工法</td><td>四航局</td><td>ZJSHGF-2023-17</td></tr><tr><td>4</td><td>预制空心圆管空腔大体积混凝土施工工法</td><td>四航局</td><td>ZJSHGF-2023-18</td></tr><tr><td>5</td><td>预制空心管船闸闸首底板结构施工工法</td><td>水运工程二级工法</td><td>SYGF-2-08-2023</td></tr><tr><td>6</td><td>长线路管廊多层管架现浇、装配组合施工工法</td><td>四航局</td><td>ZJSHGF-2023-19</td></tr><tr><td>7</td><td>装配式喷锚土质边坡防护全回旋机械臂施工工法</td><td>四航局</td><td>ZJSHGF-2023-20</td></tr><tr><td>8</td><td>水上群桩混凝土承台应用有底可拆卸钢套箱施工工法</td><td>四航局</td><td>ZJSHGF-2023-21</td></tr><tr><td>9</td><td>钢箱梁拖拉纵移安装施工工法</td><td>四航局</td><td>ZJSHGF-2023-22</td></tr><tr><td>10</td><td>松散深厚砂卵石围堰“上墙下幕”防渗体系施工工法</td><td>四航局</td><td>ZJSHGF-2023-23</td></tr><tr><td>11</td><td></td><td>水运工程二级工法</td><td>SYGF-2-11-2023</td></tr><tr><td>12</td><td>高温季节船闸强约束区大体积混凝土温控防裂施工工法</td><td>水运工程二级工法</td><td>SYGF-2-10-2023</td></tr><tr><td>13</td><td>架空梁式平台支撑体系内河高桩框架码头梁板施工工法</td><td>四航局</td><td>ZJSHGF-2024-12</td></tr><tr><td>14</td><td>大水位差多层框架码头架空式平台梁板施工工法</td><td>水运工程一级工法</td><td>SYGF-1-25-2024</td></tr><tr><td>15</td><td>可调节水位自动化降水井施工工法</td><td>四航局</td><td>ZJSHGF-2024-13</td></tr><tr><td>16</td><td>取排水预制箱涵整体连续浇筑施工工法</td><td>四航局</td><td>ZJSHGF-2024-14</td></tr><tr><td>17</td><td></td><td>水运工程一级工法</td><td>SYGF-1-26-2024</td></tr><tr><td>18</td><td>消浪孔胸墙一体化模板施工工法</td><td>四航局</td><td>ZJSHGF-2024-15</td></tr><tr><td>19</td><td>消浪沉箱内现浇靠船块施工工法</td><td>水运工程一级工法</td><td>SYGF-1-27-2024</td></tr><tr><td>20</td><td>整体滑移式贝雷片折线形拱架桥拱施工工法</td><td>四航局</td><td>ZJSHGF-2024-16</td></tr><tr><td>21</td><td>内河航道装配式边坡坡面防护结构施工工法</td><td>水运工程二级工法</td><td>SYGF-2-33-2024</td></tr><tr><td>22</td><td>液体化工码头多层混凝土管架预制现浇组合施工工法</td><td>水运工程二级工法</td><td>SYGF-2-34-2024</td></tr><tr><td>23</td><td>屋面微膨胀补偿收缩与连续弧形预应力组合施工工法</td><td>四航局</td><td>ZJSHGF-2025-12</td></tr><tr><td>24</td><td>沉箱码头带悬挑砼胸墙施工工法</td><td>四航局</td><td>ZJSHGF-2025-13</td></tr><tr><td>25</td><td>基于履带自升式布料机的航运枢纽大体积低坍落度三级配梯度混凝土浇筑施工工法</td><td>四航局</td><td>ZJSHGF-2025-15</td></tr><tr><td>26</td><td>航运枢纽大体积混凝土冷却水集中供水 及智能化温控施工工法</td><td>四航局</td><td>ZJSHGF-2025-14</td></tr><tr><td>27</td><td>水下大型预制箱涵三维可视化定位与安装施工工法</td><td>四航局</td><td>ZJSHGF-2025-16</td></tr><tr><td>28</td><td>座底式水下整平机抛石基床精细化整平施工工法</td><td>广西省工法</td><td>GXGF308-2025</td></tr><tr><td>29</td><td>大吨位沉箱借助浮箱及半潜驳达成高效安装施工工法</td><td>广西省工法</td><td>GXGF309-2025</td></tr><tr><td>30</td><td>水工结构物双孔箱梁智能预制施工工法</td><td>广西省工法</td><td>GXGF310-2025</td></tr><tr><td>31</td><td>水上承台免拆混凝土模板施工工法</td><td>水运工程一级工法</td><td>SYGF-1-47-2025</td></tr><tr><td>32</td><td>航运枢纽大体积混凝土冷却水集中供水及智能化温控施工工法</td><td>水运工程一级工法</td><td>SYGF-1-48-2025</td></tr><tr><td>33</td><td>基于履带自升式布料机船闸大体积低坍落度混凝土浇筑施工工法</td><td>水运工程一级工法</td><td>SYGF-1-49-2025</td></tr><tr><td>34</td><td>水下大型预制箱涵三维定位与安装施工工法</td><td>水运工程一级工法</td><td>SYGF-1-50-2025</td></tr><tr><td>35</td><td>含漂石火山沉积相地质绞吸船水下防堵管疏浚施工工法</td><td>水运工程一级工法</td><td>SYGF-1-51-2025</td></tr><tr><td>36</td><td>高桩码头钢管桩分离式阳极块免潜安装施工工法</td><td>水运工程二级工法</td><td>SYGF-2-17-2025</td></tr></tbody></table><p class="sub-title">成果证书</p><div class="cert-grid"><figure><img src="./6_tech_files/kyc-02.jpg" alt="水运工程工法证书"><figcaption>水运工程工法证书</figcaption></figure></div>'
    },

    {
        id: 67,
        name: '标准规范',
        slug: 'tech-standard',
        parent_id: 62,
        is_nav: false,
        sort_order: 4,
        page_url: './6_tech.html?cat=tech-standard',
        images: './4_business_files/1-9.jpg',
        description: '企业标准规范编制情况',
        content: '<p class="sub-title">成果概况</p><p>公司主编和参编16项国家、行业及团体标准，其中参编国标4部。</p><table><thead><tr><th>序号</th><th>规范/标准名称</th><th>标准号</th><th>主、参编人员</th><th>发布日期</th><th>实施日期</th><th>标准级别</th></tr></thead><tbody><tr><td>1</td><td>水运工程沉箱预制场设计指南</td><td>T/CWTCA10021-2022</td><td>杨建冲、郑远斌、毕莉莉、唐权辉、阳剑锋</td><td>2022.08.03</td><td>2023.01.01</td><td>团体标准</td></tr><tr><td>2</td><td>水泥混凝土和砂浆用短切玄武岩纤维</td><td>GB/T23265-2023</td><td>杨建冲、徐健</td><td>2023.5.23</td><td>2023.12.1</td><td>国标</td></tr><tr><td>3</td><td>水泥胶砂氯离子扩散系数检测方法</td><td>GB/T42272-2022</td><td>杨建冲、毕莉莉、刘深</td><td>2022.12.30</td><td>2023.4.1</td><td>国标</td></tr><tr><td>4</td><td>抗硫酸盐硅酸盐水泥</td><td>GB/T748-2023</td><td>彭上志、岑文杰、杨武杰</td><td>2023.5.23</td><td>2023.12.1</td><td>国标</td></tr><tr><td>5</td><td>水下岩石破碎施工技术规程</td><td>T/CWTCA10031-2023</td><td>彭上志、岑文杰</td><td>2023.11.8</td><td>2024.3.1</td><td>团体标准</td></tr><tr><td>6</td><td>公路斜拉桥施工监控技术规程</td><td>T/CI 925-2025</td><td>刘平、黄小斌</td><td>2025.3.14</td><td>2025.3.14</td><td>团体标准</td></tr><tr><td>7</td><td>预制混凝土衬砌管片</td><td>GBT22082-2024</td><td>刘平</td><td>2024.10.26</td><td>2025.5.1</td><td>国标</td></tr><tr><td>8</td><td>低碳智慧工地建设技术指南</td><td>T/BCEA A004-2023</td><td>刘平、于林江</td><td>2024.6.27</td><td>2024.7.1</td><td>团体标准</td></tr><tr><td>9</td><td>智慧工地数字化管理平台通则</td><td>T/CECS 10438-2024</td><td>于林江、高永斌</td><td>2024.12.20</td><td>2025.5.1</td><td>团体标准</td></tr><tr><td>10</td><td>公路工程无人机巡检监控技术规范</td><td>T/CHCA 004-2026</td><td>于林江、吴永明、杨建冲、黄丹、王彦军、李斯霞</td><td>2026.01.26</td><td>2026.04.27</td><td>团体标准</td></tr><tr><td>11</td><td>新拌混凝土密实振捣制样标准方法</td><td>T/CSPSTC 122-2023</td><td>陆鹤升、何丽平</td><td>2023.12.26</td><td>2023.12.31</td><td>团体标准</td></tr><tr><td>12</td><td>装配式钢结构建筑质量控制技术规程</td><td>T/CI 851-2024</td><td>刘平、于林江</td><td>2024.12.26</td><td>2024.12.26</td><td>团体标准</td></tr><tr><td>13</td><td>水利水电工程大体积混凝土温控施工技术规程</td><td>T/CI 1275—2025</td><td>刘平、于林江、岑文杰</td><td>2025.11.21</td><td>2025.11.21</td><td>团体标准</td></tr><tr><td>14</td><td>混凝土施工智能化管理系统集成与应用技术规程</td><td>T/CI 1274—2025</td><td>刘平、于林江、何丽平、岑文杰</td><td>2025.11.21</td><td>2025.11.21</td><td>团体标准</td></tr><tr><td>15</td><td>海洋环境水位变动区现浇混凝土结构耐久性技术规程</td><td>T/CSPSTC 164—2025</td><td>于林江、刘深、毕莉莉、岑文杰</td><td>2025.6.17</td><td>2025.7.10</td><td>团体标准</td></tr><tr><td>16</td><td>工程建材制品重载码垛机</td><td>T/CCMA 0215-2025</td><td>唐少华、刘建卫、张权钟</td><td>2025.2.17</td><td>2025.5.17</td><td>团体标准</td></tr></tbody></table>'
    },

    {
        id: 63,
        name: '装备研发',
        slug: 'tech-equipment',
        parent_id: 6,
        is_nav: true,
        sort_order: 3,
        page_url: './6_tech.html?cat=tech-equipment',
        images: './4_business_files/1-9.jpg',
        description: '装备研发',
        content: '<p class="sub-title">装备实力</p><p>三公司拥有浮船坞、半潜驳、打桩船、挖泥船、起重船等工程船舶40余艘，高速公路、铁路、码头等相关机械共1500多台套，能满足水工、路桥、轨道交通、高铁等各类项目在各种条件下施工生产的需要。</p><p class="sub-title">主要装备</p><div class="photo-grid"><figure><img src="./6_tech_files/eq-01.jpg" alt="智能环保预冷搅拌系统"><figcaption>智能环保预冷搅拌系统</figcaption></figure><figure><img src="./6_tech_files/eq-02.jpg" alt="铁路专用900吨提梁机"><figcaption>铁路专用900吨提梁机</figcaption></figure><figure><img src="./6_tech_files/eq-03.jpg" alt="“粤工桩9”86米打桩船"><figcaption>“粤工桩9”86米打桩船</figcaption></figure><figure><img src="./6_tech_files/eq-04.jpg" alt="“四航采砂3”耙吸式挖泥船"><figcaption>“四航采砂3”耙吸式挖泥船</figcaption></figure><figure><img src="./6_tech_files/eq-05.jpg" alt="600吨起重船"><figcaption>600吨起重船</figcaption></figure><figure><img src="./6_tech_files/eq-06.jpg" alt="“四航广州”号8000吨半潜驳"><figcaption>“四航广州”号8000吨半潜驳</figcaption></figure><figure><img src="./6_tech_files/eq-07.jpg" alt="“粤工拖45”4000马力全回转拖轮"><figcaption>“粤工拖45”4000马力全回转拖轮</figcaption></figure><figure><img src="./6_tech_files/eq-08.jpg" alt="800吨和350吨履带吊"><figcaption>800吨和350吨履带吊</figcaption></figure><figure><img src="./6_tech_files/eq-09.jpg" alt="400吨轮胎门式起重机"><figcaption>400吨轮胎门式起重机</figcaption></figure></div>'
    },

    {
        id: 71,
        name: '企业专家',
        slug: 'hr-expert',
        parent_id: 7,
        is_nav: true,
        sort_order: 1,
        page_url: './7_hr.html?cat=hr-expert',
        images: './4_business_files/1-5.jpg'
    },
    {
        id: 72,
        name: '招聘信息',
        slug: 'hr-info',
        parent_id: 7,
        is_nav: true,
        sort_order: 2,
        page_url: './7_hr.html?cat=hr-info',
        images: './4_business_files/1-5.jpg',
        content: '<p><strong>一、公司简介</strong></p><p>中交四航局第三工程有限公司（以下简称三公司）成立于1974年，是世界500强企业——中国交通建设股份有限公司旗下的中交第四航务工程局有限公司的全资子公司，是中交集团“TOP20”三级工程公司第六名，是华南地区历史悠久、技术力量及综合实力雄厚的建筑施工企业之一，目前拥有近1200名员工，年营业额100亿余元。三公司本部所在地湛江市为广东省域副中心城市，是粤西和北部湾城市群中心城市、全国首批沿海开放城市、首批“一带一路”海上合作支点城市、首批全国海洋经济创新发展示范城市，享有“中国海鲜美食之都”“中国对虾之都”等美誉。</p><p>三公司足迹遍及国内众多省市（广东、广西、海南、云南、贵州、重庆、四川、湖南、湖北、江西、江苏、上海等）以及越南、加纳、科特迪瓦、尼日利亚、安哥拉、喀麦隆、纳米比亚、贝宁、瑙鲁等国家，业务类型广泛，涉及港口码头、防波堤、护岸工程、水利、船闸、船坞工程、高速公路、桥梁工程、隧道工程、铁路工程、市政工程、水环境治理、房地产、海上风电等多个领域，参建了平陆运河项目、海南工程、广连高速、湛江港项目、洋浦集装箱枢纽港、贵广铁路、云桂铁路、马村港项目、江西万安船闸、江苏南通吕四港、黄浦江堤防、越南海上风电、加纳特码码头、喀麦隆克里比深水港等大型重点项目。</p><p>三公司不断打造精品工程，参建的大批工程先后荣获“国家优质工程金质奖”“国家优质工程奖”“鲁班奖”“詹天佑土木工程奖”“军队优质工程奖”等国家、省（部）级大奖共计200余项。同时，三公司诚信经营的品格和科学发展的成果得到了上级组织和社会各界的肯定，先后获评“全国文明单位”“全国模范职工之家”“全国水运工程建设优秀施工企业”“全国水运行业诚信企业”“全国学习型组织先进单位”“全国交通运输企业文化卓越单位”“广东省守合同重信用企业”等荣誉。</p><p><strong>二、招聘岗位及专业</strong></p><p>工程技术岗：港口与航道工程、道路桥梁工程、隧道工程、公路工程、土木工程、水利水电工程、市政工程、给排水工程、城市与地下空间、地质工程、工程力学、轨道交通、市政工程等工程类专业。</p><p>质量检验岗：土木工程大类专业。</p><p>安全环保管理岗：安全工程、环境工程或水处理等专业。</p><p>工程测量岗：工程测量技术、测绘工程、地理信息科学等专业。</p><p>试验检测岗：无机非金属、材料科学与工程、金属材料、建筑材料、道路材料、化工等专业。</p><p>机械管理岗：机械工程、机电一体化、机械自动化等专业。</p><p>工程管理岗（造价）：工程管理、工程造价等专业。</p><p>法务管理岗：法学等专业。</p><p>行政管理岗：文哲史、汉语言文学、新闻传播、企业管理、公共事业管理、纪检等专业。</p><p>人力资源管理岗：人力资源管理、劳动与社会保障等专业。</p><p>财务管理岗：会计学、财务管理等专业。</p><p>物资管理岗：物资管理、物流工程等专业。</p><p>信息技术岗：计算机、软件工程、人工智能等专业。</p><p>船员：航海技术、轮机管理、船舶驾驶等专业。</p><p><strong>三、招聘要求和注意事项</strong></p><p><strong>1）任职条件</strong></p><p>1. 2027年应届毕业生，本科及以上学历；航海及轮机管理专业还应在毕业时取得四小证及适任证书。</p><p>2. 爱岗敬业，吃苦耐劳，身体健康，能适应施工企业工作环境及工作特点的要求。</p><p>3. 中共党员、在校担任学生干部、有社会实践工作经验、通过英语四六级、双学位或硕士以上学位、文体特长等优先录用。</p><p><strong>2）人力资源政策</strong></p><p>1. 薪酬补贴：岗位工资+绩效工资+五险二金（公积金、企业年金）+各类补贴（高温津贴、交通补贴等），本科生入职第一年整体收入10-13万，研究生入职第一年整体收入12-16万，海外为国内同岗位工资的1.8--2.5倍。</p><p>2. 福利体系：购房贴息（30-60万），执业津贴（1-6万），企业补充医疗，商业保险（意外伤害险+重疾险），包吃包住（提供宿舍及工作餐），享有年休假、婚假、生育假、看护假等。</p><p>3. 发展通道：双导师带徒制（工作+思想双导师助力能力提升和角色转变）；优才计划（“雏鹰”“飞鹰”“雄鹰”三阶段培养打造骨干力量）；纵向贯通、横向融通的立体式人才培养体系。管理序列+技术序列+项目序列三大序列发展通道；综合培训培养机制；青年骨干培训等。</p><p>4. 关心关爱：年度健康体检、生日慰问（集体生日会）、集体婚礼、冬送温暖夏送清凉等。</p><p><strong>3）应聘方式</strong></p><p>投递简历至招聘邮箱：shjd21050@ccccltd.cn</p><p>链接网申：<a href="https://s57htfciza.jiandaoyun.com/f/6a64269e412d3f7dc65e2aed" target="_blank">https://s57htfciza.jiandaoyun.com/f/6a64269e412d3f7dc65e2aed</a></p><p><strong>4）联系方式</strong></p><p>1. 联系电话：0759-3616029</p><p>2. 公司网站：<a href="http://sh3.cccc4.com/" target="_blank">http://sh3.cccc4.com/</a></p><p>3. 微信公众号：中交四航三</p>'
    },
    {
        id: 73,
        name: '人才队伍结构',
        slug: 'hr-team',
        parent_id: 7,
        is_nav: true,
        sort_order: 3,
        page_url: './7_hr.html?cat=hr-team',
        images: './4_business_files/1-5.jpg',
        description: '优化人才队伍结构，激发人才创新活力'
    },
    {
        id: 74,
        name: '校招职位管理',
        slug: 'hr-post',
        parent_id: 7,
        is_nav: true,
        sort_order: 4,
        nav_type: 'LINK',
        link_url: 'https://xiaoyuan.zhaopin.com/company/KA0136739990D90000004000?refcode=4440&srccode=443001',
        page_url: '',
        images: './4_business_files/1-5.jpg',
        description: '面向高校毕业生的校园招聘职位',
        content: '<p>公司高度重视高校毕业生引进和培养，每年面向全国重点高校开展校园招聘。</p><p>校招岗位涵盖工程技术、科技研发、财务管理、企业管理等方向，为应届毕业生提供完善的培养体系和职业发展通道。</p>'
    },

    // ===== 品牌文化（id=8）：供 8_brand.html 栏目页与顶部导航使用 =====
    {
        id: 8,
        name: '品牌文化',
        slug: 'brand',
        parent_id: 0,
        is_nav: true,
        sort_order: 8,
        nav_type: 'PAGE',
        page_url: './8_brand.html'
    },
    {
        id: 81,
        name: '品牌文化',
        slug: 'corporate-culture',
        parent_id: 8,
        is_nav: true,
        sort_order: 1,
        page_url: './8_brand.html?cat=corporate-culture',
        images: './4_business_files/1-4.jpg',
        content: '<img src="./8_brand_files/brand-culture.jpg" alt="品牌文化" style="width:100%;height:auto;display:block;">'
    },


    {
        id: 82,
        name: '品牌活动',
        slug: 'brand-activities',
        parent_id: 8,
        is_nav: true,
        sort_order: 2,
        page_url: './8_brand.html?cat=brand-activities',
        images: './4_business_files/1-3.jpg',
        description: '工程师科普进校园等品牌公益活动'
    },
    {
        id: 83,
        name: '社会责任',
        slug: 'social-responsibility',
        parent_id: 8,
        is_nav: true,
        sort_order: 3,
        page_url: './8_brand.html?cat=social-responsibility',
        images: './4_business_files/1-5.jpg',
        description: '乡村振兴、抢险救灾、生态环保等履责实践',
        content: '<img src="./8_brand_files/social-responsibility-1.jpg" alt="社会责任" style="width:100%;height:auto;display:block;"><img src="./8_brand_files/social-responsibility-2.jpg" alt="社会责任" style="width:100%;height:auto;display:block;margin-top:16px;">'
    },
];

window.SITE_ARTICLES = [
    // ===== 企业荣誉（category_id=26，12 篇） =====
    {
        id: 6043,
        hash_id: 'honor-5',
        category_id: 26,
        title: '国家优质工程金奖',
        source: '本站',
        cover_image: './2_about_files/honor-05.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>国家优质工程金奖。</p><p><strong>荣誉类别：</strong>国家级工程质量荣誉（金奖）。</p><p><strong>奖牌证书所示：</strong>奖牌载明工程名称为广东湛江钢铁基地项目，参建单位为中交四航局第三工程有限公司，落款中国施工企业管理协会、二〇一九年十二月。</p><p><strong>奖项简介：</strong>国家优质工程奖中的高等级奖项，是我国工程建设领域国家级质量荣誉。</p>'
    },
    {
        id: 6047,
        hash_id: 'honor-9',
        category_id: 26,
        title: '国家优质工程金质奖',
        source: '本站',
        cover_image: './2_about_files/honor-09.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>国家优质工程金质奖。</p><p><strong>荣誉类别：</strong>国家级工程质量荣誉（金质奖）。</p><p><strong>奖牌证书所示：</strong>奖牌为金质奖章及红色铭牌。</p><p><strong>奖项简介：</strong>国家优质工程奖中的高等级奖项，代表该年度评选中的优质工程水平。</p>'
    },
    {
        id: 6044,
        hash_id: 'honor-6',
        category_id: 26,
        title: '国家优质工程奖',
        source: '本站',
        cover_image: './2_about_files/honor-06.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>国家优质工程奖。</p><p><strong>荣誉类别：</strong>国家级工程质量荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌载明工程名称为宝钢湛江30万吨级矿石码头工程，参建单位为中交四航局第三工程有限公司，落款中国施工企业管理协会、二〇一九年十二月。</p><p><strong>奖项简介：</strong>我国工程建设领域的国家级质量荣誉，表彰设计、施工、综合效益等方面达到国内先进水平的工程。</p>'
    },
    {
        id: 6045,
        hash_id: 'honor-7',
        category_id: 26,
        title: '国家优质工程奖（2016）',
        source: '本站',
        cover_image: './2_about_files/honor-07.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>国家优质工程奖（2016）。</p><p><strong>荣誉类别：</strong>国家级工程质量荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌标注年度为2016—2017，落款中国施工企业管理协会。</p><p><strong>奖项简介：</strong>国家优质工程奖按年度评审颁发，该奖牌对应2016—2017年度获奖工程。</p>'
    },
    {
        id: 6046,
        hash_id: 'honor-8',
        category_id: 26,
        title: '国家优质工程银质奖',
        source: '本站',
        cover_image: './2_about_files/honor-08.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>国家优质工程银质奖。</p><p><strong>荣誉类别：</strong>国家级工程质量荣誉（银质奖）。</p><p><strong>奖牌证书所示：</strong>奖牌标注年度为2010—2011。</p><p><strong>奖项简介：</strong>国家优质工程奖设金质奖、银质奖等等级，银质奖为其中面向优质完工工程的等级奖项。</p>'
    },
    {
        id: 6040,
        hash_id: 'honor-2',
        category_id: 26,
        title: '鲁班奖',
        source: '本站',
        cover_image: './2_about_files/honor-02.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>鲁班奖。</p><p><strong>荣誉类别：</strong>国家级建设工程质量荣誉。</p><p><strong>奖牌证书所示：</strong>奖杯为鲁班形象铜质奖杯。</p><p><strong>奖项简介：</strong>中国建筑业协会评选的全国建设工程质量荣誉奖，被视为行业工程质量最高奖。</p>'
    },
    {
        id: 6041,
        hash_id: 'honor-3',
        category_id: 26,
        title: '詹天佑奖',
        source: '本站',
        cover_image: './2_about_files/honor-03.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>詹天佑奖。</p><p><strong>荣誉类别：</strong>土木工程领域全国性科技荣誉。</p><p><strong>奖牌证书所示：</strong>奖杯为詹天佑人物雕像及底座铭牌。</p><p><strong>奖项简介：</strong>我国土木工程领域的全国性奖项，授予在科技创新与工程实践方面表现突出的项目。</p>'
    },
    {
        id: 6039,
        hash_id: 'honor-1',
        category_id: 26,
        title: '全国文明单位',
        source: '本站',
        cover_image: './2_about_files/honor-01.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>全国文明单位。</p><p><strong>荣誉类别：</strong>全国性精神文明建设荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌落款为中央精神文明建设指导委员会，时间2020年12月。</p><p><strong>奖项简介：</strong>由中央精神文明建设指导委员会评选表彰，是群众性精神文明建设活动的最高综合性荣誉。</p>'
    },
    {
        id: 6042,
        hash_id: 'honor-4',
        category_id: 26,
        title: '全国工人先锋号',
        source: '本站',
        cover_image: './2_about_files/honor-04.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>全国工人先锋号。</p><p><strong>荣誉类别：</strong>全国性职工集体荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌落款为中华全国总工会。</p><p><strong>奖项简介：</strong>由中华全国总工会授予先进集体的全国性荣誉，表彰在生产服务、创新创造中表现突出的班组和团队。</p>'
    },
    {
        id: 6049,
        hash_id: 'honor-11',
        category_id: 26,
        title: '2016年全国交通运输文化建设优秀单位',
        source: '本站',
        cover_image: './2_about_files/honor-11.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>2016年全国交通运输文化建设优秀单位。</p><p><strong>荣誉类别：</strong>交通运输行业企业文化荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌落款为中国交通企业管理协会、交通行业优秀企业管理成果评审委员会，时间二〇一六年十月。</p><p><strong>奖项简介：</strong>交通运输行业年度企业文化建设评优，表彰在行业文化建设中成效突出的单位。</p>'
    },
    {
        id: 6050,
        hash_id: 'honor-12',
        category_id: 26,
        title: '2011年全国交通运输企业文化建设优秀单位',
        source: '本站',
        cover_image: './2_about_files/honor-12.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>2011年全国交通运输企业文化建设优秀单位。</p><p><strong>荣誉类别：</strong>交通运输行业企业文化荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌落款为中国交通企业管理协会、交通行业优秀企业管理成果评审委员会，时间二〇一一年十月。</p><p><strong>奖项简介：</strong>交通运输行业企业文化建设年度评优，表彰企业文化体系建设与实践成效突出的企业。</p>'
    },
    {
        id: 6048,
        hash_id: 'honor-10',
        category_id: 26,
        title: '优秀企业管理银奖',
        source: '本站',
        cover_image: './2_about_files/honor-10.jpg',
        content: '<p class="sub-title">荣誉说明</p><p><strong>荣誉名称：</strong>优秀企业管理银奖。</p><p><strong>荣誉类别：</strong>企业管理成果类荣誉。</p><p><strong>奖牌证书所示：</strong>奖牌为“优秀企业管理银奖”铭牌。</p><p><strong>奖项简介：</strong>面向企业经营管理创新成果的评优奖项，表彰在管理提升、效益改善等方面成效突出的企业。</p>'
    },
    // ===== 公司要闻（category_id=31，21 篇） =====
    {
        id: 101,
        hash_id: 'img-news-1',
        category_id: 31,
        title: '公司召开2026年工作会议暨十六届二次职代会、第十四届二次工代会',
        source: '本站',
        cover_image: './1_home_files/img-news-1.jpg',
        published_at: '2026-05-21',
        is_image_news: true,
        content: '<p>2月5日至6日，公司2026年工作会议暨十六届二次职代会、第十四届二次工代会在本部召开。会议以习近平新时代中国特色社会主义思想为指导，深入学习贯彻党的二十大和二十届历次全会精神、中央经济工作会议精神和2026年中央企业负责人会议精神，全面贯彻落实中交集团、四航局2026年度工作会议部署，系统总结2025年工作成效及“十四五”时期发展经验和不足，科学研判当前内外部发展形势，研究部署2026年重点工作任务，动员全体干部职工坚定信心、稳中求进、笃行实干，奋力开创公司“十五五”高质量发展新篇章。四航局党委副书记、总经理方丘</p>'
    },
    {
        id: 102,
        hash_id: 'img-news-2',
        category_id: 31,
        title: '海南东方八所港高排港区一期工程码头及航道项目正式开工',
        source: '本站',
        cover_image: './1_home_files/img-news-2.jpg',
        published_at: '2026-05-26',
        is_image_news: true,
        content: '<p>3月31日，由四航局参建的海南东方八所港高排港区一期工程码头及航道项目正式开工。四航局副总经理储皖民等领导出席仪式。</p><p>该项目位于海南省东方市高排村附近海域，总用海面积约300万平方米。项目建设1个7万吨级通用泊位、1个3万吨级多用途泊位，泊位岸线长543米，设计年通过能力670万吨，同步建设7万吨级散货船减载乘潮单向航道，主要包含码头、航道、陆域形成、道路堆场、辅助建筑物、口岸监管仓库及水电信控等配套工程。</p>'
    },
    {
        id: 103,
        hash_id: 'img-news-3',
        category_id: 31,
        title: '阳西矿业项目砂石生产线试投产目标顺利完成',
        source: '本站',
        cover_image: './1_home_files/img-news-3.jpg',
        published_at: '2026-05-26',
        is_image_news: true,
        content: '<p>3月29日，阳西矿业项目砂石生产线试投产目标顺利完成，为项目全线投产奠定了坚实基础。</p><p>该项目砂石生产线主要由旋回破碎机、圆锥破碎机、筛分机、棒磨机、皮带输送机等核心设备组成，设计年产量可达2700万吨。此次试投产涵盖旋回破碎机、振动给料机、中间料库吊挂平台、皮带输送机、电气控制等关键施工内容。施工过程中，面对工期紧、设备安装精度要求高、工序复杂等多重挑战，项目建设管理团队始终坚持“质量安全双线并重”原则，通过优化资源配置、明确责任分工，严格把控设备安装精度质量指标，确保各项技术指标符合设计规范，同时强化工序衔接管控</p>'
    },
    {
        id: 6001,
        hash_id: 'img-news-4',
        category_id: 31,
        title: '刘平拜会湛江市农发集团主要领导',
        source: '本站',
        cover_image: './1_home_files/img-news-4.jpg',
        published_at: '2025-07-09',
        is_image_news: true,
        content: '<p>7月7日，公司执行董事、总经理刘平拜会湛江市农业发展集团有限公司党委书记、董事长李剑君，党委副书记、副董事、总经理姚晓战，双方就进一步加强合作进行座谈交流。</p><p>刘平对湛江农发集团的信任和支持表示感谢，介绍了公司生产经营、参与“百千万工程”建设情况。他表示，公司作为驻湛建筑类央企，长期深耕基础设施、海洋生态等领域，积累了丰富的技术经验和资源优势，与农发集团战略需求高度契合。公司愿以专业化技术能力和全方位优质服务，全力支持农发集团主业发展，共同为湛江高质量发展作出更大贡献。</p>'
    },
    {
        id: 6002,
        hash_id: 'img-news-5',
        category_id: 31,
        title: '中交滨海广场配套幼儿园顺利移交',
        source: '本站',
        cover_image: './1_home_files/img-news-5.jpg',
        published_at: '2026-07-16',
        is_image_news: true,
        content: '<p>7月3日，中交滨海广场项目配套幼儿园——湛江经开区第五幼儿园第三分园移交仪式顺利举行。湛江经开区党工委委员、管委会副主任韩伟雄，湛江经开区教育和文化广电旅游体育局负责人陈巨，湛江经开区教育局党委委员、副局长沈国强，以及公司党委副书记、纪委书记、工会主席刘洪亮出席仪式，湛江经开区相关职能部门及公司房建分公司、湛江第一分公司相关负责人参加活动。</p><p>该幼儿园总占地面积7200平方米，设有幼儿活动室、休息室、多功能音乐室、卫生保健室、会议接待室、档案室及各类办公室等多个功能分区，硬件设施齐全，可满足幼儿学习、生活、游戏等多方</p>'
    },
    {
        id: 111,
        hash_id: 'news-yaowen-1',
        category_id: 31,
        title: '公司召开2026年度法治合规工作会',
        source: '本站',
        cover_image: './1_home_files/1-2.png',
        published_at: '2026-10-23',
        content: '<p>10月20日，公司以“现场+视频”形式召开2026年度法治合规工作会。公司执行董事、总经理刘平，党委书记、副总经理彭远续出席，会议由公司总会计师、总法律顾问唐岸主持。公司在家领导，各部门及基层单位合规官参加会议。</p><p>会上，法律风控部以"深化法治价值创造 筑牢合规风控屏障 为公司\'十五五\'高质量发展构建法治护航体系"为主题，作2026年法治合规工作报告。报告从"四位一体"体系建设、案件全流程管控、清欠维权、合规文化建设、法治人才培养等方面回顾2026年以来的工作成效，研判当前法治合规工作形势，明确下一步重点工作任务，为</p>'
    },
    {
        id: 112,
        hash_id: 'news-yaowen-2',
        category_id: 31,
        title: '公司召开2026年第四季度生产工作会议',
        source: '本站',
        cover_image: './1_home_files/1-3.jpg',
        published_at: '2026-10-23',
        content: '<p>10月19日，公司召开2026年第四季度生产工作会议。公司执行董事、总经理刘平，党委书记、副总经理彭远续出席会议并讲话，副总经理陈秋月主持会议。公司在家领导、各业务部门及基层单位负责人参加会议。</p><p>会议深入贯彻落实上级决策部署，总结三季度生产经营工作，分析当前形势，部署四季度重点任务。会议要求各单位抢抓施工黄金季节，全力保障产值落地，严守安全技术底线，抓实项管系统填报与项目收尾管理，持续压实质量管控责任，深入解读“安薪3+7步工作法”，为公司持续发展奠定坚实基础。</p>'
    },
    {
        id: 113,
        hash_id: 'news-yaowen-3',
        category_id: 31,
        title: '公司召开2026年第四次安委会（扩大）会议',
        source: '本站',
        cover_image: './1_home_files/1-4.jpg',
        published_at: '2026-10-23',
        content: '<p>10月19日，公司召开2026年第四次安委会（扩大）会议，公司执行董事、总经理刘平主持会议，党委书记、副总经理彭远续等在家领导，各部门及基层单位负责人参加会议。</p><p>会上，公司安全环保管理部重点通报检查中发现的重大事故隐患，组织学习突发事件“第一时间”应急报告、近期安全环保相关文件以及中央安全生产考核巡查突出问题与典型事故案例，并对2026年三季度安全环保工作进行讲评，部署四季度安全环保工作。阳江F3-F5号泊位项目做安全工作履职汇报；公司船机管理部、质量管理部做安全述职汇报。</p>'
    },
    {
        id: 114,
        hash_id: 'news-yaowen-4',
        category_id: 31,
        title: '公司党委召开2026年第四次书记例会',
        source: '本站',
        cover_image: './1_home_files/secretary-meeting.jpg',
        published_at: '2026-10-23',
        is_top: true,
        is_image_news: true,
        content: '<p>10月16日，公司党委召开2026年第四次书记例会，公司党委书记彭远续主持会议。</p><p>会上，公司党群部门汇报2026年三季度工作开展总体情况，对各单位相关工作落实情况进行总结点评，并对2026年四季度重点工作提出具体要求。各单位党支部负责人汇报三季度重点工作完成情况及四季度重点工作计划。</p><p>会议通报了公司前三季度主要经营指标完成情况，指出各单位党组织要切实增强责任感和紧迫感，发挥基层党组织的战斗堡垒作用，统筹抓好年末各项重点工作，为攻坚年度目标任务提供坚强保障。</p>'
    },
    {
        id: 115,
        hash_id: 'news-yaowen-5',
        category_id: 31,
        title: '中标湛江两项目',
        source: '本站',
        cover_image: './5_party_files/4_1789883310105727789.jpg',
        published_at: '2026-10-16',
        content: '<p>近日，四航局接连中标遂溪县城月镇小城市试点培育建设项目（一期）和湛江市坡头区南三联围联合堤、和平堤等十三条堤段达标加固工程项目。</p><p>遂溪县城月镇小城市试点培育建设项目（一期）</p><p>该项目位于遂溪县城月镇，以“试点引领、培育提升”为核心，聚焦小城市培育发展目标，建设涵盖镇区基础设施完善、公共服务配套提升、人居环境综合整治等内容。项目建成后，将有效推动城月镇向现代化小城市转型，为遂溪县新型城镇化建设和“百千万工程”深入实施提供有力支撑。</p>'
    },
    {
        id: 116,
        hash_id: 'news-yaowen-6',
        category_id: 31,
        title: '公司收到湛江市中心血站发来的感谢函',
        source: '本站',
        cover_image: './6_tech_files/4_1789883330222183060.jpg',
        published_at: '2026-10-16',
        content: '<p>近日，公司收到湛江市中心血站发来的感谢函。函中对公司精心组织干部职工参与无偿献血活动致以诚挚感谢，并表示崇高敬意。</p><p>无偿献血是利国利民利己的公益事业，是社会主义核心价值观的重要体现。为保障湛江市临床用血需求，公司积极组织21名干部职工参与无偿献血，以实际行动践行关爱生命、无私奉献的精神。参与献血的员工们用热血为急需救治的患者点亮重生希望，也为社会传递了正能量。</p><p>一直以来，公司始终将履行社会责任融入企业发展，积极支持无偿献血等公益事业，以实际行动诠释央企责任与担当。下一步，公司将继续弘扬社会主义核心价值观，号召更多干</p>'
    },
    {
        id: 1161,
        hash_id: 'news-yaowen-7',
        category_id: 31,
        title: '八所港高排港区一期工程项目码头1号引桥钢栈桥打桩施工正式启动',
        source: '本站',
        cover_image: './2_about_files/1_1789887509334280000.jpg',
        published_at: '2026-10-12',
        content: '<p>近日，八所港高排港区一期工程码头1号引桥钢栈桥打桩施工顺利启动，标志着项目码头引桥施工取得关键性节点突破。</p><p>该项目计划新建1个3万吨级多用途泊位、1个7万吨级通用泊位，码头及3座引桥均采用高桩梁板结构，引桥合计总长636.5米。项目海域地质条件复杂，钢管桩需穿越密实胶结砂层，沉桩阻力大、施工难度高；陆域存在天然气管线、风机、国防光缆等大量权属复杂障碍物，迁改协调难度大。面对重重挑战，项目团队统筹谋划、主动作为，严格执行“地、图、钱、凭、证”前置闭环管理机制，有序推进建设用地移交、施工图纸会审交底等各项工作，依法依规</p>'
    },
    {
        id: 1162,
        hash_id: 'news-yaowen-8',
        category_id: 31,
        title: '三亚港南山港区货运码头二期工程项目疏浚部分顺利通过交工验收',
        source: '本站',
        cover_image: './7_hr_files/6_1789883346026393018.jpg',
        published_at: '2026-10-12',
        content: '<p>近日，三亚港南山港区货运码头二期工程项目疏浚部分顺利通过交工验收。</p><p>该项目主要对南山港货运码头一期1万吨级港池航道实施升级改造，改造后达到2万吨级标准。航道设计总长度3250米，底宽135米，设计底标高-12.5米；港池设计回旋圆直径332米，设计底高程-12.5米；项目设计总疏浚量约365.30万立方米。同时对港池航道内原有9座侧面灯浮标进行移位，并新增2座侧面灯浮标。</p><p>项目投入运营后，将有效满足2万吨级船舶全天候通航需求，进一步打通港区集疏运瓶颈，提升货物装卸及科考保障效率，为南山港建设国家深海科考母港、服务海</p>'
    },
    {
        id: 1163,
        hash_id: 'news-yaowen-9',
        category_id: 31,
        title: '蓝海新材料配套码头工程顺利通过竣工验收',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-10-12',
        content: '<p>近日，蓝海新材料配套码头工程顺利通过竣工验收。</p><p>该工程建设1个5万吨级泊位，码头总长300米，采用高桩墩台结构，主要建设内容包括疏浚、码头主体、管线桥、设备安装及航标等。施工过程中，项目团队科学统筹、精心组织，合理配置资源，全过程严控安全质量。面对地基条件复杂、海域风浪大、台风频发等不利因素，项目建设团队迎难而上，逐一攻克技术难题，确保项目按期优质竣工。验收小组经现场实地核验和工程资料全面审查，一致认定项目严格按照相关规范标准完成全部施工内容，工程质量符合设计要求，同意通过竣工验收。</p>'
    },
    {
        id: 1164,
        hash_id: 'news-yaowen-10',
        category_id: 31,
        title: '国投洋浦港10万吨级公共粮油码头工程预制构件全部安装完成',
        source: '本站',
        cover_image: './1_home_files/1-2.png',
        published_at: '2026-10-08',
        content: '<p>近日，国投洋浦港10万吨级公共粮油码头工程预制构件全部安装完成，标志着码头主体结构拼装全面完成。</p><p>该码头采用高桩梁板式结构，码头平台及引桥上部结构由预制横梁、纵梁、轨道梁、面板等854件预制构件组成，单构件最大重量达83吨，最大安装跨距约40米。针对构件种类多、规格复杂及潮汐、台风影响等难题，项目编制专项安装方案，逐一验算吊装参数与施工工序，协调船机资源、优化安装顺序，推行码头平台与引桥作业面平行施工，并借助全站仪实时校对调整，确保安装精度符合设计要求。</p>'
    },
    {
        id: 1165,
        hash_id: 'news-yaowen-11',
        category_id: 31,
        title: '洋浦神头港项目顺利完成80吨门机安装任务',
        source: '本站',
        cover_image: './1_home_files/1-3.jpg',
        published_at: '2026-10-08',
        content: '<p>近日，洋浦港神头港区新兴作业区船舶维保和海工装备基地项目（起步工程）两台80吨通用门式起重机主梁顺利吊装就位，标志着项目门机安装关键节点圆满完成。</p><p>主梁采用箱型模块化设计，构件通过销轴与高强度螺栓连接，具备高度、跨度双可调特性，最大起升净高39米，基准跨度32米，支持双40吨同步抬吊及10吨副钩辅助作业，工况适配性强。针对海南沿海台风多发的工况特点，设备配置自动夹轨器、防风锚固装置，搭配防风锚链与缆风绳构建四重防风体系，提升露天作业抗风安全储备。项目部编制专项吊装方案，密切关注海边气象条件，严控大件吊装与高处作业安</p>'
    },
    {
        id: 6003,
        hash_id: 'news-yaowen-12',
        category_id: 31,
        title: '马村港三期项目（一阶段）陆域吹填顺利完成',
        source: '本站',
        cover_image: './1_home_files/1-4.jpg',
        published_at: '2026-10-08',
        content: '<p>近日，马村港三期项目（一阶段）陆域吹填顺利完成，标志着项目正式由海上施工阶段转入陆域地基处理及土建施工阶段，为后续工程全面铺开奠定了坚实基础。</p><p>本项目陆域吹填设计总量约535万立方米，形成陆域面积27.08万平方米。作为项目关键线路上的首道核心工序，陆域吹填是全面打开项目建设局面、提升整体施工进度的里程碑节点，对项目后续建设具有决定性意义。</p><p>项目建成投入投用后，将进一步完善海南港口基础设施，有效缓解区域港口运输压力，为海南自由贸易港建设提供更有力的物流支撑，助力海南打造高水平对外开放门户。</p>'
    },
    {
        id: 6004,
        hash_id: 'news-yaowen-13',
        category_id: 31,
        title: '湛江港宝满港区集装箱码头一期扩建工程疏浚工程顺利通过交工验收',
        source: '本站',
        cover_image: './3_news_files/2_1789883281281862438.jpg',
        published_at: '2026-10-08',
        content: '<p>近日，湛江港宝满港区集装箱码头一期扩建工程疏浚工程顺利通过交工验收。</p><p>该项目主要建设内容为2个5万吨级集装箱专用泊位，可兼顾靠泊7万吨级集装箱船舶，设计年通过能力142万标箱，使用港口岸线646米，建设内容包括港池疏浚工程、软基处理工程、水工建筑工程、道路堆场等工程。交工验收会上，验收小组认真听取项目施工、安全、质量等方面的汇报，查阅档案资料，并赴施工现场实地核查。经查验，验收小组一致认定该工程严格按照设计文件及合同规范组织施工，已完成全部建设内容，工程质量合格，同意通过交工验收。</p>'
    },
    {
        id: 6005,
        hash_id: 'news-yaowen-14',
        category_id: 31,
        title: '廉江核电项目海域取排水设施建安工程取水箱涵全部安装完成',
        source: '本站',
        cover_image: './5_party_files/4_1789883310105727789.jpg',
        published_at: '2026-10-01',
        content: '<p>近日，广东廉江核电项目一期工程海域取排水设施建安工程取水箱涵预制构件全部安装完成，项目建设取得关键进展。</p><p>该工程为廉江核电一期配套项目，主要建设内容包括取排水口、取水箱涵、海水排水箱涵及排水闸门井等设施。面对施工作业面狭窄、有效作业时间短及安装精度高等挑战，项目团队统筹谋划、精细组织施工，圆满完成全部箱涵预制构件安装作业，标志着取排水设施海上段已具备通水条件，为核电厂海水冷源系统投用筑牢坚实保障。</p><p>项目投入使用后，将满足核电厂取排水需求，对保障广东省和粤港澳大湾区能源电力安全、优化能源结构具有重要意义。</p>'
    },
    {
        id: 6006,
        hash_id: 'news-yaowen-15',
        category_id: 31,
        title: '洋浦神头港防波堤项目首件沉箱预制典型施工顺利完成',
        source: '本站',
        cover_image: './6_tech_files/4_1789883330222183060.jpg',
        published_at: '2026-10-01',
        content: '<p>近日，洋浦港神头港区新兴作业区船舶维保和海工装备基地项目（起步工程）首件沉箱预制典型施工顺利完成。</p><p>该项目位于海南省儋州市洋浦经济开发区洋浦港神头港区新兴作业区（一港池），建设内容涵盖防波堤、环境保护工程、导助航工程及临时工程（含临时钢引桥、道路）等分项。工程共计165件沉箱，总设计混凝土方量393753立方米，单件最大重量达6584吨，采用分层翻模工艺。围绕首件沉箱预制典型施工高质量实施目标，项目团队周密策划、科学部署，通过优化工序提升作业效率，落实各项安全技术措施，顺利完成首件沉箱预制，为项目全面推进筑牢了根基</p>'
    },
    {
        id: 6007,
        hash_id: 'news-yaowen-16',
        category_id: 31,
        title: '四航局收到百色枢纽通航投资有限公司发来的感谢信',
        source: '本站',
        cover_image: './2_about_files/1_1789887509334280000.jpg',
        published_at: '2026-10-01',
        content: '<p>近日，四航局收到百色枢纽通航投资有限公司发来的感谢信，信中对百色水利枢纽项目部在关键节点施工中的突出表现表示高度赞扬，并致以诚挚感谢。</p><p>信中指出，项目建设团队科学组织施工、精准施策，通过更换30米加长臂挖机、升级22米加长定位桩突破施工局限，攻克高低水头叠加施工、生态低扰动保护等技术难题。团队依托深水智能勘测技术，融合单波束无人船、多波束、GNSS、侧扫声呐与深水潜航设备全域扫测，辅以硬式扫床二次复核，搭建分阶段数字化质检体系，勘测效率较传统方式提升50%，保障了航道成型质量。团队还落实方案预控与现场旁站，搭配红外</p>'
    },
    // ===== 媒体聚焦（category_id=33，16 篇） =====
    {
        id: 131,
        hash_id: 'news-media-1',
        category_id: 33,
        title: '中国新闻网、环球网等十多家主流媒体关注报道四航局海南国投洋浦港10万吨级公共粮油码头工程完成三个结构段移交',
        source: '本站',
        cover_image: './1_home_files/1-4.jpg',
        published_at: '2026-10-12',
        content: '<p>近日，四航局承建的海南国投洋浦港10万吨级公共粮油码头项目顺利完成3个码头结构段移交，受到中国新闻网、环球网、中国企业报、中国经济新闻网、中国水运网、中国商报网、人民交通网、中国交通在线、海南日报、大湾区时报、粤港澳新闻网、港澳商报网、中国品牌时报、香港商业新闻、香港世界导报、香港新闻在线、香港晨报、香港时报网、澳门晨报等十多家主流媒体的关注报道。</p><p>报道链接：<a href="https://mp.weixin.qq.com/s/rdr3npad6DekO0Dq64IV7w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/rdr3npad6DekO0Dq64IV7w</a></p>'
    },
    {
        id: 132,
        hash_id: 'news-media-2',
        category_id: 33,
        title: '环球网、中国日报网等十多家主流媒体关注报道四航局海南东方八所港高排港区一期工程航道疏浚施工正式启动',
        source: '本站',
        cover_image: './3_news_files/2_1789883281281862438.jpg',
        published_at: '2026-10-01',
        content: '<p>近日，四航局参建的海南东方八所港高排港区一期工程航道疏浚施工正式启动，受到环球网、中国日报网、中国水运网、中国经济新闻网、中国交通在线、人民交通网、中企资讯网、大湾区时报、港澳商报网、香港世界导报、香港时报网、香港新闻在线等十多家主流媒体的关注报道。</p><p>报道链接：<a href="https://mp.weixin.qq.com/s/kgdyUXzZaycFOXQTLcltAw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/kgdyUXzZaycFOXQTLcltAw</a></p>'
    },
    {
        id: 133,
        hash_id: 'news-media-3',
        category_id: 33,
        title: '央视新闻联播报道！平陆运河航运枢纽工程建设全面完成',
        source: '本站',
        cover_image: './5_party_files/4_1789883310105727789.jpg',
        published_at: '2026-07-08',
        content: '<p>5月16日，平陆运河航运枢纽主体工程建设完成，全力冲刺2026年通航目标，获央视新闻联播报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/S-1rmJvIM7DAcnVa9Jp-AA?poc_token=HGoTTmqjP50I4VLtPDInOgPuGoREZWX3dn-OaoDl" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/S-1rmJvIM7DAcnVa9Jp-AA?poc_token=HGoTTmqjP50I4VLtPDInOgPuGoREZWX3dn-OaoDl</a></p>'
    },
    {
        id: 6008,
        hash_id: 'news-media-4',
        category_id: 33,
        title: '中国网、中国报道网等多家主流媒体报道四航局湛江港宝满港区集装箱码头一期扩建工程获评“平安工地”典型项目',
        source: '本站',
        cover_image: './6_tech_files/4_1789883330222183060.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，四航局承建的湛江港宝满港区集装箱码头一期扩建工程获评广东省公路水运工程“平安工地”典型项目，受到中国网、中国报道网、中国水运网、中国企业报、湛江云媒、粤港澳新闻网、香港经济新闻网、香港商业新闻网、澳门商报等多家主流媒体的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/bLa6WqRbwv5kmaPUGZ83cg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/bLa6WqRbwv5kmaPUGZ83cg</a></p>'
    },
    {
        id: 6009,
        hash_id: 'news-media-5',
        category_id: 33,
        title: '中央广播电视总台关注报道平陆运河青年枢纽项目破堰放水',
        source: '本站',
        cover_image: './2_about_files/1_1789887509334280000.jpg',
        published_at: '2026-07-08',
        content: '<p>5月1日，四航局承建的平陆运河青年枢纽项目破堰放水，受到中央广播电视总台关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/i0OIO-CaOI7ake4CPtvdjg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/i0OIO-CaOI7ake4CPtvdjg</a></p>'
    },
    {
        id: 6010,
        hash_id: 'news-media-6',
        category_id: 33,
        title: '中国网、中国报道网等多家主流媒体报道四航局吴川塘尾分洪闸重建工程二期建设进展',
        source: '本站',
        cover_image: './7_hr_files/6_1789883346026393018.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，四航局承建的吴川塘尾分洪闸重建工程二期水下工程顺利通过验收，受到中国网、中国报道网、中国水运网、中国企业报、湛江云媒、粤港澳新闻网、香港经济新闻网、香港商业新闻网、澳门商报等多家主流媒体的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/8YIVTt3x3AZpkbQd0yW-ew" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/8YIVTt3x3AZpkbQd0yW-ew</a></p>'
    },
    {
        id: 6011,
        hash_id: 'news-media-7',
        category_id: 33,
        title: '新华网、央视网等多家主流媒体报道四航局长沙三线船闸项目开展防洪度汛应急演练',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，四航局承建的湘江长沙综合枢纽三线船闸开展防洪度汛应急演练，受到新华网、央视网、人民日报全国党媒信息公开平台、中国日报网、新湖南、湖南经视、时刻新闻、华声在线、鲁网等多家主流媒体的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/pTAZeDIA1SerxeymxoSBrw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/pTAZeDIA1SerxeymxoSBrw</a></p>'
    },
    {
        id: 6012,
        hash_id: 'news-media-8',
        category_id: 33,
        title: '中央广播电视总台关注报道平陆运河青年枢纽建设',
        source: '本站',
        cover_image: './1_home_files/1-2.png',
        published_at: '2026-07-08',
        content: '<p>3月18日，四航局承建的平陆运河青年枢纽开始无水单机单闸调试，标志着平陆运河正式进入船闸设备调试阶段，受到中央广播电视总台的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/2MARB--u5C3vwOpQszOjfw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/2MARB--u5C3vwOpQszOjfw</a></p>'
    },
    {
        id: 6013,
        hash_id: 'news-media-9',
        category_id: 33,
        title: '中国新闻网、中国报道等十多家主流媒体关注报道四航局钦州港大榄坪港区大榄坪作业区4号5号泊位工程建设进展',
        source: '本站',
        cover_image: './1_home_files/1-3.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，四航局承建的钦州港大榄坪港区大榄坪作业区4号5号泊位工程（码头水工及道路堆场）顺利通过交工验收，受到中国新闻网、中国报道网、中国水运网、人民交通网、中国交通在线、中国企业报、粤港澳新闻网、香港经济导报、香港经济新闻网、澳门商报等十多家主流媒体的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/GB2TPTqu_T3bGVE540Jqdw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/GB2TPTqu_T3bGVE540Jqdw</a></p>'
    },
    {
        id: 6014,
        hash_id: 'news-media-10',
        category_id: 33,
        title: '人民网、中国报道网等多家主流媒体关注报道四航局重庆万州区北滨大道延伸段工程建成通车',
        source: '本站',
        cover_image: './1_home_files/1-4.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，四航局重庆万州区北滨大道延伸段工程顺利建成通车，受到人民网、中国报道网、中国工业新闻网、中国企业报、凤凰网、山城日报、三峡传媒网、粤港澳新闻网、香港经济新闻网等多家主流媒体的关注报道。</p><p>报道链接：</p><p><a href="https://mp.weixin.qq.com/s/ext3ZcCBzhTm91n9F1HdbA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/ext3ZcCBzhTm91n9F1HdbA</a></p>'
    },
    {
        id: 6015,
        hash_id: 'news-media-11',
        category_id: 33,
        title: '《海南新闻广播》：海口白驹大道改造及东延长线项目累计完成投资5亿元',
        source: '本站',
        cover_image: './3_news_files/art-img-01.png',
        published_at: '2019-09-24',
        content: '<p>《海南新闻广播》：海口白驹大道改造及东延长线项目累计完成投资5亿元</p>'
    },
    {
        id: 6016,
        hash_id: 'news-media-12',
        category_id: 33,
        title: '《今日头条》：广东茂名港博贺新港区粤电煤炭码头工程通过交工验收',
        source: '本站',
        cover_image: './3_news_files/art-img-02.png',
        published_at: '2019-09-19',
        content: '<p>《今日头条》：广东茂名港博贺新港区粤电煤炭码头工程通过交工验收</p>'
    },
    {
        id: 6017,
        hash_id: 'news-media-13',
        category_id: 33,
        title: '《茂名日报》：茂名港博贺新港区粤电煤炭码头工程通过验收',
        source: '本站',
        cover_image: './3_news_files/art-img-03.jpg',
        published_at: '2019-09-18',
        content: '<p>电子阅读网址：</p>'
    },
    {
        id: 6018,
        hash_id: 'news-media-14',
        category_id: 33,
        title: '《防城港新闻》：防城港401号泊位工程圆筒预制全部完成',
        source: '本站',
        cover_image: './3_news_files/art-img-04.jpg',
        published_at: '2019-09-17',
        content: '<p>《防城港新闻》：防城港401号泊位工程圆筒预制全部完成</p>'
    },
    {
        id: 6019,
        hash_id: 'news-media-15',
        category_id: 33,
        title: '《防城港电视台》——防城港401号泊位建设加快推进',
        source: '本站',
        cover_image: './3_news_files/art-img-05.jpg',
        published_at: '2019-09-17',
        content: '<p>《防城港电视台》——防城港401号泊位建设加快推进</p>'
    },
    {
        id: 6020,
        hash_id: 'news-media-16',
        category_id: 33,
        title: '《钦州日报》：工程建设快马加鞭',
        source: '本站',
        cover_image: './3_news_files/art-img-06.jpg',
        published_at: '2019-09-09',
        content: '<p>《钦州日报》：工程建设快马加鞭</p>'
    },
    // ===== 港口及航运设施工程（category_id=41，12 篇） =====
    // ===== 公路工程（category_id=42，6 篇） =====
    // ===== 铁路工程（category_id=43，3 篇） =====
    // ===== 城市轨道交通工程（category_id=44，2 篇） =====
    // ===== 市政工程（category_id=45，4 篇） =====
    // ===== 隧道和桥梁工程（category_id=46，8 篇） =====
    // ===== 水利、船闸、船坞工程（category_id=47，7 篇） =====
    // ===== 房屋建筑工程（category_id=48，5 篇） =====
    // ===== 生态保护工程（category_id=49，3 篇） =====
    // ===== 河湖治理工程（category_id=50，2 篇） =====
    // ===== 综合管廊工程（category_id=51，1 篇） =====
    // ===== 海外风能发电工程（category_id=52，1 篇） =====
    // ===== 海外港口及航运设施工程（category_id=53，12 篇） =====
    // ===== 疏浚工程（category_id=411，2 篇） =====
    {
        id: 4111,
        hash_id: 'business-shujun-1',
        category_id: 411,
        title: '大型疏浚吹填工程',
        cover_image: './4_business_files/1-1.jpg',
        published_at: '2026-06-15',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>港口及航运设施工程——疏浚吹填工程。</p><p><strong>主要施工内容：</strong>港池与航道疏浚、吹填造陆、软基处理、护岸及后方陆域配套等施工。</p><p><strong>项目意义：</strong>形成码头与陆域建设所需的水深和场地条件。</p>'
    },
    {
        id: 4112,
        hash_id: 'business-shujun-2',
        category_id: 411,
        title: '航道整治与维护疏浚',
        cover_image: './4_business_files/1-2.jpg',
        published_at: '2026-06-10',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>港口及航运设施工程——航道疏浚整治。</p><p><strong>主要施工内容：</strong>航道拓宽浚深、水下斜坡整治、基床与边坡处理及维护性疏浚等施工。</p><p><strong>项目意义：</strong>保障航道设计水深与船舶通航安全。</p>'
    },
    // ===== 道路工程（category_id=412，2 篇） =====
    {
        id: 4121,
        hash_id: 'business-daolu-1',
        category_id: 412,
        title: '高速公路改扩建工程',
        cover_image: './4_business_files/1-3.jpg',
        published_at: '2026-06-12',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>道路工程——高速公路改扩建。</p><p><strong>主要施工内容：</strong>路基与路面、桥涵构造物、互通立交、排水及交通安全设施等施工。</p><p><strong>项目意义：</strong>提升公路通行能力与服务水平。</p>'
    },
    {
        id: 4122,
        hash_id: 'business-daolu-2',
        category_id: 412,
        title: '市政道路桥梁工程',
        cover_image: './4_business_files/1-4.jpg',
        published_at: '2026-06-05',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>道路工程——市政道路与桥梁。</p><p><strong>主要施工内容：</strong>道路路基路面、桥梁结构、给排水管网、交通绿化及配套工程等施工。</p><p><strong>项目意义：</strong>完善城市路网结构，改善片区交通条件。</p>'
    },
    // ===== 岛隧工程（category_id=413，2 篇） =====
    {
        id: 4131,
        hash_id: 'business-daosui-1',
        category_id: 413,
        title: '沉管隧道安装工程',
        cover_image: './4_business_files/1-5.jpg',
        published_at: '2026-06-14',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>岛隧工程——沉管隧道。</p><p><strong>主要施工内容：</strong>管节预制、基床整平、沉管浮运与对接安装、基础处理及附属结构等施工。</p><p><strong>项目意义：</strong>为跨海通道提供连续的水下通行条件。</p>'
    },
    {
        id: 4132,
        hash_id: 'business-daosui-2',
        category_id: 413,
        title: '海底隧道工程',
        cover_image: './4_business_files/1-6.jpg',
        published_at: '2026-06-08',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>岛隧工程——海底隧道。</p><p><strong>主要施工内容：</strong>隧道掘进、衬砌结构、防水与洞内铺装、通风消防及照明附属工程等施工。</p><p><strong>项目意义：</strong>保障线路穿越海域的通行能力与运营安全。</p>'
    },
    // ===== 港口码头（category_id=414，2 篇） =====
    {
        id: 4141,
        hash_id: 'business-gangkou-1',
        category_id: 414,
        title: '大型深水码头工程',
        cover_image: './4_business_files/1-7.jpg',
        published_at: '2026-06-13',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>港口及航运设施工程——大型深水码头。</p><p><strong>主要施工内容：</strong>码头水工结构、护岸、港池与航道疏浚、后方堆场及配套设施等施工。</p><p><strong>项目意义：</strong>满足大型船舶靠泊作业与货物中转需求。</p>'
    },
    {
        id: 4142,
        hash_id: 'business-gangkou-2',
        category_id: 414,
        title: '集装箱码头改扩建',
        cover_image: './4_business_files/1-8.jpg',
        published_at: '2026-06-06',
        content: '<p class="sub-title">项目说明</p><p><strong>工程类别：</strong>港口及航运设施工程——集装箱码头改扩建。</p><p><strong>主要施工内容：</strong>泊位加固与接长、码头面层更新、岸桥基础、堆场及配套工艺设施等施工。</p><p><strong>项目意义：</strong>提升集装箱泊位通过能力与装卸作业效率。</p>'
    },
    // ===== 综合动态（category_id=551，16 篇） =====
    {
        id: 5511,
        hash_id: 'party-news-1',
        category_id: 551,
        title: '公司举办2026年 “强基赋能” 党支部书记培训班（第三期）',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-10-23',
        content: '<p>近日，公司2026年“强基赋能”党支部书记培训班（第三期）顺利举办。本次培训为期2天，采取线下集中授课模式，各基层党支部书记全部参训。培训聚焦保密管理、人力资源政策、工会业务、治欠保支等重点领域开展系统化授课，坚持以党建引领业务发展，着力提升党支部书记履职能力，为企业高质量发展筑牢基层战斗堡垒。</p><p>公司党委书记、副总经理、保密委员会主任彭远续讲授保密管理专题课。课程立足总体国家安全观，紧扣保密形势、保密工作管理办法（2026版）、保密要点、保密提醒四个维度展开。他结合新形势下保密工作的新要求、新修订保密法规制度及企业</p>'
    },
    {
        id: 5512,
        hash_id: 'party-news-2',
        category_id: 551,
        title: '公司党委召开2026年第四次书记例会',
        source: '本站',
        cover_image: './1_home_files/secretary-meeting.jpg',
        published_at: '2026-10-23',
        content: '<p>10月16日，公司党委召开2026年第四次书记例会，公司党委书记彭远续主持会议。</p><p>会上，公司党群部门汇报2026年三季度工作开展总体情况，对各单位相关工作落实情况进行总结点评，并对2026年四季度重点工作提出具体要求。各单位党支部负责人汇报三季度重点工作完成情况及四季度重点工作计划。</p><p>会议通报了公司前三季度主要经营指标完成情况，指出各单位党组织要切实增强责任感和紧迫感，发挥基层党组织的战斗堡垒作用，统筹抓好年末各项重点工作，为攻坚年度目标任务提供坚强保障。</p>'
    },
    {
        id: 5513,
        hash_id: 'party-news-3',
        category_id: 551,
        title: '公司开展中秋走访慰问活动',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-09-24',
        content: '<p>9月22日，公司党委副书记、纪委书记、工会主席刘洪亮带队走访慰问困难党员、困难职工以及海外员工家属，向他们送去组织的关怀与温暖。</p><p>在慰问活动中，刘洪亮与他们亲切交流，关切询问身体健康、生活状况及子女学习就业情况，并介绍了公司当前生产经营和党建工作情况。刘洪亮表示，公司发展离不开每一位员工的辛勤付出，更离不开员工家属尤其是海外员工家属的默默支持。他代表公司党委和工会，向默默坚守后方的家属们致以真诚感谢。他强调，公司党委、工会将持续深化党建引领服务赋能作用，切实履行党群服务职责，为有需要的员工和家属提供更多贴心服务，并</p>'
    },
    {
        id: 5514,
        hash_id: 'party-news-4',
        category_id: 551,
        title: '公司党委召开树立和践行正确政绩观专题会议',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-09-24',
        content: '<p>9月20日，公司党委召开树立和践行正确政绩观专题会议，传达学习习近平总书记重要指示精神，贯彻落实中央党的建设工作领导小组会议、国务院国资委党委专题会议、中交集团党委专题会议、四航局党委专题会议部署，总结树立和践行正确政绩观学习教育，研究部署巩固拓展学习教育成果、建立长效工作机制。公司党委书记彭远续主持会议并作总结讲话。</p><p>会议指出，自学习教育开展以来，公司党委深入贯彻落实习近平总书记关于树立和践行正确政绩观的重要指示精神，严格落实党中央决策部署，坚持以“立党为公、为民造福、科学决策、真抓实干”为总要求，把学习教育作为</p>'
    },
    {
        id: 5515,
        hash_id: 'party-news-5',
        category_id: 551,
        title: '公司党委举行理论学习中心组集体学习',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-08-24',
        content: '<p>8月18日，公司党委举行2026年第6次理论学习中心组集体学习，公司党委书记彭远续主持会议并提出工作要求。</p><p>会议专题学习了习近平总书记关于国有企业改革发展和党的建设的重要论述，系统研读了《习近平党建文选》（第一卷）（第二卷），中心组成员围绕学习主题进行交流研讨，结合公司实际和分管工作分享学习体会。</p><p>围绕下阶段重点工作，会议提出以下要求：</p><p>一是切实提升政治站位，持续深化党建引领。要深刻把握习近平党建思想的核心要义与实践要求，领会“十四个坚持”的科学内涵，以这一思想为根本遵循，深入研究党建实践中的新情况新问题，在巩固提</p>'
    },
    {
        id: 5161,
        hash_id: 'party-news-6',
        category_id: 551,
        title: '公司开展2026年“八一”建军节座谈交流暨拥军慰问活动',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-08-05',
        content: '<p>7月29日，公司组织开展2026年“八一”退伍军人座谈会暨拥军慰问活动。公司党委副书记、纪委书记、工会主席刘洪亮，公司党群部门代表及退伍军人在职职工代表参加会议。</p><p>座谈会上，退伍军人代表回顾军旅岁月，分享从“橄榄绿”到“中交蓝”的角色转变与成长感悟，表达了扎根岗位、再立新功的决心，并就职业发展、技能提升等方面提出意见建议，相关部门负责人现场逐一解答回应。</p><p>刘洪亮代表公司向退伍军人致以节日问候，对大家多年来扎根一线、默默奉献的担当付出表示感谢。他指出，军旅生涯锻造了过硬的纪律意识与责任担当，希望大家继续发扬“特别能吃</p>'
    },
    {
        id: 5162,
        hash_id: 'party-news-7',
        category_id: 551,
        title: '公司纪委举办2026年廉洁道德讲堂',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-27',
        content: '<p>7月22日，公司纪委在马村港项目部举办2026年廉洁道德讲堂。公司党委副书记、纪委书记、工会主席刘洪亮出席活动。</p><p>本次活动紧扣“贯彻‘五严’要求持续构建良好政治生态”党风廉政宣教月主题，精心设置“学廉省身、学案警心、学剧践廉、学廉闯廉、诵书悟廉、清歌咏廉、誓词明廉、赠书育廉”等八大环节。活动坚持自我检视与警示教育相结合，组织全体员工开展“五问自省”自查反思，集中组织观看廉洁警示教育片《心至廉·路致远》，创新采用情景演绎的形式，精彩展演廉洁漫剧《工地歪心思全踩红线》和情景剧《这字签不得》，生动还原、直观揭示了不同岗位</p>'
    },
    {
        id: 5163,
        hash_id: 'party-news-8',
        category_id: 551,
        title: '公司举办2026年“强基赋能”党支部书记培训班（第二期）',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-22',
        content: '<p>近日，公司举办2026年“强基赋能”党支部书记培训班（第二期），聚焦基层党建工作提质增效，着力提升党支部书记履职能力和综合素养，为推动党建工作与生产经营深度融合、夯实基层党建基础赋能蓄力。公司党委副书记、纪委书记、工会主席刘洪亮作廉洁教育专题授课。</p><p>本次培训立足基层党建工作实际，紧扣党支部书记履职需求，坚持理论学习与实践指导相结合，课程设置突出针对性和实效性。培训围绕党建与业务深度融合开展专题教学，结合建筑项目管理实际，系统讲解“支部建在项目上”工作体系，梳理党建联动施工、安全、成本、物资、技术等业务的实践路径，分</p>'
    },
    {
        id: 5164,
        hash_id: 'party-news-9',
        category_id: 551,
        title: '公司党委召开2026年第三次书记例会',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-22',
        content: '<p>7月15日，公司党委召开2026年第三次书记例会，公司党委书记彭远续主持会议。</p><p>会上，公司党群部门汇报2026年二季度工作开展总体情况，对各单位相关工作落实情况进行总结点评，并对2026年三季度重点工作提出具体要求。各单位党支部负责人汇报二季度重点工作完成情况及三季度重点工作计划。围绕公司党委下阶段重点工作，会议提出以下要求：</p><p>一是增强危机意识，奋力冲刺年度目标任务。各党支部书记要增强危机感和紧迫感，持续自我加压，牢固树立市场化经营思维，立足属地资源优势持续深耕区域市场，抓好在建项目全过程管控，推动“以现场促市场”</p>'
    },
    {
        id: 5165,
        hash_id: 'party-news-10',
        category_id: 551,
        title: '公司党委领导班子成员开展党建联系点调研及讲授专题党课②',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-14',
        content: '<p>近日，为全面落实中交集团、四航局及公司党委关于树立和践行正确政绩观学习教育部署要求，持续深化理论武装、凝聚干事合力，公司领导班子成员前往各基层单位讲授专题党课。授课紧紧围绕“立党为公、为民造福、科学决策、真抓实干”总要求，结合公司发展和项目管理实际，引导全体党员干部校准精神坐标、明晰履职方向，切实推动学习教育走深走实、见行见效。</p><p>刘平赴茂名第一、第二分公司开展调研</p><p>公司党委副书记、执行董事、总经理刘平深入茂名第一、第二分公司开展实地调研，结合基层生产经营实际和典型案例，讲授树立和践行正确政绩观专题党课，号召全体干部</p>'
    },
    {
        id: 5166,
        hash_id: 'party-news-11',
        category_id: 551,
        title: '公司党委举行理论学习中心组集体学习',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-14',
        content: '<p>8月18日，公司党委举行2026年第6次理论学习中心组集体学习，公司党委书记彭远续主持会议并提出工作要求。</p><p>会议专题学习了习近平总书记关于国有企业改革发展和党的建设的重要论述，系统研读了《习近平党建文选》（第一卷）（第二卷），中心组成员围绕学习主题进行交流研讨，结合公司实际和分管工作分享学习体会。</p><p>围绕下阶段重点工作，会议提出以下要求：</p><p>一是切实提升政治站位，持续深化党建引领。要深刻把握习近平党建思想的核心要义与实践要求，领会“十四个坚持”的科学内涵，以这一思想为根本遵循，深入研究党建实践中的新情况新问题，在巩固提</p>'
    },
    {
        id: 6021,
        hash_id: 'party-news-12',
        category_id: 551,
        title: '公司党委领导班子成员开展党建联系点调研及讲授专题党课①',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-14',
        content: '<p>近日，为全面落实中交集团、四航局及公司党委关于树立和践行正确政绩观学习教育部署要求，持续深化理论武装、凝聚干事合力，公司领导班子成员前往各基层单位讲授专题党课。授课紧紧围绕“立党为公、为民造福、科学决策、真抓实干”总要求，结合公司发展和项目管理实际，引导全体党员干部校准精神坐标、明晰履职方向，切实推动学习教育走深走实、见行见效。</p><p>彭远续到海南第一分公司开展调研</p><p>公司党委书记彭远续到海南第一分公司开展实地调研并讲授专题党课，要求项目持续提高政治站位，准确把握“央企姓党、央企为国”的本质要求，筑牢安全生产的红线底线，充</p>'
    },
    {
        id: 6022,
        hash_id: 'party-news-13',
        category_id: 551,
        title: '公司党委部署开展树立和践行正确政绩观学习教育',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-08',
        content: '<p>3月13日，公司党委召开扩大会议暨党的建设工作领导小组会议，认真学习贯彻习近平总书记关于树立和践行正确政绩观学习教育的重要讲话和重要指示精神，传达学习中央党的建设工作领导小组会议部署、中共中央办公厅《关于在全党开展树立和践行正确政绩观学习教育的通知》精神以及国务院国资委党委、集团党委、四航局党委工作要求，研究部署启动公司树立和践行正确政绩观学习教育工作。公司党委书记彭远续主持会议并讲话。</p><p>会议指出，开展树立和践行正确政绩观学习教育，是党中央站在强国建设、民族复兴的战略高度，着眼推动“十五五”开好局、起好步作出的重要</p>'
    },
    {
        id: 6023,
        hash_id: 'party-news-14',
        category_id: 551,
        title: '公司召开2026年党风廉政建设和反腐败工作会议、警示教育大会暨监督委员会会议',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，公司召开2026年党风廉政建设和反腐败工作会议、警示教育大会暨监督委员会会议。会议以习近平新时代中国特色社会主义思想为指导，深入贯彻党的二十大和二十届历次全会、中央纪委五次全会精神，认真落实集团、四航局党风廉政建设和反腐败工作会议要求，总结公司2025年党风廉政建设和反腐败工作，通报典型案例，开展警示教育，部署2026年工作任务。公司党委书记彭远续出席会议并讲话，党委副书记、执行董事、总经理刘平主持会议，党委副书记、纪委书记刘洪亮作工作报告和警示教育通报。</p>'
    },
    {
        id: 6024,
        hash_id: 'party-news-15',
        category_id: 551,
        title: '公司党委举行树立和践行正确政绩观学习教育专题读书班（第二期）暨理论学习中心组集体学习',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2026-07-08',
        content: '<p>5月17日，公司党委举行树立和践行正确政绩观学习教育专题读书班（第二期）暨2026年第3次理论学习中心组集体学习，开展树立和践行正确政绩观大讨论学习研讨。公司党委书记彭远续主持会议并提出工作要求。</p><p>会上，公司领导班子成员深入研讨“政绩为谁而树、树什么样的政绩、靠什么树政绩”，阐述思想认识、凝聚思想共识，对照“立党为公、为民造福、科学决策、真抓实干”四个方面，逐一发言交流，查摆自身不足，提出整改提升措施。</p>'
    },
    {
        id: 6025,
        hash_id: 'party-news-16',
        category_id: 551,
        title: '湛江第二分公司党支部荣获“湛江市先进基层党组织”称号',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，湛江第二分公司党支部荣获“湛江市先进基层党组织”称号。</p><p>湛江第二分公司坚定不移以习近平新时代中国特色社会主义思想为指导，坚守“央企姓党”初心，深耕属地、主动作为，以高质量党建引领高质量发展，主动融入广东省“百千万工程”“绿美广东”及湛江市“红树林之城”建设，实施海川大道扩建、广东实验中学湛江学校初中校区、湛江湾文旅配套设施、遂溪乡村振兴示范带、南三美丽圩镇提升等重点民生项目，高效完成金牛岛红树林科普基地配套建设，全速推进遂溪城乡风貌提升改造项目，以实干实效展现驻湛央企基层党组织的责任担当。近年来，湛江第二分公</p>'
    },
    // ===== 党建品牌（category_id=552，2 篇） =====
    {
        id: 5521,
        hash_id: 'party-brand-1',
        category_id: 552,
        title: '擦亮“中交蓝·党旗红”党建品牌',
        summary: '推动党建工作与生产经营深度融合，以高质量党建引领高质量发展。',
        author: '党委工作部',
        source: '本站',
        cover_image: './5_party_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-06-24'
    },
    {
        id: 5522,
        hash_id: 'party-brand-2',
        category_id: 552,
        title: '公司党委打造基层党建示范点',
        summary: '以点带面推动基层党建工作全面进步、全面过硬。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-06-09'
    },
    // ===== 工团工作（category_id=553，15 篇） =====
    {
        id: 5531,
        hash_id: 'party-union-1',
        category_id: 553,
        title: '公司举办2026年工会干部培训班',
        source: '本站',
        cover_image: './1_home_files/1-4.jpg',
        published_at: '2026-10-23',
        content: '<p>10月15日，公司举办2026年工会干部专题培训班，邀请了四航局工会副主席郑祖平等现场授课。</p><p>培训中，郑祖平以《扎实推进“五大工程” 推动项目工会工作高质量发展》为题作专题讲授。课程紧扣新时代工会工作新形势、新使命、新要求，深入解读新时代工会工作的职责定位与核心任务，系统梳理当前基层项目工会工作中存在的短板弱项，全面讲解工会“塑魂、建功、维护、关爱、强基”五大工程在项目层面的核心任务与工作要求，提出熟知职责、紧扣中心工作、用心关爱职工、强化统筹联动、打造特色品牌、坚持常态化学习等落地抓手与实践路径，为基层工会提质增</p>'
    },
    {
        id: 5532,
        hash_id: 'party-union-2',
        category_id: 553,
        title: '公司开展中秋走访慰问活动',
        source: '本站',
        cover_image: './3_news_files/2_1789883281281862438.jpg',
        published_at: '2026-09-24',
        content: '<p>9月22日，公司党委副书记、纪委书记、工会主席刘洪亮带队走访慰问困难党员、困难职工以及海外员工家属，向他们送去组织的关怀与温暖。</p><p>在慰问活动中，刘洪亮与他们亲切交流，关切询问身体健康、生活状况及子女学习就业情况，并介绍了公司当前生产经营和党建工作情况。刘洪亮表示，公司发展离不开每一位员工的辛勤付出，更离不开员工家属尤其是海外员工家属的默默支持。他代表公司党委和工会，向默默坚守后方的家属们致以真诚感谢。他强调，公司党委、工会将持续深化党建引领服务赋能作用，切实履行党群服务职责，为有需要的员工和家属提供更多贴心服务，并</p>'
    },
    {
        id: 6026,
        hash_id: 'party-union-3',
        category_id: 553,
        title: '汇聚青春热血 传递生命力量 | 公司组织开展无偿献血活动',
        source: '本站',
        cover_image: './5_party_files/4_1789883310105727789.jpg',
        published_at: '2026-08-24',
        content: '<p>8月13日，公司团委、工会组织开展“汇聚青春热血 传递生命力量”无偿献血活动，广大员工踊跃参与，用热血传递生命温度，践行社会责任。</p><p>本次活动共有20余名员工参与，党员干部率先垂范，青年员工踊跃参与，既有连续多年献血的“老面孔”，也有初次上阵的“新力量”。他们在血站工作人员和志愿者的引导下，有序完成信息登记、血压测量、血液初筛及采血等流程，累计献血量达5700毫升。大家纷纷表示，无偿献血是举手之劳的善行，能以点滴热血为他人生命续航，既是荣幸更是责任。</p>'
    },
    {
        id: 6027,
        hash_id: 'party-union-4',
        category_id: 553,
        title: '湛江市总工会到吴川市塘尾分洪闸重建工程项目开展“工会送清凉 防暑保安康”慰问活动',
        source: '本站',
        cover_image: './6_tech_files/4_1789883330222183060.jpg',
        published_at: '2026-08-05',
        content: '<p>7月28日，湛江市总工会党组成员、副主席陆建岳一行到吴川市塘尾分洪闸重建工程项目开展“工会送清凉 防暑保安康”慰问活动。公司党委副书记、纪委书记、工会主席刘洪亮参加活动。</p><p>陆建岳一行走进施工现场，与一线建设者亲切交谈，详细询问大家的作业强度、作息时间以及项目防暑降温措施落实情况，叮嘱大家在高温天气下注意劳逸结合、保重身体。他强调，项目部要科学合理安排作业时间，备足防暑降温物资，做好后勤服务保障，切实维护一线建设者的劳动安全和身体健康，在确保安全的前提下稳步推进工程建设。</p>'
    },
    {
        id: 6028,
        hash_id: 'party-union-5',
        category_id: 553,
        title: '公司举行2026年“六比六创”劳动竞赛启动仪式',
        source: '本站',
        cover_image: './2_about_files/1_1789887509334280000.jpg',
        published_at: '2026-07-08',
        content: '<p>4月17日，公司2026年“六比六创”劳动竞赛启动仪式在海南马村港三期项目（一阶段）项目部举行。公司党委副书记、纪委书记、工会主席刘洪亮出席仪式并讲话。</p><p>仪式详细解读了2026年劳动竞赛方案，组织海南片区参赛单位代表签订了竞赛责任书。竞赛单位代表马村港三期项目（一阶段）项目负责人作表态发言。刘洪亮为“党员先锋队”“工人先锋队”“青年突击队”代表授旗。活动还组织开展了劳模宣讲活动，以劳模精神凝聚奋进力量、激励全体员工。</p>'
    },
    {
        id: 6029,
        hash_id: 'party-union-6',
        category_id: 553,
        title: '入选部级优秀案例！公司船员权益保障工作收获“新成绩”',
        source: '本站',
        cover_image: './7_hr_files/6_1789883346026393018.jpg',
        published_at: '2026-07-08',
        content: '<p>近日，全国海上劳动关系三方协调机制办公室印发《关于公布船员服务阵地优秀案例的通报》，共公布30个船员服务阵地优秀案例。其中，公司“以‘四个聚焦’对接需求 构造服务船员新格局——船机中心幸福船员小屋”案例入选，标志着四航局在保障船员合法权益、构建海上和谐劳动关系等方面的创新实践取得新成绩。</p><p>公司船机中心幸福船员小屋于2021年12月建成投用，总建筑面积约500平方米，设置有健身运动区、学习冲浪区和休闲娱乐区等功能分区，是四航局首个、湛江市首批“幸福船员小屋”，被评为广东省“户外劳动者工会爱心驿站”，入选全国水运系统工</p>'
    },
    {
        id: 6030,
        hash_id: 'party-union-7',
        category_id: 553,
        title: '广东省海员工会主席章正军到公司调研指导',
        source: '本站',
        cover_image: './1_home_files/1-1.jpg',
        published_at: '2024-11-11',
        content: '<p>工会办公室 黄秋 房建分公司 唐凯</p><p>10月30日，广东省海员工会主席章正军到公司调研指导。公司党委书记、副总经理陈正进陪同调研。</p><p>章正军一行深入职工活动中心，详细了解了公司的经营生产情况和工会工作情况，对公司工会创新开展工会活动，切实履行工会各项职责，努力当好员工“娘家人”给予充分的肯定。期间，章正军还前往中交滨海广场项目进行参观，听取了中交滨海广场项目介绍及开发进度情况，并对公司在推动地区经济发展和提升城市形象方面做出的贡献给予高度评价。</p>'
    },
    {
        id: 6031,
        hash_id: 'party-union-8',
        category_id: 553,
        title: '公司工会开展节前走访慰问',
        source: '本站',
        cover_image: './5_party_files/party-img-07.jpg',
        published_at: '2023-09-27',
        content: '<p>工会办公室 黄秋</p><p>9月26日，公司党委副书记、纪委书记、工会主席刘伟带队走访慰问困难员工和海外员工家属代表，向他们送去组织的关怀与温暖。</p><p>刘伟与困难员工及海外员工家属进行了亲切交流，关切询问他们的生活状况及子女学习就业等情况。刘伟表示，公司的发展离不开每一位员工的辛勤付出和积极贡献，更离不开员工家属尤其是海外员工家属的默默付出和支持，真诚地向他们表示感谢。希望员工及员工家属在生活上遇到困难要及时反映，公司一定会尽最大努力帮助大家，做大家最坚实的后盾。</p>'
    },
    {
        id: 6032,
        hash_id: 'party-union-9',
        category_id: 553,
        title: '公司工会联合中国电信湛江分公司组织足球友谊赛',
        source: '本站',
        cover_image: './5_party_files/party-img-08.jpg',
        published_at: '2023-09-03',
        content: '<p>公司工会办</p><p>9月2日，公司工会联合中国电信湛江分公司组织了一场精彩的足球友谊赛。中国电信湛江分公司副总经理、工会主席程民，公司党委副书记、纪委书记、工会主席刘伟出席活动。</p><p>绿茵场上，气氛轻松愉快，大家秉持“友谊第一、比赛第二”的原则，尽情享受足球运动带来的快乐。双方队员娴熟的配合、漂亮的防守、精彩的射门赢得了阵阵掌声，展现了积极向上的精神风貌。经过双方队伍激烈的角逐，最终比分战成1：1平手。</p><p>此次足球友谊赛不仅是公司工会扎实推进“小微关爱”主题活动的生动实践，丰富了职工群众的业余文化生活，同时通过“以球会友，以球为</p>'
    },
    {
        id: 6033,
        hash_id: 'party-union-10',
        category_id: 553,
        title: '广东省海员工会主席许国胜到公司调研',
        source: '本站',
        cover_image: './5_party_files/party-img-09.jpg',
        published_at: '2023-08-28',
        content: '<p>公司工会办 黄秋</p><p>8月25日，广东省海员工会主席许国胜到公司调研。</p><p>调研会上，许国胜听取了公司的经营生产情况和“小微关爱”“工会主席进班组到宿舍，学思想送温暖”等品牌工会活动开展情况的汇报，对公司工会创新开展工会活动，切实履行工会各项职责，努力当好员工的“娘家人”给予充分的肯定，同时就广东省海员工会“六大工程”做了经验介绍。他强调，新时期工会工作要做到以下要求：一是要做到为党政分忧，引导职工群众听党话、跟党走，巩固党执政的阶级基础和群众基础；二是要做到为职工服务，以更加创新的方式，更加务实的举措，全力服务职工群众美</p>'
    },
    {
        id: 6034,
        hash_id: 'party-union-11',
        category_id: 553,
        title: '公司举行2023年“启航奖学”“金秋助学”奖助学金发放仪式',
        source: '本站',
        cover_image: './5_party_files/party-img-10.jpg',
        published_at: '2023-08-18',
        content: '<p>公司工会办 黄秋</p><p>8月17日，公司举行2023年“启航奖学”“金秋助学”奖助学金发放仪式。公司党委副书记、纪委书记、工会主席刘伟，工会办相关人员、职工及获得奖助学金职工子女代表参加仪式。</p><p>仪式上，刘伟代表公司向今年考取大学及硕士研究生的职工子女发放了奖助学金，对他们考上理想的院校表示祝贺，并寄语他们：一是要调整心态，实现角色转变，以新的视野、新的思维制定好近期目标和长远规划，落实在踏踏实实每一步行动上；二是要刻苦学习，锤炼真才实学，加强自主学习、探索和实践，不断充实知识储备，提升自我社会价值；三是要懂得感恩，厚植家</p>'
    },
    {
        id: 6035,
        hash_id: 'party-union-12',
        category_id: 553,
        title: '以球会友 增进交流——公司工会联合湛江海事局组织篮球友谊赛',
        source: '本站',
        cover_image: './5_party_files/party-img-11.jpg',
        published_at: '2023-08-13',
        content: '<p>公司工会办 黄秋</p><p>8月12日，公司工会联合湛江海事局组织了一场精彩的篮球友谊赛，湛江海事局党组成员、纪检组组长郑钰，公司党委副书记、纪委书记、工会主席刘伟亲临现场为队员们加油鼓劲。 比赛中，现场气氛轻松愉快，大家秉持“友谊第一、比赛第二”的原则，尽情享受篮球运动带来的快乐。全体队员凭借娴熟的技巧，精湛的球技，精准的投篮、迅捷的快攻、严密的防守，全程比分你追我赶，竞争不相上下。两队队员不时掀起阵阵高潮，赢得现场观众的热烈掌声。最终经过4节激烈的角逐，两队以良好的精神风貌、精湛的球技和高昂的斗志奉献了一场精彩的友谊赛。</p>'
    },
    {
        id: 6036,
        hash_id: 'party-union-13',
        category_id: 553,
        title: '重庆市万州区总工会党组书记、常务副主席王莉到万州项目部调研工作',
        source: '本站',
        cover_image: './5_party_files/party-img-12.jpg',
        published_at: '2022-04-25',
        content: '<p>万州项目部 黄壹行</p><p>近日，重庆市万州区总工会党组书记、常务副主席王莉一行到万州北滨路项目部调研工作。</p><p>王莉一行听取了项目部关于安全生产、职业病防治、农民工工资支付保障以及工会建家的工作汇报，并表示：一是要认真贯彻党中央、国务院关于职业病防治工作的决策部署，深入宣传贯彻《职业病防治法》，进一步推动用人单位落实职业病防治主体责任，切实保障广大劳动者职业健康权益；二是要做好职工劳动保护工作，一如继往地关注职工生命安全，牢固树立安全第一、生命至上理念；三是要持续做好工会建家工作，充分发挥工会桥梁纽带作用，当好“娘家人”。</p>'
    },
    {
        id: 6037,
        hash_id: 'party-union-14',
        category_id: 553,
        title: '刘建军荣获湛江市“五一劳动奖章”荣誉称号',
        source: '本站',
        cover_image: './2_about_files/1_1789887509334280000.jpg',
        published_at: '2022-02-15',
        content: '<p>湛江区域项目总经理部 崔水来</p><p>近日，公司职工刘建军荣获湛江市2021年“五一劳动奖章”荣誉称号。</p><p>刘建军同志先后参与建设过湛江机场跑道与停机坪、湛江钢铁基地码头、湛江港码头、中交滨海广场等多个大型项目。参与项目施工建设二十年以来，该同志在工作岗位上勤勤恳恳、兢兢业业、甘于奉献，为企业和湛江区域基础设施建设做出了积极贡献。多次被评为项目“先进员工”和公司“先进员工”，在2021年湛江市建设职业技能竞赛暨乡村振兴职业技能大赛选拔赛工程测量员竞赛中荣获个人第一名。</p>'
    },
    {
        id: 6038,
        hash_id: 'party-union-15',
        category_id: 553,
        title: '公司工会到中交滨海广场开展 “送温暖”慰问活动',
        source: '本站',
        cover_image: './5_party_files/party-img-13.jpg',
        published_at: '2021-12-16',
        content: '<p>湛江区域项目总经理部 崔水来</p><p>12月15日，公司工会主席陈昌霞到中交滨海广场开展“送温暖”慰问活动。</p><p>陈昌霞深入项目施工现场，为一线员工送上慰问物资和关怀，感谢项目全体员工为中交滨海广场项目的建设和企业发展所作的贡献，预祝所有员工元旦快乐、安康幸福。</p><p>他表示，公司工会、基层工会是广大职工的“娘家人”，将积极落实“职工有困难找工会”关爱工作，着力为职工解难事、办实事。他仔细叮嘱一线员工，在施工作业过程中，要坚持安全第一，确保安全防范措施落实到位，保证生产安全和员工自己的安全。</p>'
    },
    // ===== 科研项目（category_id=68，6 篇） =====
    {
        id: 6051,
        hash_id: 'tech-project-1',
        category_id: 68,
        title: '万吨级预制重件的水垫-滑板组合出运设备研发与应用示范项目',
        source: '本站',
        cover_image: './6_tech_files/project-01.jpg',
        published_at: '2015-01-08',
        content: '<p>万吨级预制重件的水垫-滑板组合出运设备研发与应用示范项目来源中国交建，2014年立项，计划2016年6月结题。</p><p>本项目的研究依托正在施工的海南省洋浦港油品码头及配套储运设施工程，以出运万吨级甚至十万吨级预制构件为前提，提出水垫-滑板组合出运技术，同时研究该核心技术中的水垫滑板设计、滑板摩阻力、平行平板缝隙流量压力特性、设备等内容。水垫-滑板组合出运技术是在滑板出运工艺上进行改进，不改变滑板出运的轨道、托板、牵引装置等设备配置，利用本身密封条件好的特点，仅设置承压水腔，增加超高压水泵提供高压水源，制成高压水垫，减轻滑板压力，较大地降底摩阻力，从而达到出运重件的目的。水垫-滑板组合出运工艺的小摩阻特征具有经济、安全、可操作性强等优势，是今后超重型构件出运首选工艺。因此对水垫滑板出运工艺技术的研究，具有广泛的应用前景经。后续我们将在此基础上进行总结提炼施工工艺，编制施工指南，为相关行业标准的修订奠定基础。</p>'
    },
    {
        id: 6052,
        hash_id: 'tech-project-2',
        category_id: 68,
        title: '滇南地区细角砾土高速铁路路基填料的适宜性及施工技术研究',
        source: '本站',
        cover_image: './6_tech_files/project-02.jpg',
        published_at: '2015-01-08',
        content: '<p>滇南地区细角砾土高速铁路路基填料的适宜性及施工技术研究项目来源四航局，2014年立项，计划2015年6月结题。由三公司承担，研究院参与。</p><p>随着我国铁路建设工程的快速发展，路基填料资源匮乏的现象将成为制约工程进展的关键难题。该项目依托新建云桂高速铁路云南段3标段，通过对细角砾土开展室内试验确定其工程性质，如液塑性指标、级配、承载比CBR值、水稳定性等，以满足A、B组填料要求，并根据现场试验，开发并形成细角砾土路基填料的压实工艺，以满足压实要求，通过数值计算，模拟分析列车荷载长期作用下的路基变形特性，预测所选填料构筑的路基长期动力稳定性，以评估滇南地区高速铁路路基填料的适宜性。随着四航局多元化发展，铁路建设已成为局业务板块的重要组成部分，路基填料的合理选择将成为制约工程成本与工期的关键因素，本项目研究成果将为今后类似项目提供积极的借鉴意义，并可为四航局在铁路建设行业的健康发展提供技术支撑。为今后在滇南地区乃至国内其他类似地区修建铁路工程提供经验参考，具有巨大的社会与经济效益。</p>'
    },
    {
        id: 6053,
        hash_id: 'tech-project-3',
        category_id: 68,
        title: '32m移动模架现浇箱梁精细化施工关键技术研究',
        source: '本站',
        cover_image: './6_tech_files/project-03.jpg',
        published_at: '2015-01-08',
        content: '<p>32m移动模架现浇箱梁精细化施工关键技术研究项目来源四航局，2014年立项，计划2016年6月结题。本课题承担单位为研究院，参加单位二公司和三公司。</p><p>本项目依托云桂铁路西洋河特大桥、珠海城际轨道项目32m箱梁，通过移动模架荷载预压试验及室内材料试验、各施工工况的理论计算预测及现场实测对比研究，获得大跨度移动模架现浇箱梁施工成套技术。其主要研究内容有以下4个子课题——“移动模架结构和工艺技术研究”、“移动模架用高性能混凝土设计及质量控制技术研发”、“移动模架现浇箱梁线形控制技术研究”、“移动模架法施工标准化工艺研究”等。结合现场监测和室内试验提出移动模架泵送混凝土的抗裂性、和易性、流动度等控制参数，解决箱梁混凝土浇筑质量、桥梁线形控制等方面问题，对现有移动模架的精细化施工关键技术问题进行研究。对我局将来承建其它的类似工程提供借鉴和指导。</p>'
    },
    {
        id: 6054,
        hash_id: 'tech-project-4',
        category_id: 68,
        title: '多线铁路钢桁梁斜拉桥单悬臂施工技术研究',
        source: '本站',
        cover_image: './6_tech_files/project-04.jpg',
        published_at: '2015-01-08',
        content: '<p>多线铁路钢桁梁斜拉桥单悬臂施工技术研究项目来源四航局，2011年立项，计划2015年6月结题，由三公司承担。</p><p>本项目的研究依托新建贵阳至广州铁路工程13标段思贤窖特大桥工程，思贤窖特大桥是我国目前最大跨度的四线铁路钢桁梁斜拉桥，从陆地运输杆件，边跨上梁，再由边跨往中跨单悬臂架设合拢的施工工艺在国内首次使用。本项目主要研究内容为采用单悬臂架设工艺，如何控制主梁线形及控制施工过程中主梁内应力的增加值；主梁过塔柱中心后对称挂索施工，如何调整索力，使主梁平面位置和标高尽可能与设计接近，最后成桥索力及主梁线形满足设计及规范要求，利用监控技术复核计算各种施工参数，指导优质成桥进行专题研究；为局积累此类工程的施工经验，创造桥梁施工品牌，拓展今后的铁路和公路市场都具有极其重要的意义。</p>'
    },
    {
        id: 6055,
        hash_id: 'tech-project-5',
        category_id: 68,
        title: '双排钢板桩施工关键技术研究',
        source: '本站',
        cover_image: './6_tech_files/project-05.jpg',
        published_at: '2015-01-08',
        content: '<p>双排钢板桩施工关键技术研究项目来源四航局，2011年立项，计划2015年6月结题。由三公司承担，研究院参与。</p><p>本项目的研究依托新建贵阳至广州铁路工程13标段思贤窖特大桥工程，通过对双排钢板桩施工关键技术的研究，从双排钢板桩的结构设计、钢板桩施打、监测技术三个方面着手，结合数值计算和实验、现场测试展开系统研究，通过在施工中研究如何在复杂的地质条件下顺利施打大长钢板桩，如何确保钢板桩锁扣的咬合度、垂直度，如何增强钢板桩堵塞效应以达到钢板桩围堰防渗漏的最佳效果，将研究结果进行总结，归纳出有效的长大钢板桩施工技术方法、深水双排钢板桩围堰的承载机理、双排钢板桩整体受力的效果及内外排钢板桩之间如何影响，达到为深水双排钢板桩围堰结构设计、施工、安全监测提供技术支持及积累经验的目的，为四航局提高桥梁施工水平起到了积极的推动作用。</p>'
    },
    {
        id: 6056,
        hash_id: 'tech-project-6',
        category_id: 68,
        title: '圆筒正态起浮浮游出坞技术研究',
        source: '本站',
        cover_image: './6_tech_files/project-06.jpg',
        published_at: '2015-01-08',
        content: '<p>圆筒正态起浮浮游出坞技术研究项目来源四航局，2010年立项，由三公司承担。</p><p>本项目依托防城港403－407#泊位码头工程，其原理为采用钢浮箱助浮并平衡圆筒起浮结构倾斜，对称位置浮箱吃水会发生变化产生浮力差，形成回复力矩。利用浮力差动态调整重心偏移，使圆筒能正态出坞。本项目采用资料收集分析、理论研究与试验相结合的方法进行。通过初步的理论分析，判断圆筒重心偏移的量值范围，通过对钢浮箱及其装设位置、固定方式等进行设计，析探讨其对圆筒重心偏移调整的效果，获取相关的技术数据，研究解决圆筒起浮出坞的倾斜问题，最终进行分析和总结，并对该技术进行推广应用。圆筒正态浮游立项研究，采取技术措施使圆筒正态起浮及浮游出坞，进一步完善圆筒装设临时底板采用浮船坞施工的工艺，对充分发挥浮船坞的性能及保证船机作业安全方面均有较大的意义。</p>'
    },
    // ===== 企业专家（category_id=71，12 篇） =====
    {
        id: 1301,
        hash_id: 'hr-expert-01',
        category_id: 71,
        title: '郑远斌',
        summary: '中交集团二级技术专家、四航局一级技术专家，正高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-01.jpg',
        published_at: '2026-07-29',
        content: '<p>中交集团二级技术专家、四航局一级技术专家，正高级工程师。</p><p>现任公司副总经理，1992年起从事机械设备工作。</p>'
    },
    {
        id: 1302,
        hash_id: 'hr-expert-02',
        category_id: 71,
        title: '于林江',
        summary: '四航局二级技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-02.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家，高级工程师。</p><p>现任公司总工程师，2004年起从事船舶与海洋工程相关工作。</p>'
    },
    {
        id: 1303,
        hash_id: 'hr-expert-03',
        category_id: 71,
        title: '吴利',
        summary: '四航局二级技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-03.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家，高级工程师。</p><p>现任公司科研技术部经理、技术中心经理，2001年起从事港航工程相关工作。</p>'
    },
    {
        id: 1304,
        hash_id: 'hr-expert-04',
        category_id: 71,
        title: '刘深',
        summary: '四航局二级技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-04.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家，高级工程师。</p><p>现任公司副总工程师、科研技术部一级技术经理，2002年起从事港航工程相关工作。</p>'
    },
    {
        id: 1305,
        hash_id: 'hr-expert-05',
        category_id: 71,
        title: '廖世强',
        summary: '四航局二级技术专家，正高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-05.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家，正高级工程师。</p><p>现任公司副总工程师、技术中心一级技术经理，2002年起从事港航工程相关工作。</p>'
    },
    {
        id: 1306,
        hash_id: 'hr-expert-06',
        category_id: 71,
        title: '岑文杰',
        summary: '四航局二级技术专家，正高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-06.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家，正高级工程师。</p><p>现任公司副总工程师、技术中心执行经理，2003年起从事港航工程（建筑材料科学方向）相关工作。</p>'
    },
    {
        id: 1307,
        hash_id: 'hr-expert-07',
        category_id: 71,
        title: '何丽平',
        summary: '四航局二级技术专家、高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-07.jpg',
        published_at: '2026-07-29',
        content: '<p>四航局二级技术专家、高级工程师。</p><p>现任公司技术中心二级技术经理，2012年起从事岩土工程相关工作。</p>'
    },
    {
        id: 1308,
        hash_id: 'hr-expert-08',
        category_id: 71,
        title: '刘建卫',
        summary: '三公司技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-08.jpg',
        published_at: '2026-07-29',
        content: '<p>三公司技术专家，高级工程师。</p><p>现任公司船机管理部经理，2009年起从事船机机电与安装工程相关工作。</p>'
    },
    {
        id: 1309,
        hash_id: 'hr-expert-09',
        category_id: 71,
        title: '董庆德',
        summary: '三公司技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-09.png',
        published_at: '2026-07-29',
        content: '<p>三公司技术专家，高级工程师。</p><p>现任公司工程管理部（RH办公室）执行经理，1995年起从事路桥工程相关工作。</p>'
    },
    {
        id: 1310,
        hash_id: 'hr-expert-10',
        category_id: 71,
        title: '张英华',
        summary: '三公司技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-10.png',
        published_at: '2026-07-29',
        content: '<p>三公司技术专家，高级工程师。</p><p>现任公司中心试验室主任，1993年起从事试验检测相关工作。</p>'
    },
    {
        id: 1311,
        hash_id: 'hr-expert-11',
        category_id: 71,
        title: '韦迎锋',
        summary: '三公司技术专家，高级工程师，公司一级测量工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-11.jpg',
        published_at: '2026-07-29',
        content: '<p>三公司技术专家，高级工程师，公司一级测量工程师。</p><p>现任公司测量技术负责人，2007年起从事测量相关工作。</p>'
    },
    {
        id: 1312,
        hash_id: 'hr-expert-12',
        category_id: 71,
        title: '黄小斌',
        summary: '三公司技术专家，高级工程师',
        source: '本站',
        cover_image: './7_hr_files/expert-12.png',
        published_at: '2026-07-29',
        content: '<p>三公司技术专家，高级工程师。</p><p>现任公司副总工程师、万州项目部常务副经理、万州项目部总工程师，2009年起从事路桥工程相关工作。</p>'
    },
    // ===== 人才队伍结构（category_id=73，3 篇） =====
    {
        id: 1321,
        hash_id: 'hr-team-01',
        category_id: 73,
        title: '人员结构',
        source: '本站',
        cover_image: './7_hr_files/structure-01.jpg',
        published_at: '2026-07-29',
        content: ''
    },
    {
        id: 1322,
        hash_id: 'hr-team-02',
        category_id: 73,
        title: '学历结构',
        source: '本站',
        cover_image: './7_hr_files/structure-02.jpg',
        published_at: '2026-07-29',
        content: ''
    },
    {
        id: 1323,
        hash_id: 'hr-team-03',
        category_id: 73,
        title: '职称结构',
        source: '本站',
        cover_image: './7_hr_files/structure-03.jpg',
        published_at: '2026-07-29',
        content: ''
    },
    // ===== 业务板块项目（来源：中交四航局三公司画册 2025年12月版“我们的业务”章节） =====

    // ===== 业务板块项目（来源：中交四航局三公司画册 2025年12月版“我们的业务”章节 + 工程图资料） =====
    {
        id: 63002,
        hash_id: 'business-port-2',
        category_id: 41,
        title: '湛江港',
        source: '公司画册',
        cover_image: './4_business_files/bw-02.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在湛江港先后承建了60余项港口及航运设施工程，包括当时全国最大的30万吨级陆岸油码头、华南地区最大的40万吨级铁矿石码头、设计年通过能力80万标箱的15万吨级集装箱码头。其中，广东湛江钢铁基地项目荣获国家优质工程金奖，宝钢广东湛江钢铁基地项目30万吨级矿石码头工程、宝钢湛江钢铁三高炉系统项目码头及其配套工程全天候泊位标段、广东大唐国际雷州发电厂2×1000MW海域工程荣获国家优质工程奖。</p>'
    },
    {
        id: 63001,
        hash_id: 'business-port-1',
        category_id: 41,
        title: '茂名港博贺新港区通用码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-01.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在茂名港先后承建了茂名港博贺新港区通用码头工程、茂名港博贺新港区粤电煤炭码头工程Ⅱ标段、茂名港博贺新港区东区油品码头工程等14项工程。</p>'
    },
    {
        id: 63003,
        hash_id: 'business-port-3',
        category_id: 41,
        title: '阳江LNG调峰储气库配套码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-03.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司先后承建阳江港8号通用泊位水工工程、阳江LNG调峰储气库配套码头工程、阳江港吉树作业区J15~J16号泊位工程、海陵湾港区吉树作业区5号~7号通用泊位码头工程、海陵湾港区丰头作业区F3~F5号泊位工程等10余项工程。</p>'
    },
    {
        id: 63004,
        hash_id: 'business-port-4',
        category_id: 41,
        title: '钦州港',
        source: '公司画册',
        cover_image: './4_business_files/bw-04.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在钦州港建成集装箱、散货、石油等各类码头25座共30多个泊位，码头建设从2千吨、5万吨、10万吨再到30万吨级，码头岸线长度累计超过了12公里，项目合同造价超过80亿元。</p>'
    },
    {
        id: 63005,
        hash_id: 'business-port-5',
        category_id: 41,
        title: '北海港',
        source: '公司画册',
        cover_image: './4_business_files/bw-05.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在北海港先后承建了北海港铁山港区1-4号泊位，北海港铁山港西港区北暮作业区5、6号泊位工程，北海港石步岭港区三期工程，北海港铁山港西港区北暮作业区9、10号泊位等30余项工程。</p>'
    },
    {
        id: 63006,
        hash_id: 'business-port-6',
        category_id: 41,
        title: '防城港',
        source: '公司画册',
        cover_image: './4_business_files/bw-06.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>地处北部湾的广西防城港，是环北部湾地区的中转枢纽港及集装箱中转中心。三公司扎根防城港30余年，承建了防城港小至数千吨、大至30万吨级泊位49个，总吨位达338.2万吨，码头岸线总长12.4公里，预制大型圆筒/沉箱763个。</p>'
    },
    {
        id: 63007,
        hash_id: 'business-port-7',
        category_id: 41,
        title: '海口港',
        source: '公司画册',
        cover_image: './4_business_files/bw-07.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在海口新海、马村、秀英港区先后承建了新海港区汽车客货滚装码头一、二期工程，马村中心港区二、三、四期码头水工工程，海口港二期码头及配套工程、秀英港区13号泊位局部修复工程等近30项工程。</p>'
    },
    {
        id: 63008,
        hash_id: 'business-port-8',
        category_id: 41,
        title: '海南省洋浦港油品码头及配套储运设施工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-08.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在洋浦港承建了洋浦港一期起步工程、海南洋浦国投孚宝油码头工程、洋浦莲花山临港石化物流园码头工程、洋浦临港液化码头等11项工程，其中海南省洋浦港油品码头及配套储运设施工程荣获国家优质工程奖、詹天佑奖；中石化（香港）洋浦港神头港区神北三港池南防波堤荣获国家优质工程奖。</p>'
    },
    {
        id: 63009,
        hash_id: 'business-port-9',
        category_id: 41,
        title: '上海港罗泾港区二期工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-09.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司在上海先后承建了上海孚宝化工码头工程、上海港罗泾港区二期工程等，其中上海港罗泾港区二期工程荣获国家优质工程金奖。</p>'
    },
    {
        id: 63010,
        hash_id: 'business-port-10',
        category_id: 41,
        title: '宜宾港',
        source: '公司画册',
        cover_image: './4_business_files/bw-10.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司承建了四川宜宾港志城作业区一期工程，宜宾港公用型保税仓库、监管仓库工程总承包工程，宜宾港志城作业区一期工程港区设施项目以及C标段等。该港口是国家长江经济带发展战略规划的重要港口之一，是四川构建西部综合交通枢纽的重要组成部分。</p>'
    },
    {
        id: 63011,
        hash_id: 'business-port-11',
        category_id: 41,
        title: '江苏盐城中电投协鑫滨海新建2x1000MW燃煤发电工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-11.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>江苏盐城中电投协鑫滨海新建2x1000MW燃煤发电工程为公司港口及航运设施工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程金奖。</p>'
    },
    {
        id: 63012,
        hash_id: 'business-port-12',
        category_id: 41,
        title: '福建漳州后石电厂',
        source: '公司画册',
        cover_image: './4_business_files/bw-12.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>福建漳州后石电厂为公司港口及航运设施工程板块工程。</p>'
    },
    {
        id: 63013,
        hash_id: 'business-road-1',
        category_id: 42,
        title: '贵州道安高速公路TJ23、24标',
        source: '公司画册',
        cover_image: './4_business_files/bw-13.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>贵州道安高速公路TJ23、24标为公司公路工程板块工程。</p>'
    },
    {
        id: 63014,
        hash_id: 'business-road-2',
        category_id: 42,
        title: '重庆三环高速公路铜梁至合川段工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-14.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>重庆三环高速公路铜梁至合川段工程为公司公路工程板块工程。</p><p><strong>获得奖项：</strong>中交优质工程奖。</p>'
    },
    {
        id: 63015,
        hash_id: 'business-road-3',
        category_id: 42,
        title: '湖南潭邵高速公路工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-15.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>湖南潭邵高速公路工程为公司公路工程板块工程。</p>'
    },
    {
        id: 63016,
        hash_id: 'business-road-4',
        category_id: 42,
        title: '广连高速公路二期项目TJ02标',
        source: '公司画册',
        cover_image: './4_business_files/bw-16.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>广连高速公路二期项目TJ02标为公司公路工程板块工程。</p>'
    },
    {
        id: 63017,
        hash_id: 'business-road-5',
        category_id: 42,
        title: '开春高速公路工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-17.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>开春高速公路工程为公司公路工程板块工程。</p>'
    },
    {
        id: 63018,
        hash_id: 'business-road-6',
        category_id: 42,
        title: '海口G15高速公路工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-18.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>海口G15高速公路工程为公司公路工程板块工程。</p>'
    },
    {
        id: 63019,
        hash_id: 'business-railway-1',
        category_id: 43,
        title: '贵广铁路思贤窖特大桥工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-19.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>贵广铁路思贤窖特大桥工程为公司铁路工程板块工程。</p>'
    },
    {
        id: 63020,
        hash_id: 'business-railway-2',
        category_id: 43,
        title: '哈大铁路20号制梁场',
        source: '公司画册',
        cover_image: './4_business_files/bw-20.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>2007年，三公司负责建设哈大铁路20号制梁场，由此拉开进入铁路市场的序幕。</p>'
    },
    {
        id: 63021,
        hash_id: 'business-railway-3',
        category_id: 43,
        title: '云桂铁路工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-21.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>云桂铁路工程为公司铁路工程板块工程。</p>'
    },
    {
        id: 63022,
        hash_id: 'business-rail-1',
        category_id: 44,
        title: '成都轨道交通17号线一期工程（PPP）',
        source: '公司画册',
        cover_image: './4_business_files/bw-22.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>成都轨道交通17号线一期工程（PPP）为公司城市轨道交通工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖。</p>'
    },
    {
        id: 63023,
        hash_id: 'business-rail-2',
        category_id: 44,
        title: '珠海市区至珠海机场城际轨道交通拱北至横琴段BT工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-23.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>珠海市区至珠海机场城际轨道交通拱北至横琴段BT工程为公司城市轨道交通工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖。</p>'
    },
    {
        id: 63024,
        hash_id: 'business-admin-1',
        category_id: 45,
        title: '湛江海川大道工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-24.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>湛江海川大道工程为公司市政工程板块工程。</p>'
    },
    {
        id: 63025,
        hash_id: 'business-admin-2',
        category_id: 45,
        title: '海口白驹大道工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-25.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>海口白驹大道工程为公司市政工程板块工程。</p>'
    },
    {
        id: 63026,
        hash_id: 'business-admin-3',
        category_id: 45,
        title: '顺德高新区西部启动区市政道路工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-26.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>顺德高新区西部启动区市政道路工程为公司市政工程板块工程。</p>'
    },
    {
        id: 63027,
        hash_id: 'business-admin-4',
        category_id: 45,
        title: '成都简州新城人才公园',
        source: '公司画册',
        cover_image: './4_business_files/bw-27.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>成都简州新城人才公园为公司市政工程板块工程。</p>'
    },
    {
        id: 63028,
        hash_id: 'business-bridge-1',
        category_id: 46,
        title: '杨梅隧道',
        source: '公司画册',
        cover_image: './4_business_files/bw-28.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>杨梅隧道为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63029,
        hash_id: 'business-bridge-2',
        category_id: 46,
        title: '云盘山隧道',
        source: '公司画册',
        cover_image: './4_business_files/bw-29.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>云盘山隧道为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63030,
        hash_id: 'business-bridge-3',
        category_id: 46,
        title: '坝子寨3号隧道',
        source: '公司画册',
        cover_image: './4_business_files/bw-30.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>坝子寨3号隧道为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63031,
        hash_id: 'business-bridge-4',
        category_id: 46,
        title: '万州北滨路项目双溪铺大桥',
        source: '公司画册',
        cover_image: './4_business_files/bw-31.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>万州北滨路项目双溪铺大桥为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63032,
        hash_id: 'business-bridge-5',
        category_id: 46,
        title: '云桂铁路云南段四家人双线特大桥工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-32.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>云桂铁路云南段四家人双线特大桥工程为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63033,
        hash_id: 'business-bridge-6',
        category_id: 46,
        title: '南充市都京港嘉陵江大桥',
        source: '公司画册',
        cover_image: './4_business_files/bw-33.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>南充市都京港嘉陵江大桥为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63034,
        hash_id: 'business-bridge-7',
        category_id: 46,
        title: '渝湘高速公路沿溪沟大桥',
        source: '公司画册',
        cover_image: './4_business_files/bw-34.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>渝湘高速公路沿溪沟大桥为公司隧道和桥梁工程板块工程。</p>'
    },
    {
        id: 63035,
        hash_id: 'business-ship-1',
        category_id: 47,
        title: '长洲水利枢纽三线四线船闸工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-35.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>长洲水利枢纽三线四线船闸工程是目前世界内河通行能力最大的单级船闸。独创的门楣自然通气技术和平面阀门通气型式，闸室和输水阀门尺度均处于国内领先水平。</p>'
    },
    {
        id: 63036,
        hash_id: 'business-ship-2',
        category_id: 47,
        title: '西部陆海新通道（平陆）运河青年枢纽工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-36.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>平陆运河是新中国成立以来的第一条内陆运河，也是世界上最大的内陆运河。它的修建难度之大、工程量之巨，堪比三峡工程。三公司负责青年枢纽工程施工。</p>'
    },
    {
        id: 63037,
        hash_id: 'business-ship-3',
        category_id: 47,
        title: '万安枢纽二线船闸工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-37.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>万安枢纽二线船闸工程设计最大工作水头32.5米，是世界第八、国内第四的超高水头单级船闸，闸墙修建高度为江西省之最，有着“千里赣江第一闸”之誉。</p>'
    },
    {
        id: 63038,
        hash_id: 'business-ship-4',
        category_id: 47,
        title: '西津二线船闸工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-38.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>西津二线船闸工程为公司水利、船闸、船坞工程板块工程。</p>'
    },
    {
        id: 63039,
        hash_id: 'business-ship-5',
        category_id: 47,
        title: '岷江犍为航电枢纽主体工程土建Ⅳ标',
        source: '公司画册',
        cover_image: './4_business_files/bw-39.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>岷江犍为航电枢纽主体工程土建Ⅳ标为公司水利、船闸、船坞工程板块工程。</p>'
    },
    {
        id: 63040,
        hash_id: 'business-ship-6',
        category_id: 47,
        title: '浙江舟山中远船坞工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-40.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>浙江舟山中远船坞工程为公司水利、船闸、船坞工程板块工程。</p>'
    },
    {
        id: 63041,
        hash_id: 'business-house-1',
        category_id: 48,
        title: '中交滨海广场项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-41.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>三公司以开发商及总承包商实施中交滨海广场项目。</p>'
    },
    {
        id: 63042,
        hash_id: 'business-house-2',
        category_id: 48,
        title: '海口新海滚装码头客运综合枢纽站工程及新海交通枢纽（GTC）工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-42.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>海口新海滚装码头客运综合枢纽站工程及新海交通枢纽（GTC）工程是全国最大，集旅客候船、交通集散、商业办公等功能于一体的“无感通关”综合交通枢纽。</p>'
    },
    {
        id: 63043,
        hash_id: 'business-house-3',
        category_id: 48,
        title: '海口博义盐灶八灶片区棚户区（城中村）改造项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-43.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>海口博义盐灶八灶片区棚户区（城中村）改造项目为公司房屋建筑工程板块工程。</p>'
    },
    {
        id: 63044,
        hash_id: 'business-house-4',
        category_id: 48,
        title: '成都简州新城新经济产业园项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-44.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>成都简州新城新经济产业园项目为公司房屋建筑工程板块工程。</p>'
    },
    {
        id: 63045,
        hash_id: 'business-house-5',
        category_id: 48,
        title: '广东实验中学湛江学校项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-45.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>广东实验中学湛江学校项目为公司房屋建筑工程板块工程。</p>'
    },
    {
        id: 63046,
        hash_id: 'business-ecology-1',
        category_id: 49,
        title: '湛江市麻章区湖光镇红树林科普基地配套设施工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-46.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>2023年4月，习近平总书记到湛江市麻章区湖光镇红树林科普基地，察看红树林长势和周边生态环境。</p>'
    },
    {
        id: 63047,
        hash_id: 'business-ecology-2',
        category_id: 49,
        title: '湛江市麻章区湖光镇乡村振兴（红树林）前期工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-47.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>公司承建湛江市麻章区湖光镇乡村振兴项目（红树林）前期工程，在48小时内完成全部施工任务。</p>'
    },
    {
        id: 63048,
        hash_id: 'business-ecology-3',
        category_id: 49,
        title: '江苏南通市海洋生态保护修复项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-48.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>江苏南通市海洋生态保护修复项目为公司生态保护工程板块工程。</p>'
    },
    {
        id: 63049,
        hash_id: 'business-ecology-4',
        category_id: 49,
        title: '射阳县海洋生态保护修复项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-49.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>射阳县海洋生态保护修复项目为公司生态保护工程板块工程。</p>'
    },
    {
        id: 63050,
        hash_id: 'business-river-1',
        category_id: 50,
        title: '吴川隔海河工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-50.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>吴川隔海河工程为公司河湖治理工程板块工程。</p>'
    },
    {
        id: 63051,
        hash_id: 'business-river-2',
        category_id: 50,
        title: '长三角生态绿色一体化发展示范区水乡客厅蓝环工程青浦段',
        source: '公司画册',
        cover_image: './4_business_files/bw-51.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>长三角生态绿色一体化发展示范区水乡客厅蓝环工程青浦段为公司河湖治理工程板块工程。</p>'
    },
    {
        id: 63052,
        hash_id: 'business-utility-1',
        category_id: 51,
        title: '茂南石化工业园公用管廊及园区排水工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-52.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>茂南石化工业园公用管廊及园区排水工程为公司综合管廊工程板块工程。</p>'
    },
    {
        id: 63053,
        hash_id: 'business-port-overseas-1',
        category_id: 53,
        title: '安哥拉洛比托扩建项目矿石码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-53.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>安哥拉洛比托扩建项目矿石码头工程为公司海外港口及航运设施工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖。</p>'
    },
    {
        id: 63054,
        hash_id: 'business-port-overseas-2',
        category_id: 53,
        title: '安哥拉罗安达油码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-54.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>安哥拉罗安达油码头工程是安哥拉国家石油公司（Sonangol EP）在其首都罗安达湾投资建设的一座油码头，是安哥拉共和国第一座专业成品油码头。该码头是中国在境外第一个离岸式桩基码头工程，是国内首批荣获国家优质工程奖殊荣的海外项目之一。</p>'
    },
    {
        id: 63055,
        hash_id: 'business-port-overseas-3',
        category_id: 53,
        title: '安哥拉罗安达SONILS重力式码头二次延长段工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-55.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>安哥拉罗安达SONILS重力式码头二次延长段工程为公司海外港口及航运设施工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖。</p>'
    },
    {
        id: 63056,
        hash_id: 'business-port-overseas-4',
        category_id: 53,
        title: '喀麦隆克里比深水港一期工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-56.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>喀麦隆克里比深水港一期工程是喀麦隆政府与中国政府加强全面合作的标志性项目，三公司以匠心智造摘取了“国家优质工程奖”、“全国工人先锋号”等荣誉。</p>'
    },
    {
        id: 63057,
        hash_id: 'business-port-overseas-5',
        category_id: 53,
        title: '科特迪瓦阿比让港口扩建工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-57.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>科特迪瓦阿比让港口扩建工程为公司海外港口及航运设施工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖、鲁班奖。</p>'
    },
    {
        id: 63058,
        hash_id: 'business-port-overseas-6',
        category_id: 53,
        title: '加纳特码新集装箱码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-58.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>加纳特码新集装箱码头工程为公司海外港口及航运设施工程板块工程。</p><p><strong>获得奖项：</strong>国家优质工程奖。</p>'
    },
    {
        id: 63059,
        hash_id: 'business-port-overseas-7',
        category_id: 53,
        title: '尼日利亚莱基深水港工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-59.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>尼日利亚莱基深水港工程是尼日利亚首个现代化深水港，也是西非地区最大的港口之一。</p>'
    },
    {
        id: 63060,
        hash_id: 'business-port-overseas-8',
        category_id: 53,
        title: '纳米比亚油码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-60.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>纳米比亚油码头工程为公司海外港口及航运设施工程板块工程。</p>'
    },
    {
        id: 63061,
        hash_id: 'business-port-overseas-9',
        category_id: 53,
        title: '贝宁科托努港5号码头工程',
        source: '公司画册',
        cover_image: './4_business_files/bw-61.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>效果图。</p>'
    },
    {
        id: 63062,
        hash_id: 'business-wind-1',
        category_id: 52,
        title: '越南海上风电项目',
        source: '公司画册',
        cover_image: './4_business_files/bw-62.jpg',
        published_at: '2025-12-26',
        content: '<p class="sub-title">项目说明</p><p>2019年，三公司进驻东南亚市场，承建了越南海上疏浚和风电项目，其中越南海上风电项目是中国承建的首个境外海上风电项目。</p>'
    },
    // ===== 社会责任（来源：公司画册“社会责任”章节） =====
    {
        id: 64011,
        hash_id: 'brand-activity-1',
        author: '姚沅君',
        category_id: 82,
        title: '探秘家乡渔港，点亮科学梦想 | 茂名第二分公司开展“万名工程师进课堂”活动',
        source: '微信公众号“中交四航三”',
        cover_image: './8_brand_files/act-02.jpg',
        published_at: '2026-11-02',
        content: '<p>近日，茂名第二分公司走进博贺镇博贺小学，开展“万名工程师进课堂——探秘博贺渔港，点亮科学梦想”主题科普活动。</p><p>活动现场，工程师们以博贺渔港为载体，从同学们熟悉的开渔节切入，结合四航局在茂名的建设历程，通过建设动画、结构示意图和趣味问答，深入浅出地讲解码头用途、高桩码头结构及疏浚原理，把专业的港口工程知识转化为贴近生活的课堂内容。同学们踊跃举手、积极交流，用“筷子”“扁担”比喻桩基和横梁，分享对码头结构的理解，并进一步认识到疏浚不能一味求深，还需考虑安全与环境保护。课堂还设置“我心中的博贺渔港”绘画环节，在志愿者的陪伴与指导下，同学们拿起彩色铅笔，将课堂所学与家乡印象融入画面，在动手创作中感受工程建设之美。</p><img src="./8_brand_files/act-03.jpg" alt="活动现场"><img src="./8_brand_files/act-04.jpg" alt="活动现场"><p>本次活动是公司发挥工程专业优势、履行央企社会责任的一次生动实践。茂名第二分公司将家门口的渔港建设转化为校园科普资源，让同学们在认识家乡中探索科学，在理解工程中感受建设者的智慧与付出。未来，公司将不断拓展校企协同育人模式，践行央企使命责任，为造就新时代基建生力军添砖加瓦。</p><p style="color:#666;">来源 | 茂名第二分公司　作者 | 姚沅君　值班编辑 | 岑宇雯　一审一校 | 吴丽虹　二审二校 | 陈德杰　三审三校 | 吕传龙</p><p>原文链接：<a href="https://mp.weixin.qq.com/s/tTWvKViktQ1XqzfzaW-cEg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/tTWvKViktQ1XqzfzaW-cEg</a></p>'
    },

    {
        id: 6104,
        hash_id: 'brand-activity-2',
        category_id: 82,
        title: '探秘海岸绿色卫士！公司“万名工程师进课堂”活动走进广东湛江经开区暑期爱心托管班',
        source: '本站',
        cover_image: './1_home_files/1-2.png',
        published_at: '2026-08-24',
        content: '<p>近日，公司组织青年工程师走进2026年湛江经开区暑期爱心托管班，开展“万名工程师进课堂”科普志愿服务活动，为孩子们带来一堂红树林生态科普课。</p><p>活动中，青年工程师化身科普讲师，以湛江本地滨海生态建设为切入点，用通俗易懂的语言系统讲解了红树林生态保护、滨海生态修复、智慧环保科技等知识，生动阐释了“海上森林”不可替代的生态价值，并讲述海岸生态守护背后的建设故事，让孩子们直观感受生态基建的独特魅力与建设者的责任担当。</p>'
    }
];
