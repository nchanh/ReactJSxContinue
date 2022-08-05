import { useState } from 'react';
import './App.css';
import GlobalStyles from './components/GlobalStyles';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';


function App() {


  return (
    <GlobalStyles>
      <div style={{ padding: 20 }}>
        <Heading />
        <Paragraph />
        <div className="d-flex">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      </div>
    </GlobalStyles>
  );
}

export default App;
