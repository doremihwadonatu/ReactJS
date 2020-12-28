import React, { useState } from 'react'

function App() {
  const [inputTodo, setInputTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
      console.log(inputTodo);
      setTodos(todos.concat(inputTodo));
      setInputTodo('');
  };

  return (
      <div className="App">
        <h1>TODO App</h1>
        <input type="text" placeholder="Add a new task!" value={inputTodo} onChange={e => setInputTodo(e.target.value)}/>
        <button onClick={handleClick}>追加</button>
        <div>
          <ul>
            {todos.map((todo, index) => <li key={ index }>{ todo }</li>)}
          </ul>
        </div>
      </div>
  );

} 

export default App;
