import { useRef, useState } from 'react';
import './App.css';
import Video from './Video';


function App() {
  const refVideo = useRef()

  const handlePlay = () => {
    console.log(refVideo);
    refVideo.current.play()
  }

  const handlePause = () => {
    refVideo.current.pause()
  }


  return (
    <div style={{ padding: 20 }}>
      <Video ref={refVideo}/>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
