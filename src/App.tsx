import { ShieldsIO } from './components/ShieldsIO';
import { Badgen } from './components/Badgen';
import { ForTheBadge } from './components/ForTheBadge';

function App() {
  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      gap: '40px'
    }}>
      <ShieldsIO />
      <Badgen />
      <ForTheBadge />
    </div>
  );
}

export default App;