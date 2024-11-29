
const achievements = [
  {
    title: '入职里程碑',
    label: '工作年限',
    description: '在公司工作满五年',
    color: '2E86C1',
    icon: '🎉',
    logo: 'microsoft',
    style: 'for-the-badge' as const
  },
  {
    title: '技术领袖',
    label: 'Tech Lead',
    description: '成功带领团队完成重大项目',
    color: '8E44AD',
    icon: '👑',
    logo: 'github',
    style: 'flat-square' as const
  },
  {
    title: '创新先锋',
    label: 'Innovation',
    description: '提出创新解决方案并成功实施',
    color: '27AE60',
    icon: '💡',
    logo: 'tesla',
    style: 'flat' as const
  },
  {
    title: '全栈专家',
    label: 'Full Stack',
    description: '精通前后端技术栈',
    color: 'E67E22',
    icon: '🛠️',
    logo: 'javascript',
    style: 'plastic' as const
  },
  {
    title: '最佳导师',
    label: 'Best Mentor',
    description: '培养多名优秀工程师',
    color: 'C0392B',
    icon: '📚',
    logo: 'udemy',
    style: 'for-the-badge' as const
  },
  {
    title: '开源贡献者',
    label: 'Open Source',
    description: '为开源社区做出重要贡献',
    color: '34495E',
    icon: '🌟',
    logo: 'github',
    style: 'flat-square' as const
  },
  {
    title: '黑客马拉松冠军',
    label: 'Hackathon',
    description: '在公司内部黑客马拉松中获得第一名',
    color: '7D3C98',
    icon: '🏆',
    logo: 'hackerone',
    style: 'flat' as const
  },
  {
    title: '最佳团队',
    label: 'Best Team',
    description: '带领团队获得年度最佳团队奖',
    color: '2874A6',
    icon: '🤝',
    logo: 'microsoft',
    style: 'plastic' as const
  },
  {
    title: '性能优化专家',
    label: 'Performance',
    description: '显著提升系统性能',
    color: '148F77',
    icon: '⚡',
    logo: 'lighthouse',
    style: 'for-the-badge' as const
  },
  {
    title: '全球影响力',
    label: 'Global Impact',
    description: '项目在全球范围内产生重大影响',
    color: 'FF6B6B',
    icon: '🌍',
    logo: 'google',
    style: 'for-the-badge' as const
  },
  {
    title: '安全卫士',
    label: 'Security Guardian',
    description: '发现并修复重大安全漏洞',
    color: '4A90E2',
    icon: '🛡️',
    logo: 'hackerone',
    style: 'flat-square' as const
  },
  {
    title: '产品思维',
    label: 'Product Mindset',
    description: '从用户角度优化产品体验',
    color: '9B59B6',
    icon: '🎯',
    logo: 'producthunt',
    style: 'plastic' as const
  },
  {
    title: '绿色节能',
    label: 'Green Tech',
    description: '显著降低系统能源消耗',
    color: '2ECC71',
    icon: '🌱',
    logo: 'envato',
    style: 'flat' as const
  },
  {
    title: 'AI创新者',
    label: 'AI Pioneer',
    description: '成功将AI技术应用到产品中',
    color: '6C5CE7',
    icon: '🤖',
    logo: 'tensorflow',
    style: 'for-the-badge' as const
  },
  {
    title: '用户之声',
    label: 'User Voice',
    description: '收集并实现关键用户反馈',
    color: 'FFA502',
    icon: '👂',
    logo: 'trustpilot',
    style: 'flat-square' as const
  },
  {
    title: '微服务专家',
    label: 'Microservices',
    description: '成功设计和实现微服务架构',
    color: '45AAF2',
    icon: '🔄',
    logo: 'kubernetes',
    style: 'plastic' as const
  },
  {
    title: '敏捷教练',
    label: 'Agile Coach',
    description: '帮助团队提升敏捷开发效率',
    color: 'FF4757',
    icon: '🏃',
    logo: 'trello',
    style: 'flat' as const
  },
  {
    title: '数据专家',
    label: 'Data Expert',
    description: '通过数据分析推动决策优化',
    color: '5352ED',
    icon: '📊',
    logo: 'tableau',
    style: 'for-the-badge' as const
  },
  {
    title: '云架构师',
    label: 'Cloud Architect',
    description: '设计高可用的云服务架构',
    color: '1DD1A1',
    icon: '☁️',
    logo: 'amazonaws',
    style: 'flat-square' as const
  },
];

function App() {
  const getBadgeUrls = (achievement: typeof achievements[0]) => {
    const baseTitle = encodeURIComponent(achievement.label || achievement.title);
    const urls = [];

    urls.push(`https://img.shields.io/badge/${baseTitle}-achieved-${achievement.color}?style=${achievement.style}`);
    urls.push(`https://img.shields.io/badge/${baseTitle}-100%25-${achievement.color}?style=${achievement.style}`);
    if (achievement.logo) {
      urls.push(`https://img.shields.io/badge/${baseTitle}-verified-${achievement.color}?style=${achievement.style}&logo=${achievement.logo}`);
    }

    return urls;
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: 'center' }}>成就徽章展示</h1>
      <div style={{ display: 'flex', gap: 30 }}>
        <div>
          {achievements.map((achievement, achievementIndex) => (
            <div key={achievementIndex}>
              <div>{achievement.title}</div>
              <hr />
              {getBadgeUrls(achievement).map((url, urlIndex) => (
                <div key={urlIndex} style={{ marginBottom: '0.5rem' }}>
                  <img src={url} alt={achievement.title} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
