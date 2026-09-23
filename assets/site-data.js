/**
 * 四航三官网 - 本地静态数据（模拟后端 API 返回，驱动轮播/列表/tab 等交互）
 * 结构模拟原后端 /api/public/shj/categories 与 /api/public/shj/articles 的返回格式。
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
        page_url: 'D:\\xiaowu\\design_work\\demo\\1_首页.html'
    },
    {
        id: 2,
        name: '关于四航三',
        slug: 'about',
        parent_id: 0,
        is_nav: true,
        sort_order: 2,
        nav_type: 'PAGE',
        page_url: 'D:\\xiaowu\\design_work\\demo\\2_关于四航三.html'
    },
    {
        id: 3,
        name: '新闻中心',
        slug: 'news',
        parent_id: 0,
        is_nav: true,
        sort_order: 3,
        nav_type: 'PAGE',
        page_url: 'D:\\xiaowu\\design_work\\demo\\3_新闻中心.html'
    },
    {
        id: 4,
        name: '业务领域',
        slug: 'business',
        parent_id: 0,
        is_nav: true,
        sort_order: 4,
        nav_type: 'PAGE',
        page_url: 'D:\\xiaowu\\design_work\\demo\\4_公司业务.html',
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
        page_url: 'D:\\xiaowu\\design_work\\demo\\5_党的建设.html'
    },
    {
        id: 6,
        name: '科技创新',
        slug: 'tech',
        parent_id: 0,
        is_nav: true,
        sort_order: 6,
        nav_type: 'PAGE',
        page_url: 'D:\\xiaowu\\design_work\\demo\\6_科技创新.html'
    },
    {
        id: 7,
        name: '人力资源',
        slug: 'hr',
        parent_id: 0,
        is_nav: true,
        sort_order: 7,
        nav_type: 'PAGE',
        page_url: 'D:\\xiaowu\\design_work\\demo\\7_人力资源.html'
    },

    // ===== 关于四航三（id=2） =====
    {
        id: 21,
        name: '公司概况',
        slug: 'about-overview',
        parent_id: 2,
        is_nav: true,
        sort_order: 1
    },
    {
        id: 22,
        name: '历史传承',
        slug: 'about-history',
        parent_id: 2,
        is_nav: true,
        sort_order: 2
    },
    {
        id: 23,
        name: '组织架构',
        slug: 'about-structure',
        parent_id: 2,
        is_nav: true,
        sort_order: 3
    },
    {
        id: 24,
        name: '全球分布',
        slug: 'about-online',
        parent_id: 2,
        is_nav: true,
        sort_order: 4
    },
    {
        id: 25,
        name: '经营布局',
        slug: 'about-layout',
        parent_id: 2,
        is_nav: true,
        sort_order: 5
    },
    {
        id: 26,
        name: '企业荣誉',
        slug: 'about-honor',
        parent_id: 2,
        is_nav: true,
        sort_order: 6
    },
    {
        id: 27,
        name: '品牌理念',
        slug: 'about-band',
        parent_id: 2,
        is_nav: true,
        sort_order: 7
    },

    // ===== 新闻中心（id=3） =====
    {
        id: 31,
        name: '公司要闻',
        slug: 'news-yaowen',
        parent_id: 3,
        is_nav: true,
        sort_order: 1
    },
    {
        id: 33,
        name: '媒体聚焦',
        slug: 'news-media',
        parent_id: 3,
        is_nav: true,
        sort_order: 2
    },

    // ===== 公司业务（id=4） =====
    {
        id: 41,
        name: '港口及航运设施工程',
        slug: 'business-port',
        parent_id: 4,
        is_nav: true,
        sort_order: 1,
        images: './4_公司业务_files/upload_1789886368304789615.jpg'
    },
    {
        id: 42,
        name: '公路工程',
        slug: 'business-road',
        parent_id: 4,
        is_nav: true,
        sort_order: 2,
        images: './1_首页_files/1637910591_1781250399781234770.jpg'
    },
    {
        id: 43,
        name: '铁路工程',
        slug: 'business-railway',
        parent_id: 4,
        is_nav: true,
        sort_order: 3,
        images: './1_首页_files/1637910591_1781250424599483335.jpg'
    },
    {
        id: 44,
        name: '城市轨道交通工程',
        slug: 'business-rail',
        parent_id: 4,
        is_nav: true,
        sort_order: 4,
        images: './1_首页_files/1637910591_1781250448084972356.jpg'
    },
    {
        id: 45,
        name: '市政工程',
        slug: 'business-admin',
        parent_id: 4,
        is_nav: true,
        sort_order: 5,
        images: './1_首页_files/1637910591_1781250467957046340.jpg'
    },
    {
        id: 46,
        name: '隧道和桥梁工程',
        slug: 'business-cat-bridge',
        parent_id: 4,
        is_nav: true,
        sort_order: 6,
        images: './1_首页_files/cat20181106095223_1782209593225684892.jpg'
    },
    {
        id: 47,
        name: '水利、船闸、船坞工程',
        slug: 'business-cat-ship',
        parent_id: 4,
        is_nav: true,
        sort_order: 7,
        images: './1_首页_files/1637910591_1781250399781234770.jpg'
    },
    {
        id: 48,
        name: '房屋建筑工程',
        slug: 'business-cat-house',
        parent_id: 4,
        is_nav: true,
        sort_order: 8,
        images: './1_首页_files/1637910591_1781250424599483335.jpg'
    },
    {
        id: 49,
        name: '生态保护工程',
        slug: 'business-cat-ecology',
        parent_id: 4,
        is_nav: true,
        sort_order: 9,
        images: './1_首页_files/1637910591_1781250448084972356.jpg'
    },
    {
        id: 50,
        name: '河湖治理工程',
        slug: 'business-cat-river',
        parent_id: 4,
        is_nav: true,
        sort_order: 10,
        images: './1_首页_files/1637910591_1781250467957046340.jpg'
    },
    {
        id: 51,
        name: '综合管廊工程',
        slug: 'business-cat-cat-utility',
        parent_id: 4,
        is_nav: true,
        sort_order: 11,
        images: './1_首页_files/cat20181106095223_1782209593225684892.jpg'
    },
    {
        id: 52,
        name: '海外风能发电工程',
        slug: 'business-cat-wind',
        parent_id: 4,
        is_nav: true,
        sort_order: 12,
        images: './1_首页_files/1637910591_1781250399781234770.jpg'
    },
    {
        id: 53,
        name: '海外港口及航运设施工程',
        slug: 'business-cat-port_overseas',
        parent_id: 4,
        is_nav: true,
        sort_order: 13,
        images: './1_首页_files/1637910591_1781250424599483335.jpg'
    },

    // ===== 工程承包业务三级子栏目（parent_id=41） =====
    {
        id: 411,
        name: '疏浚工程',
        slug: 'business-port-cat-mtwok9jo',
        parent_id: 41,
        is_nav: false,
        sort_order: 1
    },
    {
        id: 412,
        name: '道路工程',
        slug: 'business-port-cat-mtwnpg7p',
        parent_id: 41,
        is_nav: false,
        sort_order: 2
    },
    {
        id: 413,
        name: '岛隧工程',
        slug: 'business-port-cat-mtwnq4c6',
        parent_id: 41,
        is_nav: false,
        sort_order: 3
    },
    {
        id: 414,
        name: '港口码头',
        slug: 'business-port-cat-mtwnqjey',
        parent_id: 41,
        is_nav: false,
        sort_order: 4
    },

    // ===== 党的建设（id=5） =====
    {
        id: 51,
        name: '综合动态',
        slug: 'party-news',
        parent_id: 5,
        is_nav: true,
        sort_order: 1
    },
    {
        id: 52,
        name: '党建品牌',
        slug: 'party-brand',
        parent_id: 5,
        is_nav: true,
        sort_order: 2
    },
    {
        id: 53,
        name: '工团工作',
        slug: 'party-union',
        parent_id: 5,
        is_nav: true,
        sort_order: 3
    },
    {
        id: 54,
        name: '信访举报',
        slug: 'party-report',
        parent_id: 5,
        is_nav: true,
        sort_order: 4
    },

    // ===== 科技创新（id=6） =====
    {
        id: 61,
        name: '科技动态',
        slug: 'tech-dynamic',
        parent_id: 6,
        is_nav: true,
        sort_order: 1
    },
    {
        id: 62,
        name: '科技成果',
        slug: 'tech-results',
        parent_id: 6,
        is_nav: true,
        sort_order: 2
    },

    // ===== 人力资源（id=7） =====
    {
        id: 71,
        name: '企业专家',
        slug: 'hr-expert',
        parent_id: 7,
        is_nav: true,
        sort_order: 1,
        description: '深入实施人才强企战略，着力打造六支人才队伍'
    },
    {
        id: 72,
        name: '招聘信息',
        slug: 'hr-info',
        parent_id: 7,
        is_nav: true,
        sort_order: 2,
        description: '健全员工成长成才机制，畅通职业发展通道',
        images: './7_人力资源_files/cat20181106095223_1782383323504721056.jpg'
    },
    {
        id: 73,
        name: '人才队伍结构',
        slug: 'hr-team',
        parent_id: 7,
        is_nav: true,
        sort_order: 3
    },
    {
        id: 74,
        name: '校招职位管理',
        slug: 'hr-post',
        parent_id: 7,
        is_nav: true,
        sort_order: 4
    },

    // ===== 其他栏目（首页媒体矩阵、人力资源内容栏目） =====
    {
        id: 48,
        name: '媒体矩阵',
        slug: 'media-matrix',
        parent_id: 0,
        is_nav: false,
        sort_order: 50
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
        cover_image: './1_首页_files/1637910591_1781250399781234770.jpg',
        published_at: '2026-06-12',
        is_image_news: true
    },
    {
        id: 102,
        hash_id: 'img-news-2',
        category_id: 31,
        title: '四航局重大工程项目节点顺利推进',
        summary: '重点项目现场掀起大干热潮，各项建设任务按计划稳步推进。',
        cover_image: './1_首页_files/1637910591_1781250424599483335.jpg',
        published_at: '2026-06-10',
        is_image_news: true
    },
    {
        id: 103,
        hash_id: 'img-news-3',
        category_id: 31,
        title: '公司科技创新成果转化成效显著',
        summary: '多项自主研发技术在生产一线落地应用，赋能项目提质增效。',
        cover_image: './1_首页_files/1637910591_1781250448084972356.jpg',
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
        cover_image: './1_首页_files/1637910591_1781250399781234770.jpg',
        published_at: '2026-07-07',
        is_top: true
    },
    {
        id: 112,
        hash_id: 'news-yaowen-2',
        category_id: 31,
        title: '深度解读企业战略与发展聚焦重点领域',
        summary: '围绕企业"十四五"发展战略，系统梳理重点领域攻坚方向与实施路径。',
        author: '办公室',
        source: '本站',
        cover_image: './1_首页_files/1637910591_1781250424599483335.jpg',
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
        cover_image: './1_首页_files/1637910591_1781250448084972356.jpg',
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
        cover_image: './4_公司业务_files/upload_1789886368304789615.jpg',
        published_at: '2026-06-15'
    },
    {
        id: 4112,
        hash_id: 'business-shujun-2',
        category_id: 411,
        title: '航道整治与维护疏浚',
        cover_image: './1_首页_files/1637910591_1781250467957046340.jpg',
        published_at: '2026-06-10'
    },
    {
        id: 4121,
        hash_id: 'business-daolu-1',
        category_id: 412,
        title: '高速公路改扩建工程',
        cover_image: './1_首页_files/cat20181106095223_1782209593225684892.jpg',
        published_at: '2026-06-12'
    },
    {
        id: 4122,
        hash_id: 'business-daolu-2',
        category_id: 412,
        title: '市政道路桥梁工程',
        cover_image: './1_首页_files/1637910591_1781250424599483335.jpg',
        published_at: '2026-06-05'
    },
    {
        id: 4131,
        hash_id: 'business-daosui-1',
        category_id: 413,
        title: '沉管隧道安装工程',
        cover_image: './1_首页_files/1637910591_1781250399781234770.jpg',
        published_at: '2026-06-14'
    },
    {
        id: 4132,
        hash_id: 'business-daosui-2',
        category_id: 413,
        title: '海底隧道工程',
        cover_image: './1_首页_files/____2_1789721518834065399.jpg',
        published_at: '2026-06-08'
    },
    {
        id: 4141,
        hash_id: 'business-gangkou-1',
        category_id: 414,
        title: '大型深水码头工程',
        cover_image: './4_公司业务_files/upload_1789886368304789615.jpg',
        published_at: '2026-06-13'
    },
    {
        id: 4142,
        hash_id: 'business-gangkou-2',
        category_id: 414,
        title: '集装箱码头改扩建',
        cover_image: './1_首页_files/1637910591_1781250448084972356.jpg',
        published_at: '2026-06-06'
    },

    // ===== 党的建设 - 综合动态（category_id=51） =====
    {
        id: 511,
        hash_id: 'party-news-1',
        category_id: 51,
        title: '四航局党委召开2026年第一次书记例会',
        summary: '总结上半年党建工作，部署下半年重点任务，推动全面从严治党向纵深发展。',
        author: '党委工作部',
        source: '本站',
        cover_image: './5_党的建设_files/cat20181106095223_1782117288265921549.jpg',
        published_at: '2026-07-02',
        is_top: true
    },
    {
        id: 512,
        hash_id: 'party-news-2',
        category_id: 51,
        title: '聚焦重点领域，深度解读企业战略与发展',
        summary: '党建引领聚合力，把党的政治优势转化为企业发展优势。',
        author: '党委工作部',
        source: '本站',
        cover_image: './1_首页_files/1637910591_1781250467957046340.jpg',
        published_at: '2026-06-26'
    },
    {
        id: 513,
        hash_id: 'party-news-3',
        category_id: 51,
        title: '公司党委理论学习中心组开展集体学习',
        summary: '深入学习贯彻党的二十届四中全会精神，凝聚思想共识。',
        author: '党委工作部',
        source: '本站',
        cover_image: './1_首页_files/cat20181106095223_1782209593225684892.jpg',
        published_at: '2026-06-19'
    },
    {
        id: 514,
        hash_id: 'party-news-4',
        category_id: 51,
        title: '基层党组织开展主题党日活动',
        summary: '传承红色基因，砥砺初心使命，激发干事创业热情。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-06-12'
    },
    {
        id: 515,
        hash_id: 'party-news-5',
        category_id: 51,
        title: '公司召开2026年党风廉政建设工作会议',
        summary: '持之以恒正风肃纪，营造风清气正的良好政治生态。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-06-05'
    },

    // ===== 人力资源 - 主要任务（category_id=121，6支人才队伍，含 content） =====
    {
        id: 1211,
        hash_id: 'hr-expert-1',
        category_id: 121,
        title: '头雁工程',
        summary: '领导人员队伍',
        content: '<h3><strong>党管干部原则与市场化选人用人相结合</strong></h3><p><strong>头雁领航 群雁齐飞</strong></p><p>坚持党管干部原则与市场化选人用人相结合，打造政治过硬、具备领导现代化建设能力的领导人员队伍。深入实施"头雁工程"，建立完善领导干部选拔任用、考核评价、监督管理全链条机制。</p><p>加强领导人员政治能力训练和实践锻炼，推动领导干部在改革发展主战场、生产经营第一线、服务群众最前沿经受历练、增长才干。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1212,
        hash_id: 'hr-expert-2',
        category_id: 121,
        title: '鲲鹏工程',
        summary: '科技人才队伍',
        content: '<h3><strong>加快高水平科技自立自强</strong></h3><p><strong>鲲鹏展翅 志存高远</strong></p><p>聚焦国家重大战略和行业前沿技术，打造结构合理、素质优良的科技人才队伍。深入实施"鲲鹏工程"，完善科技人才引进培养、评价激励和使用机制。</p><p>加强科技创新平台建设，鼓励科技人才承担重大科研任务，在关键核心技术攻关中挑大梁、当主角。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1213,
        hash_id: 'hr-expert-3',
        category_id: 121,
        title: '鹰隼工程',
        summary: '经营管理人才队伍',
        content: '<h3><strong>培养市场化经营管理的行家里手</strong></h3><p><strong>鹰隼试翼 风尘翕张</strong></p><p>围绕企业改革发展需要，打造懂经营、善管理、会创新的经营管理人才队伍。深入实施"鹰隼工程"，加强经营管理人员市场意识、效益意识和风险意识培养。</p><p>健全经营管理人才职业发展通道，激发干事创业活力，为企业高质量发展提供坚强支撑。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1214,
        hash_id: 'hr-expert-4',
        category_id: 121,
        title: '海鸥工程',
        summary: '海外人才队伍',
        content: '<h3><strong>服务高水平对外开放</strong></h3><p><strong>海鸥展翅 逐浪远航</strong></p><p>围绕海外业务发展需要，打造具有国际视野、通晓国际规则的海外人才队伍。深入实施"海鸥工程"，加强海外人才国际化能力和跨文化沟通能力培养。</p><p>完善海外人才激励保障机制，让海外人才安心、安身、安业，为共建"一带一路"贡献力量。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1215,
        hash_id: 'hr-expert-5',
        category_id: 121,
        title: '鸿鹄工程',
        summary: '党群人才队伍',
        content: '<h3><strong>建设高素质党群工作队伍</strong></h3><p><strong>鸿鹄高飞 一举千里</strong></p><p>围绕新时代党的建设总要求，打造忠诚干净担当的党群人才队伍。深入实施"鸿鹄工程"，加强党群人才政治素质和业务能力建设。</p><p>推动党群人才在基层党建、宣传思想、纪检监督等岗位历练成长，为企业改革发展提供坚强组织保证。</p>',
        published_at: '2026-06-01'
    },
    {
        id: 1216,
        hash_id: 'hr-expert-6',
        category_id: 121,
        title: '雨燕工程',
        summary: '技能人才队伍',
        content: '<h3><strong>弘扬工匠精神 锻造大国工匠</strong></h3><p><strong>雨燕凌云 匠心筑梦</strong></p><p>围绕企业高质量发展需要，打造知识型、技能型、创新型技能人才队伍。深入实施"雨燕工程"，完善技能人才培养、使用、评价、激励机制。</p><p>广泛开展岗位练兵、技能比武，大力弘扬劳模精神、劳动精神、工匠精神，培育更多大国工匠。</p>',
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

    // ===== 媒体矩阵（category_id=48，首页媒体矩阵图标） =====
    {
        id: 481,
        hash_id: 'media-1',
        category_id: 48,
        title: '官方微信公众号',
        cover_image: './1_首页_files/2_1789883604813454065.jpg',
        published_at: '2026-06-01'
    },
    {
        id: 482,
        hash_id: 'media-2',
        category_id: 48,
        title: '官方微博',
        cover_image: './1_首页_files/upload_1789885907524298167.png',
        published_at: '2026-06-01'
    },
    {
        id: 483,
        hash_id: 'media-3',
        category_id: 48,
        title: '抖音号',
        published_at: '2026-06-01'
    },
    {
        id: 484,
        hash_id: 'media-4',
        category_id: 48,
        title: '视频号',
        published_at: '2026-06-01'
    },
    {
        id: 485,
        hash_id: 'media-5',
        category_id: 48,
        title: '知乎号',
        published_at: '2026-06-01'
    },
    {
        id: 486,
        hash_id: 'media-6',
        category_id: 48,
        title: '交建通',
        cover_image: './1_首页_files/__logo___1782372657051071516.png',
        published_at: '2026-06-01'
    },
    {
        id: 487,
        hash_id: 'media-7',
        category_id: 48,
        title: '中交四航局',
        cover_image: './1_首页_files/B__1782372189008058349.png',
        published_at: '2026-06-01'
    },
    {
        id: 488,
        hash_id: 'media-8',
        category_id: 48,
        title: '中国交建',
        cover_image: './1_首页_files/___1782372153161248504.png',
        published_at: '2026-06-01'
    },
    {
        id: 489,
        hash_id: 'media-9',
        category_id: 48,
        title: '交建融媒',
        cover_image: './1_首页_files/__logo___1782371990204303370.png',
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

    // ===== 党建综合动态补充（category_id=51，补足条数触发列表分页） =====
    {
        id: 5161,
        hash_id: 'party-news-6',
        category_id: 51,
        title: '基层党支部书记集中轮训班开班',
        summary: '提升基层党务工作者能力素质，夯实基层党建基础。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-05-28'
    },
    {
        id: 5162,
        hash_id: 'party-news-7',
        category_id: 51,
        title: '公司召开群团工作会议',
        summary: '凝聚群团组织合力，服务企业中心工作。',
        author: '工会',
        source: '本站',
        published_at: '2026-05-22'
    },
    {
        id: 5163,
        hash_id: 'party-news-8',
        category_id: 51,
        title: '公司开展廉洁文化宣传教育活动',
        summary: '筑牢拒腐防变思想防线，营造崇廉尚洁氛围。',
        author: '纪委办公室',
        source: '本站',
        published_at: '2026-05-16'
    },
    {
        id: 5164,
        hash_id: 'party-news-9',
        category_id: 51,
        title: '青年突击队奋战项目一线',
        summary: '党旗所指就是团旗所向，青年突击队在急难险重任务中冲锋在前。',
        author: '团委',
        source: '本站',
        published_at: '2026-05-10'
    },
    {
        id: 5165,
        hash_id: 'party-news-10',
        category_id: 51,
        title: '公司扎实推进基层党组织标准化建设',
        summary: '推动基层党建全面进步、全面过硬。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-05-04'
    },
    {
        id: 5166,
        hash_id: 'party-news-11',
        category_id: 51,
        title: '公司举办学习贯彻党的二十届四中全会精神专题辅导',
        summary: '推动全会精神入脑入心、见行见效。',
        author: '党委工作部',
        source: '本站',
        published_at: '2026-04-28'
    }
];