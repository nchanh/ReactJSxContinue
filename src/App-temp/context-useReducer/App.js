import { useRef } from 'react';
import './App.css';
import { useStore, actions } from './store'

function App() {
  const [state, dispatch] = useStore()
  const { todoInput, todos } = state

  const refTodoInput = useRef()

  const handleAddTodo = () => {
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(''))
    refTodoInput.current.focus()
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={refTodoInput}
        value={todoInput}
        placeholder="Input to do..."
        onChange={e => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleAddTodo}>Add</button>

      <hr/>
      
      {todos && todos.map((todo, i) => (
        <li key={i}>
          {todo} 
          <span onClick={() => dispatch(actions.deleteTodoInput(i)) }>&times;</span>
        </li>
      )) }
    </div>
  );
}

export default App;
