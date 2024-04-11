type Todo = {
  id: number;
  text: string;
  done: boolean;
};

import React, { useState } from "react";

function App(){
  const[todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new todo"
      />
      <button onClick={addTodo}> Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
