/**
 * 四航三官网 - 本地静态数据（模拟后端 API 返回，驱动轮播/列表/tab 等交互）
 * 结构模拟原后端 /api/public/shj/categories 与 /api/public/shj/articles 的返回格式。
 *
 * 说明（离线本地版）：
 *  1. 顶级栏目 page_url 统一为本地相对路径（1_首页.html ~ 7_人力资源.html）。
 *  2. 各二级子栏目均带 page_url = 其容器页 + ?cat=<slug>，供侧边栏/卡片正确跳转。
 *  3. 栏目 id 已消除重复：媒体矩阵=480，党的建设子栏目=551~554。
 */
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
        page_url: './1_首页.html'
    },
    {
        id: 2,
        name: '关于四航三',
        slug: 'about',
        parent_id: 0,
        is_nav: true,
        sort_order: 2,
        nav_type: 'PAGE',
        page_url: './2_关于四航三.html'
    },
    {
        id: 3,
        name: '新闻中心',
        slug: 'news',
        parent_id: 0,
        is_nav: true,
        sort_order: 3,
        nav_type: 'PAGE',
        page_url: './3_新闻中心.html'
    },
    {
        id: 4,
        name: '公司业务',
        slug: 'business',
        parent_id: 0,
        is_nav: true,
        sort_order: 4,
        nav_type: 'PAGE',
        page_url: './4_公司业务.html',
        images: './4_公司业务_files/3_1789883289902347209.jpg'
    },
    {
        id: 5,
        name: '党的建设',
        slug: 'party',
        parent_id: 0,
        is_nav: true,
        sort_order: 5,
        nav_type: 'PAGE',
        page_url: './5_党的建设.html'
    },
    {
        id: 6,
        name: '科技创新',
        slug: 'tech',
        parent_id: 0,
        is_nav: true,
        sort_order: 6,
        nav_type: 'PAGE',
        page_url: './6_科技创新.html'
    },
    {
        id: 7,
        name: '人力资源',
        slug: 'hr',
        parent_id: 0,
        is_nav: true,
        sort_order: 7,
        nav_type: 'PAGE',
        page_url: './7_人力资源.html'
    },

    // ===== 关于四航三（id=2） =====
    {
        id: 21,
        name: '公司概况',
        slug: 'about-overview',
        parent_id: 2,
        is_nav: true,
        sort_order: 1,
        page_url: './2_关于四航三.html?cat=about-overview',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '公司基本情况、资质实力与企业发展概况',
        content: '<p>中交四航局第三工程有限公司是世界500强企业——中国交通建设股份有限公司旗下中交第四航务工程局有限公司的全资子公司，成立于1951年，是一家以港口及航运设施工程、公路工程、铁路工程、市政工程、隧道和桥梁工程等为主营业务的大型综合性施工企业。</p><p>公司拥有港口与航道工程施工总承包特级资质，以及公路工程、市政公用工程、建筑工程等多个施工总承包壹级资质，具备大型深水码头、跨海桥梁、海底隧道、大型水利枢纽等工程的全过程建造能力。</p><p>历经七十余载砥砺奋进，公司已发展成为业务遍及海内外、年施工生产能力超百亿元的大型骨干企业，先后荣获国家优质工程金奖、鲁班奖、詹天佑奖等百余项省部级以上荣誉。</p>'
    },
    {
        id: 22,
        name: '历史传承',
        slug: 'about-history',
        parent_id: 2,
        is_nav: true,
        sort_order: 2,
        page_url: './2_关于四航三.html?cat=about-history',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '七十余年奋斗历程与企业文化传承',
        content: '<p>公司前身可追溯至新中国成立初期组建的交通建设队伍，1951年在广东正式组建，是新中国最早从事水运工程建设的骨干力量之一。</p><p>从珠江口到伶仃洋，从粤西沿海到海外市场，一代代三航人艰苦奋斗、开拓进取，先后参与建设了黄埔港、湛江港、深圳蛇口港等一大批国家重点项目，为国家水运事业发展作出了重要贡献。</p><p>进入新时代，公司传承红色基因，赓续奋斗精神，在粤港澳大湾区建设、交通强国建设等国家战略中勇当先锋，续写高质量发展新篇章。</p>'
    },
    {
        id: 23,
        name: '组织架构',
        slug: 'about-structure',
        parent_id: 2,
        is_nav: true,
        sort_order: 3,
        page_url: './2_关于四航三.html?cat=about-structure',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '公司治理结构与组织管理体系',
        content: '<p>公司实行“总部—事业部—项目部”三级管控体系，设有市场开发、工程管理、安全质量、科技信息、人力资源、财务管理、党群工作等职能管理部门，并下设若干工程分公司、区域公司和专业公司。</p><p>公司持续优化组织架构，推进管理扁平化、专业化，构建与高质量发展要求相适应的现代企业治理体系，全面提升总部管控能力和基层执行能力。</p>'
    },
    {
        id: 24,
        name: '全球分布',
        slug: 'about-online',
        parent_id: 2,
        is_nav: true,
        sort_order: 4,
        page_url: './2_关于四航三.html?cat=about-online',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '立足华南、辐射全国、走向世界的市场版图',
        content: '<p>公司立足华南、辐射全国、走向世界，经营版图覆盖粤港澳大湾区、长三角、环渤海以及东南亚、非洲、中东等多个国家和地区。</p><p>在国内，公司在广东、广西、海南、福建、江西等地设有区域经营机构；在海外，公司在“一带一路”沿线国家承建了多个港口、码头、桥梁等重点工程。</p>'
    },
    {
        id: 25,
        name: '经营布局',
        slug: 'about-layout',
        parent_id: 2,
        is_nav: true,
        sort_order: 5,
        page_url: './2_关于四航三.html?cat=about-layout',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '多元化业务格局与国内外市场布局',
        content: '<p>公司坚持“水运主业为基、相关多元发展”的经营方针，形成了港口及航运设施、公路、铁路、市政、隧道桥梁、房建、水利、生态环保等多元化业务格局。</p><p>公司深入实施“走出去”战略，构建国内国际双循环相互促进的市场布局，加快培育海外业务增长极，不断提升企业核心竞争力和抗风险能力。</p>'
    },
    {
        id: 26,
        name: '企业荣誉',
        slug: 'about-honor',
        parent_id: 2,
        is_nav: true,
        sort_order: 6,
        page_url: './2_关于四航三.html?cat=about-honor',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '国家级、省部级荣誉与行业认可',
        content: '<p>公司先后荣获国家优质工程金奖、中国建设工程鲁班奖、中国土木工程詹天佑奖等国家级奖项数十项，省部级优质工程奖百余项。</p><p>公司连续多年获评全国“守合同重信用”企业、全国优秀施工企业、广东省优秀企业等荣誉称号，企业品牌影响力和社会美誉度持续提升。</p>'
    },
    {
        id: 27,
        name: '品牌理念',
        slug: 'about-band',
        parent_id: 2,
        is_nav: true,
        sort_order: 7,
        page_url: './2_关于四航三.html?cat=about-band',
        images: './2_关于四航三_files/cat20181106095223_1789611037336865189.jpg',
        description: '企业精神、核心价值观与经营理念',
        content: '<p>企业精神：交融天下，建者无疆。</p><p>核心价值观：公平、包容、务实、创新。</p><p>公司始终秉持“让世界更畅通、让城市更宜居、让生活更美好”的企业愿景，坚持“品质立业、诚信履约、安全至上、绿色低碳”的经营理念，致力于建设让业主放心、让社会满意的精品工程。</p>'
    },

    // ===== 新闻中心（id=3） =====
    {
        id: 31,
        name: '公司要闻',
        slug: 'news-yaowen',
        parent_id: 3,
        is_nav: true,
        sort_order: 1,
        page_url: './3_新闻中心.html?cat=news-yaowen'
    },
    {
        id: 33,
        name: '媒体聚焦',
        slug: 'news-media',
        parent_id: 3,
        is_nav: true,
        sort_order: 2,
        page_url: './3_新闻中心.html?cat=news-media'
    },

    // ===== 公司业务（id=4） =====
    {
        id: 41,
        name: '港口及航运设施工程',
        slug: 'business-port',
        parent_id: 4,
        is_nav: true,
        sort_order: 1,
        page_url: './4_公司业务.html?cat=business-port',
        images: './4_公司业务_files/upload_1789886368304789615.jpg',
        description: '大型深水码头、航道整治、疏浚吹填、岛隧工程等港口及航运设施建设'
    },
    {
        id: 42,
        name: '公路工程',
        slug: 'business-road',
        parent_id: 4,
        is_nav: true,
        sort_order: 2,
        page_url: './4_公司业务.html?cat=business-road',
        images: './4_公司业务_files/1-1.jpg',
        description: '高速公路、国省道、市政道路等公路工程建设'
    },
    {
        id: 43,
        name: '铁路工程',
        slug: 'business-railway',
        parent_id: 4,
        is_nav: true,
        sort_order: 3,
        page_url: './4_公司业务.html?cat=business-railway',
        images: './4_公司业务_files/1-2.jpg',
        description: '高速铁路、普速铁路及站场工程建设'
    },
    {
        id: 44,
        name: '城市轨道交通工程',
        slug: 'business-rail',
        parent_id: 4,
        is_nav: true,
        sort_order: 4,
        page_url: './4_公司业务.html?cat=business-rail',
        images: './4_公司业务_files/1-3.jpg',
        description: '城市地铁、轻轨等轨道交通工程建设'
    },
    {
        id: 45,
        name: '市政工程',
        slug: 'business-admin',
        parent_id: 4,
        is_nav: true,
        sort_order: 5,
        page_url: './4_公司业务.html?cat=business-admin',
        images: './4_公司业务_files/1-4.jpg',
        description: '城市道路、桥梁、管网等市政基础设施建设'
    },
    {
        id: 46,
        name: '隧道和桥梁工程',
        slug: 'business-cat-bridge',
        parent_id: 4,
        is_nav: true,
        sort_order: 6,
        page_url: './4_公司业务.html?cat=business-cat-bridge',
        images: './4_公司业务_files/1-5.jpg',
        description: '跨海大桥、长大隧道、沉管隧道等桥隧工程建设'
    },
    {
        id: 47,
        name: '水利、船闸、船坞工程',
        slug: 'business-cat-ship',
        parent_id: 4,
        is_nav: true,
        sort_order: 7,
        page_url: './4_公司业务.html?cat=business-cat-ship',
        images: './4_公司业务_files/1-6.jpg',
        description: '水利枢纽、船闸、船坞等水工建筑物建设'
    },
    {
        id: 48,
        name: '房屋建筑工程',
        slug: 'business-cat-house',
        parent_id: 4,
        is_nav: true,
        sort_order: 8,
        page_url: './4_公司业务.html?cat=business-cat-house',
        images: './4_公司业务_files/1-7.jpg',
        description: '工业与民用建筑、城市更新等房建工程'
    },
    {
        id: 49,
        name: '生态保护工程',
        slug: 'business-cat-ecology',
        parent_id: 4,
        is_nav: true,
        sort_order: 9,
        page_url: './4_公司业务.html?cat=business-cat-ecology',
        images: './4_公司业务_files/1-7.jpg',
        description: '生态修复、环境治理等绿色工程'
    },
    {
        id: 50,
        name: '河湖治理工程',
        slug: 'business-cat-river',
        parent_id: 4,
        is_nav: true,
        sort_order: 10,
        page_url: './4_公司业务.html?cat=business-cat-river',
        images: './4_公司业务_files/1-8.jpg',
        description: '河湖整治、水环境综合治理工程'
    },
    {
        id: 51,
        name: '综合管廊工程',
        slug: 'business-cat-utility',
        parent_id: 4,
        is_nav: true,
        sort_order: 11,
        page_url: './4_公司业务.html?cat=business-cat-utility',
        images: './4_公司业务_files/1-9.jpg',
        description: '城市地下综合管廊等基础设施工程'
    },
    {
        id: 52,
        name: '海外风能发电工程',
        slug: 'business-cat-wind',
        parent_id: 4,
        is_nav: true,
        sort_order: 12,
        page_url: './4_公司业务.html?cat=business-cat-wind',
        images: './4_公司业务_files/1-1.jpg',
        description: '海上风电等新能源工程'
    },
    {
        id: 53,
        name: '海外港口及航运设施工程',
        slug: 'business-cat-port_overseas',
        parent_id: 4,
        is_nav: true,
        sort_order: 13,
        page_url: './4_公司业务.html?cat=business-cat-port_overseas',
        images: './4_公司业务_files/1-2.jpg',
        description: '海外港口、码头等国际工程'
    },

    // ===== 工程承包业务三级子栏目（parent_id=41） =====
    {
        id: 411,
        name: '疏浚工程',
        slug: 'business-port-cat-mtwok9jo',
        parent_id: 41,
        is_nav: false,
        sort_order: 1,
        page_url: './4_公司业务.html?cat=business-port'
    },
    {
        id: 412,
        name: '道路工程',
        slug: 'business-port-cat-mtwnpg7p',
        parent_id: 41,
        is_nav: false,
        sort_order: 2,
        page_url: './4_公司业务.html?cat=business-port'
    },
    {
        id: 413,
        name: '岛隧工程',
        slug: 'business-port-cat-mtwnq4c6',
        parent_id: 41,
        is_nav: false,
        sort_order: 3,
        page_url: './4_公司业务.html?cat=business-port'
    },
    {
        id: 414,
        name: '港口码头',
        slug: 'business-port-cat-mtwnqjey',
        parent_id: 41,
        is_nav: false,
        sort_order: 4,
        page_url: './4_公司业务.html?cat=business-port'
    },

    // ===== 党的建设（id=5） =====
    {
        id: 551,
        name: '综合动态',
        slug: 'party-news',
        parent_id: 5,
        is_nav: true,
        sort_order: 1,
        page_url: './5_党的建设.html?cat=party-news'
    },
    {
        id: 552,
        name: '党建品牌',
        slug: 'party-brand',
        parent_id: 5,
        is_nav: true,
        sort_order: 2,
        page_url: './5_党的建设.html?cat=party-brand'
    },
    {
        id: 553,
        name: '工团工作',
        slug: 'party-union',
        parent_id: 5,
        is_nav: true,
        sort_order: 3,
        page_url: './5_党的建设.html?cat=party-union'
    },
    {
        id: 554,
        name: '信访举报',
        slug: 'party-report',
        parent_id: 5,
        is_nav: true,
        sort_order: 4,
        page_url: './5_党的建设.html?cat=party-report'
    },

    // ===== 科技创新（id=6） =====
    {
        id: 61,
        name: '科技动态',
        slug: 'tech-dynamic',
        parent_id: 6,
        is_nav: true,
        sort_order: 1,
        page_url: './6_科技创新.html?cat=tech-dynamic',
        images: './6_科技创新_files/4_1789883330222183060.jpg',
        description: '科技创新动态与研发进展',
        content: '<p>公司深入学习贯彻习近平总书记关于科技创新的重要论述，坚持创新驱动发展战略，围绕水运工程、公路桥梁、市政工程、水环境治理等核心业务，持续加大科技研发投入。</p><p>公司依托国家高新技术企业、省级企业技术中心、博士后创新实践基地等平台，聚焦疏浚吹填、跨海大桥、深水港口码头、隧道与地下工程等关键技术方向，组织开展重大科技攻关。</p><p>近年来，公司在智能建造、绿色施工、BIM技术应用、数字化转型等方面取得新突破，一批科研成果在生产一线落地转化，有力支撑了重点工程建设。</p>'
    },
    {
        id: 62,
        name: '科技成果',
        slug: 'tech-results',
        parent_id: 6,
        is_nav: true,
        sort_order: 2,
        page_url: './6_科技创新.html?cat=tech-results',
        images: './6_科技创新_files/4_1789883330222183060.jpg',
        description: '专利、工法、标准与科技奖项',
        content: '<p>公司累计获得国家专利数百项，主编或参编多项行业及地方标准，形成了一大批国家级、省部级工法。</p><p>公司多项科技成果达到国际先进、国内领先水平，先后获得中国水运建设行业协会科学技术奖、中国公路学会科学技术奖等多项科技奖励。</p><p>公司积极推动成果转化，自主研发的大型沉管隧道施工成套技术、深水软基处理技术、环保疏浚技术等在深中通道、港珠澳大桥等重大工程中得到成功应用。</p>'
    },

    // ===== 人力资源（id=7） =====
    {
        id: 71,
        name: '企业专家',
        slug: 'hr-expert',
        parent_id: 7,
        is_nav: true,
        sort_order: 1,
        page_url: './7_人力资源.html?cat=hr-expert',
        description: '深入实施人才强企战略，着力打造六支人才队伍'
    },
    {
        id: 72,
        name: '招聘信息',
        slug: 'hr-info',
        parent_id: 7,
        is_nav: true,
        sort_order: 2,
        page_url: './7_人力资源.html?cat=hr-info',
        description: '健全员工成长成才机制，畅通职业发展通道',
        images: './7_人力资源_files/cat20181106095223_1782383323504721056.jpg',
        content: '<p>公司坚持市场化选人用人导向，面向社会公开招聘各类优秀人才，提供富有竞争力的薪酬待遇和广阔的职业发展平台。</p><p>招聘岗位涵盖工程技术、经营管理、科技研发、财务管理、海外业务等多个序列，欢迎有志之士加入中交四航局第三工程有限公司，共创美好未来。</p>'
    },
    {
        id: 73,
        name: '人才队伍结构',
        slug: 'hr-team',
        parent_id: 7,
        is_nav: true,
        sort_order: 3,
        page_url: './7_人力资源.html?cat=hr-team',
        description: '优化人才队伍结构，激发人才创新活力',
        content: '<p>公司持续优化人才队伍结构，构建经营管理、专业技术、技能操作等各类人才协调发展的队伍格局。</p><p>深入实施人才强企战略，着力打造领导人员、科技人才、经营管理人才、海外人才、党群人才、技能人才六支队伍，为企业高质量发展提供坚强人才保障。</p>'
    },
    {
        id: 74,
        name: '校招职位管理',
        slug: 'hr-post',
        parent_id: 7,
        is_nav: true,
        sort_order: 4,
        page_url: './7_人力资源.html?cat=hr-post',
        description: '面向高校毕业生的校园招聘职位',
        content: '<p>公司高度重视高校毕业生引进和培养，每年面向全国重点高校开展校园招聘。</p><p>校招岗位涵盖工程技术、科技研发、财务管理、企业管理等方向，为应届毕业生提供完善的培养体系和职业发展通道。</p>'
    } 
];

window.SITE_ARTICLES = [
    // ===== 图片新闻（首页左侧图片轮播，is_image_news=true） =====
    {
        id: 101,
        hash_id: 'img-news-1',
        category_id: 31,
        title: '深度解读企业战略与发展聚焦重点领域',
        summary: '公司深入学习贯彻上级决策部署，聚焦主责主业，持续推动企业高质量发展。',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-12',
        is_image_news: true
    },
    {
        id: 102,
        hash_id: 'img-news-2',
        category_id: 31,
        title: '四航局重大工程项目节点顺利推进',
        summary: '重点项目现场掀起大干热潮，各项建设任务按计划稳步推进。',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-10',
        is_image_news: true
    },
    {
        id: 103,
        hash_id: 'img-news-3',
        category_id: 31,
        title: '公司科技创新成果转化成效显著',
        summary: '多项自主研发技术在生产一线落地应用，赋能项目提质增效。',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-08',
        is_image_news: true
    },

    // ===== 公司要闻（category_id=31） =====
    {
        id: 111,
        hash_id: 'news-yaowen-1',
        category_id: 31,
        title: '四航局党委召开2026年宣传思想品牌文化工作、统战工作会议',
        summary: '会议聚焦重点领域，深度解读企业战略与发展，部署年度宣传思想与品牌文化重点任务。',
        author: '办公室',
        source: '本站',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-07-07',
        is_top: true
    },
    {
        id: 112,
        hash_id: 'news-yaowen-2',
        category_id: 31,
        title: '深度解读企业战略与发展聚焦重点领域',
        summary: '围绕企业“十四五”发展战略，系统梳理重点领域攻坚方向与实施路径。',
        author: '办公室',
        source: '本站',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-07-06'
    },
    {
        id: 113,
        hash_id: 'news-yaowen-3',
        category_id: 31,
        title: '公司召开2026年安全生产工作会议',
        summary: '强化红线意识，压实安全责任，全面部署年度安全生产重点工作。',
        author: '安全部',
        source: '本站',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-30'
    },
    {
        id: 114,
        hash_id: 'news-yaowen-4',
        category_id: 31,
        title: '公司多个项目获评省部级优质工程奖',
        summary: '一批重点工程凭借过硬质量与技术创新，荣获多项省部级荣誉。',
        author: '质量部',
        source: '本站',
        published_at: '2026-06-25'
    },
    {
        id: 115,
        hash_id: 'news-yaowen-5',
        category_id: 31,
        title: '公司召开2026年上半年经济运行分析会',
        summary: '总结上半年生产经营情况，研究部署下半年重点任务。',
        author: '办公室',
        source: '本站',
        published_at: '2026-06-20'
    },
    {
        id: 116,
        hash_id: 'news-yaowen-6',
        category_id: 31,
        title: '四航局荣获多项国家级行业协会表彰',
        summary: '凭借卓越的工程品质与品牌影响力，公司获得行业高度认可。',
        author: '办公室',
        source: '本站',
        published_at: '2026-06-15'
    },

    // ===== 媒体聚焦（category_id=33） =====
    {
        id: 131,
        hash_id: 'news-media-1',
        category_id: 33,
        title: '主流媒体聚焦公司重点工程建设成效',
        summary: '多家中央及省市媒体集中报道公司重大工程建设成果。',
        author: '党群部',
        source: '媒体',
        published_at: '2026-07-04'
    },
    {
        id: 132,
        hash_id: 'news-media-2',
        category_id: 33,
        title: '公司绿色发展实践获行业媒体关注',
        summary: '绿色施工与生态环保举措得到行业广泛赞誉。',
        author: '党群部',
        source: '媒体',
        published_at: '2026-06-27'
    },
    {
        id: 133,
        hash_id: 'news-media-3',
        category_id: 33,
        title: '媒体走进项目一线感受匠心建造',
        summary: '记者实地探访重点工程，记录一线建设者奋斗故事。',
        author: '党群部',
        source: '媒体',
        published_at: '2026-06-18'
    },

    // ===== 工程承包业务三级子栏目文章（含 cover_image，用于页面4卡片轮播） =====
    {
        id: 4111,
        hash_id: 'business-shujun-1',
        category_id: 411,
        title: '大型疏浚吹填工程',
        cover_image: './4_公司业务_files/1-1.jpg',
        published_at: '2026-06-15'
    },
    {
        id: 4112,
        hash_id: 'business-shujun-2',
        category_id: 411,
        title: '航道整治与维护疏浚',
        cover_image: './4_公司业务_files/1-2.jpg',
        published_at: '2026-06-10'
    },
    {
        id: 4121,
        hash_id: 'business-daolu-1',
        category_id: 412,
        title: '高速公路改扩建工程',
        cover_image: './4_公司业务_files/1-3.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 4122,
        hash_id: 'business-daolu-2',
        category_id: 412,
        title: '市政道路桥梁工程',
        cover_image: './4_公司业务_files/1-4.jpg',
        published_at: '2026-06-05'
    },
    {
        id: 4131,
        hash_id: 'business-daosui-1',
        category_id: 413,
        title: '沉管隧道安装工程',
        cover_image: './4_公司业务_files/1-5.jpg',
        published_at: '2026-06-14'
    },
    {
        id: 4132,
        hash_id: 'business-daosui-2',
        category_id: 413,
        title: '海底隧道工程',
        cover_image: './4_公司业务_files/1-6.jpg',
        published_at: '2026-06-08'
    },
    {
        id: 4141,
        hash_id: 'business-gangkou-1',
        category_id: 414,
        title: '大型深水码头工程',
        cover_image: './4_公司业务_files/1-7.jpg',
        published_at: '2026-06-13'
    },
    {
        id: 4142,
        hash_id: 'business-gangkou-2',
        category_id: 414,
        title: '集装箱码头改扩建',
        cover_image: './4_公司业务_files/1-8.jpg',
        published_at: '2026-06-06'
    },

    // ===== 公司业务二级子栏目文章（category_id=42~53，用于页面4图文列表） =====
    {
        id: 421,
        hash_id: 'business-road-1',
        category_id: 42,
        title: '高速公路建设项目',
        cover_image: './4_公司业务_files/1-1.jpg',
        published_at: '2026-06-15'
    },
    {
        id: 422,
        hash_id: 'business-road-2',
        category_id: 42,
        title: '国省道干线公路工程',
        cover_image: './4_公司业务_files/1-2.jpg',
        published_at: '2026-06-06'
    },
    {
        id: 431,
        hash_id: 'business-railway-1',
        category_id: 43,
        title: '高速铁路站前工程',
        cover_image: './4_公司业务_files/1-3.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 432,
        hash_id: 'business-railway-2',
        category_id: 43,
        title: '铁路站场改扩建工程',
        cover_image: '.4_公司业务_files/1-4.jpg',
        published_at: '2026-06-04'
    },
    {
        id: 441,
        hash_id: 'business-rail-1',
        category_id: 44,
        title: '城市轨道交通线路工程',
        cover_image: './4_公司业务_files/1-5.jpg',
        published_at: '2026-06-13'
    },
    {
        id: 442,
        hash_id: 'business-rail-2',
        category_id: 44,
        title: '地铁车站及区间工程',
        cover_image: './4_公司业务_files/1-6.jpg',
        published_at: '2026-06-03'
    },
    {
        id: 451,
        hash_id: 'business-admin-1',
        category_id: 45,
        title: '城市主干道改造工程',
        cover_image: './4_公司业务_files/1-7.jpg',
        published_at: '2026-06-11'
    },
    {
        id: 452,
        hash_id: 'business-admin-2',
        category_id: 45,
        title: '市政管网综合工程',
        cover_image: './4_公司业务_files/1-8.jpg',
        published_at: '2026-06-02'
    },
    {
        id: 461,
        hash_id: 'business-bridge-1',
        category_id: 46,
        title: '跨海特大桥工程',
        cover_image: './4_公司业务_files/1-9.jpg',
        published_at: '2026-06-14'
    },
    {
        id: 462,
        hash_id: 'business-bridge-2',
        category_id: 46,
        title: '长大隧道工程',
        cover_image: './4_公司业务_files/1-1.jpg',
        published_at: '2026-06-05'
    },
    {
        id: 471,
        hash_id: 'business-ship-1',
        category_id: 47,
        title: '大型船闸工程',
        cover_image: './4_公司业务_files/1-2.jpg',
        published_at: '2026-06-13'
    },
    {
        id: 472,
        hash_id: 'business-ship-2',
        category_id: 47,
        title: '水利枢纽工程',
        cover_image: './4_公司业务_files/1-3.jpg',
        published_at: '2026-06-04'
    },
    {
        id: 481,
        hash_id: 'business-house-1',
        category_id: 48,
        title: '大型公共建筑工程',
        cover_image: './4_公司业务_files/1-4.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 482,
        hash_id: 'business-house-2',
        category_id: 48,
        title: '城市更新项目',
        cover_image: './4_公司业务_files/1-5.jpg',
        published_at: '2026-06-03'
    },
    {
        id: 491,
        hash_id: 'business-ecology-1',
        category_id: 49,
        title: '生态修复工程',
        cover_image: './4_公司业务_files/1-6.jpg',
        published_at: '2026-06-11'
    },
    {
        id: 492,
        hash_id: 'business-ecology-2',
        category_id: 49,
        title: '环境治理工程',
        cover_image: './4_公司业务_files/1-7.jpg',
        published_at: '2026-06-02'
    },
    {
        id: 501,
        hash_id: 'business-river-1',
        category_id: 50,
        title: '河湖综合整治工程',
        cover_image: './4_公司业务_files/1-8.jpg',
        published_at: '2026-06-13'
    },
    {
        id: 502,
        hash_id: 'business-river-2',
        category_id: 50,
        title: '水环境治理工程',
        cover_image: './4_公司业务_files/1-9.jpg',
        published_at: '2026-06-04'
    },
    {
        id: 511,
        hash_id: 'business-utility-1',
        category_id: 51,
        title: '城市综合管廊工程',
        cover_image: './4_公司业务_files/1-1.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 512,
        hash_id: 'business-utility-2',
        category_id: 51,
        title: '地下综合管廊配套工程',
        cover_image: './4_公司业务_files/1-2.jpg',
        published_at: '2026-06-03'
    },
    {
        id: 521,
        hash_id: 'business-wind-1',
        category_id: 52,
        title: '海上风电场工程',
        cover_image: './4_公司业务_files/1-3.jpg',
        published_at: '2026-06-11'
    },
    {
        id: 522,
        hash_id: 'business-wind-2',
        category_id: 52,
        title: '风电场配套基础工程',
        cover_image: './4_公司业务_files/1-4.jpg',
        published_at: '2026-06-02'
    },
    {
        id: 531,
        hash_id: 'business-port-overseas-1',
        category_id: 53,
        title: '海外港口建设项目',
        cover_image: './4_公司业务_files/1-5.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 532,
        hash_id: 'business-port-overseas-2',
        category_id: 53,
        title: '海外码头改扩建工程',
        cover_image: './4_公司业务_files/1-6.jpg',
        published_at: '2026-06-03'
    },

    // ===== 党的建设 - 综合动态（category_id=551） =====
    {
        id: 5511,
        hash_id: 'party-news-1',
        category_id: 551,
        title: '四航局党委召开2026年第一次书记例会',
        summary: '总结上半年党建工作，部署下半年重点任务，推动全面从严治党向纵深发展。',
        author: '党委工作部',
        source: '本站',
        cover_image: './5_党的建设_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-02',
        is_top: true
    },
    {
        id: 5512,
        hash_id: 'party-news-2',
        category_id: 551,
        title: '聚焦重点领域，深度解读企业战略与发展',
        summary: '党建引领聚合力，把党的政治优势转化为企业发展优势。',
        author: '党委工作部',
        source: '本站',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-26'
    },
    {
        id: 5513,
        hash_id: 'party-news-3',
        category_id: 551,
        title: '公司党委理论学习中心组开展集体学习',
        summary: '深入学习贯彻党的二十届四中全会精神，凝聚思想共识。',
        author: '党委工作部',
        source: '本站',
        cover_image: './1_首页_files/1-1.jpg',
        published_at: '2026-06-19'
    },
    {
        id: 5514,
        hash_id: 'party-news-4',
        category_id: 551,
        title: '基层党组织开展主题党日活动',
        summary: '传承红色基因，砥砺初心使命，激发干事创业热情。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-06-12'
    },
    {
        id: 5515,
        hash_id: 'party-news-5',
        category_id: 551,
        title: '公司召开2026年党风廉政建设工作会议',
        summary: '持之以恒正风肃纪，营造风清气正的良好政治生态。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-06-05'
    },

    // ===== 党的建设 - 党建品牌（category_id=552） =====
    {
        id: 5521,
        hash_id: 'party-brand-1',
        category_id: 552,
        title: '擦亮“中交蓝·党旗红”党建品牌',
        summary: '推动党建工作与生产经营深度融合，以高质量党建引领高质量发展。',
        author: '党委工作部',
        source: '本站',
        cover_image: './5_党的建设_files/cat20181106095223_1782117288265921549.jpg',
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

    // ===== 党的建设 - 工团工作（category_id=553） =====
    {
        id: 5531,
        hash_id: 'party-union-1',
        category_id: 553,
        title: '公司召开2026年群团工作会议',
        summary: '凝聚群团组织合力，服务企业中心工作。',
        author: '工会',
        source: '本站',
        published_at: '2026-05-22'
    },
    {
        id: 5532,
        hash_id: 'party-union-2',
        category_id: 553,
        title: '青年突击队奋战项目一线当先锋',
        summary: '党旗所指就是团旗所向，青年突击队在急难险重任务中冲锋在前。',
        author: '团委',
        source: '本站',
        published_at: '2026-05-10'
    },

    // ===== 党的建设 - 信访举报（category_id=554） =====
    {
        id: 5541,
        hash_id: 'party-report-1',
        category_id: 554,
        title: '信访举报渠道公告',
        summary: '畅通监督举报渠道，欢迎广大职工群众和社会各界依法依规反映问题。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-06-18'
    },
    {
        id: 5542,
        hash_id: 'party-report-2',
        category_id: 554,
        title: '公司公布监督举报方式',
        summary: '进一步健全监督机制，主动接受群众监督。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-06-01'
    },

    // ===== 人力资源 - 主要任务（category_id=121，6支人才队伍，含 content） =====
    {
        id: 1211,
        hash_id: 'hr-expert-1',
        category_id: 121,
        title: '头雁工程',
        summary: '领导人员队伍',
        content: '<h3><strong>党管干部原则与市场化选人用人相结合</strong></h3><p><strong>头雁领航 群雁齐飞</strong></p><p>坚持党管干部原则与市场化选人用人相结合，打造政治过硬、具备领导现代化建设能力的领导人员队伍。深入实施“头雁工程”，建立完善领导干部选拔任用、考核评价、监督管理全链条机制。</p><p>加强领导人员政治能力训练和实践锻炼，推动领导干部在改革发展主战场、生产经营第一线、服务群众最前沿经受历练、增长才干。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1212,
        hash_id: 'hr-expert-2',
        category_id: 121,
        title: '鲲鹏工程',
        summary: '科技人才队伍',
        content: '<h3><strong>加快高水平科技自立自强</strong></h3><p><strong>鲲鹏展翅 志存高远</strong></p><p>聚焦国家重大战略和行业前沿技术，打造结构合理、素质优良的科技人才队伍。深入实施“鲲鹏工程”，完善科技人才引进培养、评价激励和使用机制。</p><p>加强科技创新平台建设，鼓励科技人才承担重大科研任务，在关键核心技术攻关中挑大梁、当主角。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1213,
        hash_id: 'hr-expert-3',
        category_id: 121,
        title: '鹰隼工程',
        summary: '经营管理人才队伍',
        content: '<h3><strong>培养市场化经营管理的行家里手</strong></h3><p><strong>鹰隼试翼 风尘翕张</strong></p><p>围绕企业改革发展需要，打造懂经营、善管理、会创新的经营管理人才队伍。深入实施“鹰隼工程”，加强经营管理人员市场意识、效益意识和风险意识培养。</p><p>健全经营管理人才职业发展通道，激发干事创业活力，为企业高质量发展提供坚强支撑。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1214,
        hash_id: 'hr-expert-4',
        category_id: 121,
        title: '海鸥工程',
        summary: '海外人才队伍',
        content: '<h3><strong>服务高水平对外开放</strong></h3><p><strong>海鸥展翅 逐浪远航</strong></p><p>围绕海外业务发展需要，打造具有国际视野、通晓国际规则的海外人才队伍。深入实施“海鸥工程”，加强海外人才国际化能力和跨文化沟通能力培养。</p><p>完善海外人才激励保障机制，让海外人才安心、安身、安业，为共建“一带一路”贡献力量。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1215,
        hash_id: 'hr-expert-5',
        category_id: 121,
        title: '鸿鹄工程',
        summary: '党群人才队伍',
        content: '<h3><strong>建设高素质党群工作队伍</strong></h3><p><strong>鸿鹄高飞 一举千里</strong></p><p>围绕新时代党的建设总要求，打造忠诚干净担当的党群人才队伍。深入实施“鸿鹄工程”，加强党群人才政治素质和业务能力建设。</p><p>推动党群人才在基层党建、宣传思想、纪检监督等岗位历练成长，为企业改革发展提供坚强组织保证。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1216,
        hash_id: 'hr-expert-6',
        category_id: 121,
        title: '雨燕工程',
        summary: '技能人才队伍',
        content: '<h3><strong>弘扬工匠精神 锻造大国工匠</strong></h3><p><strong>雨燕凌云 匠心筑梦</strong></p><p>围绕企业高质量发展需要，打造知识型、技能型、创新型技能人才队伍。深入实施“雨燕工程”，完善技能人才培养、使用、评价、激励机制。</p><p>广泛开展岗位练兵、技能比武，大力弘扬劳模精神、劳动精神、工匠精神，培育更多大国工匠。</p>',
        published_at: '2026-06-01'
    },

    // ===== 人力资源 - 员工发展（category_id=122） =====
    {
        id: 1221,
        hash_id: 'hr-info-1',
        category_id: 122,
        title: '员工发展通道',
        summary: '健全员工成长成才机制',
        published_at: '2026-06-01'
    }, 

    // ===== 公司要闻补充（category_id=31，补足条数触发列表分页） =====
    {
        id: 1161,
        hash_id: 'news-yaowen-7',
        category_id: 31,
        title: '公司开展安全生产月系列主题活动',
        summary: '强化全员安全意识，营造浓厚安全生产氛围。',
        author: '安全部',
        source: '本站',
        published_at: '2026-06-11'
    },
    {
        id: 1162,
        hash_id: 'news-yaowen-8',
        category_id: 31,
        title: '公司多个科技创新项目通过结题验收',
        summary: '一批重点科研项目高质量完成既定目标。',
        author: '科技部',
        source: '本站',
        published_at: '2026-06-06'
    },
    {
        id: 1163,
        hash_id: 'news-yaowen-9',
        category_id: 31,
        title: '公司青年员工在技能竞赛中荣获佳绩',
        summary: '以赛促学、以赛促练，展现青年员工风采。',
        author: '工会',
        source: '本站',
        published_at: '2026-05-30'
    },
    {
        id: 1164,
        hash_id: 'news-yaowen-10',
        category_id: 31,
        title: '公司深入推进绿色低碳发展',
        summary: '践行绿色发展理念，推动项目绿色施工。',
        author: '工程部',
        source: '本站',
        published_at: '2026-05-25'
    },
    {
        id: 1165,
        hash_id: 'news-yaowen-11',
        category_id: 31,
        title: '公司召开科技创新大会表彰先进',
        summary: '总结科技创新成果，表彰一批科技工作先进典型。',
        author: '科技部',
        source: '本站',
        published_at: '2026-05-20'
    },

    // ===== 党建综合动态补充（category_id=551，补足条数触发列表分页） =====
    {
        id: 5161,
        hash_id: 'party-news-6',
        category_id: 551,
        title: '基层党支部书记集中轮训班开班',
        summary: '提升基层党务工作者能力素质，夯实基层党建基础。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-05-28'
    },
    {
        id: 5162,
        hash_id: 'party-news-7',
        category_id: 551,
        title: '公司召开群团工作会议',
        summary: '凝聚群团组织合力，服务企业中心工作。',
        author: '工会',
        source: '本站',
        published_at: '2026-05-22'
    },
    {
        id: 5163,
        hash_id: 'party-news-8',
        category_id: 551,
        title: '公司开展廉洁文化宣传教育活动',
        summary: '筑牢拒腐防变思想防线，营造崇廉尚洁氛围。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-05-16'
    },
    {
        id: 5164,
        hash_id: 'party-news-9',
        category_id: 551,
        title: '青年突击队奋战项目一线',
        summary: '党旗所指就是团旗所向，青年突击队在急难险重任务中冲锋在前。',
        author: '团委',
        source: '本站',
        published_at: '2026-05-10'
    },
    {
        id: 5165,
        hash_id: 'party-news-10',
        category_id: 551,
        title: '公司扎实推进基层党组织标准化建设',
        summary: '推动基层党建全面进步、全面过硬。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-05-04'
    },
    {
        id: 5166,
        hash_id: 'party-news-11',
        category_id: 551,
        title: '公司举办学习贯彻党的二十届四中全会精神专题辅导',
        summary: '推动全会精神入脑入心、见行见效。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-04-28'
    }
];
