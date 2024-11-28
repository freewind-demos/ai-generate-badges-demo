import React from 'react';
import styled from 'styled-components';
import { AchievementBadge } from './components/AchievementBadge';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

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
    logo: 'hackerrank',
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
    logo: 'speedtest',
    style: 'for-the-badge' as const
  }
];

function App() {
  return (
    <AppContainer>
      <Title>员工成就徽章展示</Title>
      <BadgesGrid>
        {achievements.map((achievement, index) => (
          <AchievementBadge
            key={index}
            {...achievement}
          />
        ))}
      </BadgesGrid>
    </AppContainer>
  );
}

export default App;
