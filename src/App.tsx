import { ShieldsIO } from './components/ShieldsIO';
import { ForTheBadge } from './components/ForTheBadge';
import { Poser } from './components/Poser';

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
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap'
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
        title="Poser"
        description="灵活的徽章生成服务，支持多种样式和颜色。"
        features={[
          "支持多种徽章样式",
          "可自定义颜色和文本",
          "简单易用的API",
          "生成速度快"
        ]}
        limitations={[
          "样式选项相对固定",
          "不支持自定义图标",
          "文档更新不及时"
        ]}
      >
        <Poser />
      </ServiceSection>
    </div>
  );
}

export default App;