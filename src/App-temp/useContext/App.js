import { useContext } from 'react';
import './App.css';
import Content from './Content';
import { ThemeContext } from './ThemeContext';

function App() {
  const contextTheme = useContext(ThemeContext)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={contextTheme.handleChangeTheme}>
        Theme
      </button>
      <Content />
    </div>
  );
}

export default App;
