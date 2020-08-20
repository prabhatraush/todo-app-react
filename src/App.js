import React, {useState} from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';




function App() {
  // const [todos, setTodos] = useState(initialTodos);
  
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
