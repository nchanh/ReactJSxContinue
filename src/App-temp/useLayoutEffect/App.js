import { useState } from 'react';
import './App.css';
import Content from './Content';


function App() {
  const [isShowContent, setIsShowContent] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setIsShowContent(!isShowContent)}>
        {isShowContent ? 'Hide' : 'Show'}
      </button>
      {isShowContent && <Content />}
    </div>
  );
}

export default App;
