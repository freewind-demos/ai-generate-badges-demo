import React from 'react';

type ForTheBadgeAchievement = {
    title: string;
    label: string;
    description: string;
    category: 'built-with' | 'made-with' | 'powered-by' | 'uses';
};

const achievements: ForTheBadgeAchievement[] = [
    {
        title: '黑客马拉松参与者',
        label: 'Hackathon Participants',
        description: '参与公司黑客马拉松活动',
        category: 'built-with'
    },
    {
        title: '客户端仪表盘',
        label: 'Client Dashboard',
        description: '为客户端开发仪表盘功能',
        category: 'made-with'
    },
    {
        title: '手机工具贡献者',
        label: 'Phone Tool Contributors',
        description: '为手机工具项目做出贡献',
        category: 'built-with'
    },
    {
        title: '一年服务',
        label: '1 Year',
        description: '在公司服务满一年',
        category: 'powered-by'
    },
    {
        title: '五年服务',
        label: '5 Years',
        description: '在公司服务满五年',
        category: 'powered-by'
    },
    {
        title: '十年服务',
        label: '10 Years',
        description: '在公司服务满十年',
        category: 'powered-by'
    },
    {
        title: '入职里程碑',
        label: '工作年限',
        description: '在公司工作满五年',
        category: 'powered-by'
    },
    {
        title: '技术领袖',
        label: 'Tech Lead',
        description: '成功带领团队完成重大项目',
        category: 'built-with'
    },
    {
        title: '创新先锋',
        label: 'Innovation',
        description: '提出创新解决方案并成功实施',
        category: 'made-with'
    },
    {
        title: '全栈专家',
        label: 'Full Stack',
        description: '精通前后端技术栈',
        category: 'built-with'
    },
    {
        title: '最佳导师',
        label: 'Best Mentor',
        description: '培养多名优秀工程师',
        category: 'built-with'
    },
    {
        title: '开源贡献者',
        label: 'Open Source',
        description: '为开源社区做出重要贡献',
        category: 'made-with'
    },
    {
        title: '黑客马拉松冠军',
        label: 'Hackathon',
        description: '在公司内部黑客马拉松中获得第一名',
        category: 'built-with'
    },
    {
        title: '最佳团队',
        label: 'Best Team',
        description: '带领团队获得年度最佳团队奖',
        category: 'built-with'
    },
    {
        title: '性能优化专家',
        label: 'Performance',
        description: '显著提升系统性能',
        category: 'powered-by'
    },
    {
        title: '全球影响力',
        label: 'Global Impact',
        description: '项目在全球范围内产生重大影响',
        category: 'made-with'
    },
    {
        title: '安全卫士',
        label: 'Security Guardian',
        description: '发现并修复重大安全漏洞',
        category: 'built-with'
    },
    {
        title: '产品思维',
        label: 'Product Mindset',
        description: '从用户角度优化产品体验',
        category: 'made-with'
    },
    {
        title: '绿色节能',
        label: 'Green Tech',
        description: '显著降低系统能源消耗',
        category: 'powered-by'
    },
    {
        title: 'AI创新者',
        label: 'AI Pioneer',
        description: '成功将AI技术应用到产品中',
        category: 'built-with'
    },
    {
        title: '用户之声',
        label: 'User Voice',
        description: '收集并实现关键用户反馈',
        category: 'made-with'
    },
    {
        title: '微服务专家',
        label: 'Microservices',
        description: '成功设计和实现微服务架构',
        category: 'built-with'
    },
    {
        title: '敏捷教练',
        label: 'Agile Coach',
        description: '帮助团队提升敏捷开发效率',
        category: 'made-with'
    },
    {
        title: '数据专家',
        label: 'Data Expert',
        description: '通过数据分析推动决策优化',
        category: 'powered-by'
    },
    {
        title: '云架构师',
        label: 'Cloud Architect',
        description: '设计高可用的云服务架构',
        category: 'built-with'
    }
];

const getBadgeUrls = (achievement: ForTheBadgeAchievement) => {
    // For The Badge 只能使用预设的徽章
    const presetBadges = {
        'Hackathon Participants': [
            'https://forthebadge.com/images/badges/built-by-developers.svg',
            'https://forthebadge.com/images/badges/powered-by-coffee.svg'
        ],
        'Client Dashboard': [
            'https://forthebadge.com/images/badges/made-with-javascript.svg',
            'https://forthebadge.com/images/badges/uses-css.svg'
        ],
        'Phone Tool Contributors': [
            'https://forthebadge.com/images/badges/built-for-android.svg',
            'https://forthebadge.com/images/badges/made-with-java.svg'
        ],
        '1 Year': [
            'https://forthebadge.com/images/badges/powered-by-electricity.svg',
            'https://forthebadge.com/images/badges/built-with-love.svg'
        ],
        '5 Years': [
            'https://forthebadge.com/images/badges/certified-steve-bruhle.svg',
            'https://forthebadge.com/images/badges/powered-by-electricity.svg'
        ],
        '10 Years': [
            'https://forthebadge.com/images/badges/fixed-bugs.svg',
            'https://forthebadge.com/images/badges/powered-by-electricity.svg'
        ],
        'Tech Lead': [
            'https://forthebadge.com/images/badges/built-with-science.svg',
            'https://forthebadge.com/images/badges/uses-git.svg'
        ],
        'Innovation': [
            'https://forthebadge.com/images/badges/built-with-science.svg',
            'https://forthebadge.com/images/badges/made-with-crayons.svg'
        ],
        'Full Stack': [
            'https://forthebadge.com/images/badges/works-on-my-machine.svg',
            'https://forthebadge.com/images/badges/uses-badges.svg'
        ],
        'Best Mentor': [
            'https://forthebadge.com/images/badges/built-with-love.svg',
            'https://forthebadge.com/images/badges/makes-people-smile.svg'
        ],
        'Open Source': [
            'https://forthebadge.com/images/badges/open-source.svg',
            'https://forthebadge.com/images/badges/made-with-markdown.svg'
        ],
        'Hackathon': [
            'https://forthebadge.com/images/badges/powered-by-coffee.svg',
            'https://forthebadge.com/images/badges/contains-technical-debt.svg'
        ],
        'Best Team': [
            'https://forthebadge.com/images/badges/built-by-hipsters.svg',
            'https://forthebadge.com/images/badges/uses-badges.svg'
        ],
        'Performance': [
            'https://forthebadge.com/images/badges/powered-by-electricity.svg',
            'https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg'
        ],
        'Global Impact': [
            'https://forthebadge.com/images/badges/made-with-crayons.svg',
            'https://forthebadge.com/images/badges/for-you.svg'
        ],
        'Security Guardian': [
            'https://forthebadge.com/images/badges/powered-by-responsibility.svg',
            'https://forthebadge.com/images/badges/validated-html5.svg'
        ],
        'Product Mindset': [
            'https://forthebadge.com/images/badges/designed-in-ms-paint.svg',
            'https://forthebadge.com/images/badges/check-it-out.svg'
        ],
        'Green Tech': [
            'https://forthebadge.com/images/badges/powered-by-electricity.svg',
            'https://forthebadge.com/images/badges/uses-badges.svg'
        ],
        'AI Pioneer': [
            'https://forthebadge.com/images/badges/powered-by-black-magic.svg',
            'https://forthebadge.com/images/badges/made-with-python.svg'
        ],
        'User Voice': [
            'https://forthebadge.com/images/badges/makes-people-smile.svg',
            'https://forthebadge.com/images/badges/built-with-love.svg'
        ],
        'Microservices': [
            'https://forthebadge.com/images/badges/compatibility-club-penguin.svg',
            'https://forthebadge.com/images/badges/uses-git.svg'
        ],
        'Agile Coach': [
            'https://forthebadge.com/images/badges/built-with-love.svg',
            'https://forthebadge.com/images/badges/uses-badges.svg'
        ],
        'Data Expert': [
            'https://forthebadge.com/images/badges/powered-by-netflix.svg',
            'https://forthebadge.com/images/badges/uses-badges.svg'
        ],
        'Cloud Architect': [
            'https://forthebadge.com/images/badges/powered-by-water.svg',
            'https://forthebadge.com/images/badges/uses-git.svg'
        ]
    };

    return presetBadges[achievement.label] || [
        'https://forthebadge.com/images/badges/built-with-love.svg',
        'https://forthebadge.com/images/badges/powered-by-electricity.svg'
    ];
};

export const ForTheBadge: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            minWidth: '300px'
        }}>
            <h3 style={{ 
                margin: 0, 
                textAlign: 'center',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px'
            }}>
                For The Badge
            </h3>
            {achievements.map((achievement, index) => (
                <div key={index} style={{
                    background: '#f5f5f5',
                    padding: '15px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <h4 style={{ margin: 0 }}>{achievement.title}</h4>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '8px',
                        alignItems: 'flex-start'
                    }}>
                        {getBadgeUrls(achievement).map((url, urlIndex) => (
                            <img
                                key={urlIndex}
                                src={url}
                                alt={`${achievement.title} badge ${urlIndex + 1}`}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
