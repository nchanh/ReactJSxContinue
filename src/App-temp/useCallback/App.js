import { useCallback, useState } from 'react';
import './App.css';
import Content from './Content';


function App() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
      setCount(prev => prev + 1);
    }, [])
  

  return (
    <div style={{ padding: 20 }}>
      <Content onCount={handleCount} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
