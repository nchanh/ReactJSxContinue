import { useEffect, useRef, useState } from 'react';
import './App.css';
import Content from './Content';


function App() {
  const [number, setNumber] = useState(60);

  const itvSubNumber = useRef();
  const prevCount = useRef();
  const refH1 = useRef();
  
  useEffect(() => {
    prevCount.current = number;
  }, [number]);

  useEffect(() => {
    const rect = refH1.current.getBoundingClientRect();
    console.log(rect);
  }, [])

  const runSubMNumber = () => {
    itvSubNumber.current = setInterval(() => {
      setNumber((prev) => prev - 1);
    }, 1000);
  }

  const stopSubNumber = () => {
    clearInterval(itvSubNumber.current);
  }

  console.log(number, prevCount.current);

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={refH1}>{number}</h1>
      <button onClick={runSubMNumber}>run</button>
      <button onClick={stopSubNumber}>stop</button>
    </div>
  );
}

export default App;
