import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import Content from './Content';


function App() {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(1);

  const onCount = () => {
    setCount(count + 1);
  }

  const countNumber = () => {
    setNumber(number + 1);
  }

  return (
    <div style={{ padding: 20 }}>
      <Content count={count} />
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={onCount}>count</button>
      <button onClick={countNumber}>number</button>
    </div>
  );
}

export default App;
