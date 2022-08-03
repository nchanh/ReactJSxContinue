import { useState } from 'react';
import './App.css';
import Button from './components/Button'


function App() {


  return (
    <div style={{ padding: 20 }}>
      <Button />
      <Button colorSuccess />
      <Button disabled />
    </div>
  );
}

export default App;
