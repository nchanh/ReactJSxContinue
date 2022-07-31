import { useReducer } from 'react';
import './App.css';

const ACTION_UP = 'action_up'
const ACTION_DOWN = 'action_down'

const initCount = 0;

const reducerCount = (state, action) => {
  switch (action) {
    case ACTION_UP:
      return state + 1
    case ACTION_DOWN:
      return state - 1
    default:
      throw new Error('Count is error')
  }
}


function App() {

  const [count, dispatch] = useReducer(reducerCount, initCount)

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(ACTION_UP)}>Up</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>Down</button>
    </div>
  );
}

export default App;
