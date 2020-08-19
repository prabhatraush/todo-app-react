import React, {useState} from 'react';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const initialTodos=[
  {
    id:1,
    task:'prepare for test on javascript'
  },
  {
    id:2,
    task:'be ready for tommorrow interview'
  },
  {
    id:3,
    task:'read the task based on redux'
  }
  
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  return (
    <div className="App">
      <TodoForm setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
