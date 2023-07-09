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

    const handleEdit = () => {

    }

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
          <input type="text" onChange={(e) => handleChange(e)} className='inputText'/>
          <input type="submit" value="作成" className='submitButton'/>
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="text" onChange={(e) => handleEdit()} className='inputText' value={todo.inputValue}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
