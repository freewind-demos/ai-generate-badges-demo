import React from 'react';

type ShieldsIOAchievement = {
    title: string;
    label: string;
    description: string;
    color: string;
    icon: string;
    logo: string;
    style: 'flat' | 'flat-square' | 'plastic' | 'for-the-badge';
};

const achievements: ShieldsIOAchievement[] = [
    {
        title: '黑客马拉松参与者',
        label: 'Hackathon Participants',
        description: '参与公司黑客马拉松活动',
        color: '9B59B6',
        icon: '💻',
        logo: 'hackerone',
        style: 'flat-square'
    },
    {
        title: '客户端仪表盘',
        label: 'Client Dashboard',
        description: '为客户端开发仪表盘功能',
        color: '3498DB',
        icon: '📊',
        logo: 'react',
        style: 'flat'
    },
    {
        title: '手机工具贡献者',
        label: 'Phone Tool Contributors',
        description: '为手机工具项目做出贡献',
        color: 'E74C3C',
        icon: '📱',
        logo: 'android',
        style: 'flat-square'
    },
    {
        title: '一年服务',
        label: '1 Year',
        description: '在公司服务满一年',
        color: '2ECC71',
        icon: '🌱',
        logo: 'microsoft',
        style: 'for-the-badge'
    },
    {
        title: '五年服务',
        label: '5 Years',
        description: '在公司服务满五年',
        color: 'F1C40F',
        icon: '🌟',
        logo: 'microsoft',
        style: 'for-the-badge'
    },
    {
        title: '十年服务',
        label: '10 Years',
        description: '在公司服务满十年',
        color: 'E67E22',
        icon: '👑',
        logo: 'microsoft',
        style: 'for-the-badge'
    },
    {
        title: '入职里程碑',
        label: '工作年限',
        description: '在公司工作满五年',
        color: '2E86C1',
        icon: '🎉',
        logo: 'microsoft',
        style: 'for-the-badge'
    },
    {
        title: '技术领袖',
        label: 'Tech Lead',
        description: '成功带领团队完成重大项目',
        color: '8E44AD',
        icon: '👑',
        logo: 'github',
        style: 'flat-square'
    },
    {
        title: '创新先锋',
        label: 'Innovation',
        description: '提出创新解决方案并成功实施',
        color: '27AE60',
        icon: '💡',
        logo: 'tesla',
        style: 'flat'
    },
    {
        title: '全栈专家',
        label: 'Full Stack',
        description: '精通前后端技术栈',
        color: 'E67E22',
        icon: '🛠️',
        logo: 'javascript',
        style: 'plastic'
    },
    {
        title: '最佳导师',
        label: 'Best Mentor',
        description: '培养多名优秀工程师',
        color: 'C0392B',
        icon: '📚',
        logo: 'udemy',
        style: 'for-the-badge'
    },
    {
        title: '开源贡献者',
        label: 'Open Source',
        description: '为开源社区做出重要贡献',
        color: '34495E',
        icon: '🌟',
        logo: 'github',
        style: 'flat-square'
    },
    {
        title: '黑客马拉松冠军',
        label: 'Hackathon',
        description: '在公司内部黑客马拉松中获得第一名',
        color: '7D3C98',
        icon: '🏆',
        logo: 'hackerone',
        style: 'flat'
    },
    {
        title: '最佳团队',
        label: 'Best Team',
        description: '带领团队获得年度最佳团队奖',
        color: '2874A6',
        icon: '🤝',
        logo: 'microsoft',
        style: 'plastic'
    },
    {
        title: '性能优化专家',
        label: 'Performance',
        description: '显著提升系统性能',
        color: '148F77',
        icon: '⚡',
        logo: 'lighthouse',
        style: 'for-the-badge'
    },
    {
        title: '全球影响力',
        label: 'Global Impact',
        description: '项目在全球范围内产生重大影响',
        color: 'FF6B6B',
        icon: '🌍',
        logo: 'google',
        style: 'for-the-badge'
    },
    {
        title: '安全卫士',
        label: 'Security Guardian',
        description: '发现并修复重大安全漏洞',
        color: '4A90E2',
        icon: '🛡️',
        logo: 'hackerone',
        style: 'flat-square'
    },
    {
        title: '产品思维',
        label: 'Product Mindset',
        description: '从用户角度优化产品体验',
        color: '9B59B6',
        icon: '🎯',
        logo: 'producthunt',
        style: 'plastic'
    },
    {
        title: '绿色节能',
        label: 'Green Tech',
        description: '显著降低系统能源消耗',
        color: '2ECC71',
        icon: '🌱',
        logo: 'envato',
        style: 'flat'
    },
    {
        title: 'AI创新者',
        label: 'AI Pioneer',
        description: '成功将AI技术应用到产品中',
        color: '6C5CE7',
        icon: '🤖',
        logo: 'tensorflow',
        style: 'for-the-badge'
    },
    {
        title: '用户之声',
        label: 'User Voice',
        description: '收集并实现关键用户反馈',
        color: 'FFA502',
        icon: '👂',
        logo: 'trustpilot',
        style: 'flat-square'
    },
    {
        title: '微服务专家',
        label: 'Microservices',
        description: '成功设计和实现微服务架构',
        color: '45AAF2',
        icon: '🔄',
        logo: 'kubernetes',
        style: 'plastic'
    },
    {
        title: '敏捷教练',
        label: 'Agile Coach',
        description: '帮助团队提升敏捷开发效率',
        color: 'FF4757',
        icon: '🏃',
        logo: 'trello',
        style: 'flat'
    },
    {
        title: '数据专家',
        label: 'Data Expert',
        description: '通过数据分析推动决策优化',
        color: '5352ED',
        icon: '📊',
        logo: 'tableau',
        style: 'for-the-badge'
    },
    {
        title: '云架构师',
        label: 'Cloud Architect',
        description: '设计高可用的云服务架构',
        color: '1DD1A1',
        icon: '☁️',
        logo: 'amazonaws',
        style: 'flat-square'
    }
];

const getBadgeUrls = (achievement: ShieldsIOAchievement) => {
    const baseTitle = encodeURIComponent(achievement.label);
    return [
        `https://img.shields.io/badge/${baseTitle}-achieved-${achievement.color}?style=${achievement.style}&logo=${achievement.logo}`,
        `https://img.shields.io/badge/${baseTitle}-verified-${achievement.color}?style=${achievement.style}&logo=${achievement.logo}`,
        `https://img.shields.io/badge/${baseTitle}-${achievement.description}-${achievement.color}?style=${achievement.style}&logo=${achievement.logo}`
    ];
};

export const ShieldsIO: React.FC = () => {
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
                Shields.io
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
