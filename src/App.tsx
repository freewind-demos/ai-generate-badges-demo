import { ForTheBadge } from './components/ForTheBadge';
import { ShieldsIO } from './components/ShieldsIO';
import { SvgBadge } from './components/SvgBadge';

const ServiceSection: React.FC<{
  title: string;
  description: string;
  features: string[];
  limitations: string[];
  children: React.ReactNode;
}> = ({ title, description, features, limitations, children }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '400px',
    maxWidth: '500px'
  }}>
    <div style={{
      background: '#f5f5f5',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h2 style={{ margin: '0 0 15px 0' }}>{title}</h2>
      <p style={{ margin: '0 0 15px 0' }}>{description}</p>
      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#2ECC71' }}>✨ 特点</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', color: '#E74C3C' }}>⚠️ 限制</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {limitations.map((limitation, index) => (
            <li key={index}>{limitation}</li>
          ))}
        </ul>
      </div>
    </div>
    {children}
  </div>
);

function App() {
  return (
    <div style={{
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '40px',
      alignItems: 'start'
    }}>
      <ServiceSection
        title="Shields.io"
        description="最流行的徽章服务，提供了丰富的自定义选项和大量的集成支持。"
        features={[
          "支持多种样式（flat、square、plastic等）",
          "可以使用任意logo和图标",
          "支持自定义颜色和文本",
          "提供大量预设的服务集成"
        ]}
        limitations={[
          "有请求速率限制",
          "某些logo可能需要验证",
          "自定义logo需要是已知的品牌/服务"
        ]}
      >
        <ShieldsIO />
      </ServiceSection>

      <ServiceSection
        title="ForTheBadge"
        description="独特风格的徽章服务，提供有趣和个性化的预设徽章。"
        features={[
          "独特的视觉风格",
          "有趣的预设徽章",
          "适合展示团队文化",
          "徽章设计醒目"
        ]}
        limitations={[
          "不支持自定义徽章",
          "只能使用预设模板",
          "更新频率较低",
          "不适合正式场合"
        ]}
      >
        <ForTheBadge />
      </ServiceSection>

      <ServiceSection
        title="游戏风格徽章"
        description="使用SVG创建的游戏成就风格徽章。市面上类似服务主要是付费的企业平台（如Credly），或需要自己部署的开源方案（如Badgr）。其他选择包括使用Figma等设计工具自己制作，或使用游戏素材网站的资源。这里尝试用SVG实现一个简单的版本。"
        features={[
          "支持六边形、圆形、盾牌形状",
          "渐变和发光效果",
          "等级显示",
          "自定义颜色和图标"
        ]}
        limitations={[
          "需要自己设计SVG",
          "加载略慢",
          "不支持动画效果",
          "样式相对固定"
        ]}
      >
        <SvgBadge />
      </ServiceSection>
    </div>
  );
}

export default App;