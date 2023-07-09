import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h2>TodoList with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text"  className='inputText' onChange={(e) => handleChange(e)}/>
          <input type="submit" value="作成" className='submitButton'/>
        </form>
      </div>
    </div>
  );
}

export default App;
