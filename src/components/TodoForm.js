import React, {useState} from 'react';

function addTodo(setTodos, todos, todo)
{
    todos.push(todo);
    setTodos(todos);
    console.log(todos);
}

const TodoForm= (props)=>{
    const [todo, setTodo] = useState({});
    console.log(props);
    return <div>
        <input
            onChange={(e)=>{
                setTodo({id:props.todos.length+1, task: e.target.value});
            }}
        />
        <button
            onClick={()=>{
                
                console.log(props.todos);
                addTodo(props.setTodos, props.todos,todo);
            }}
        >
            +
        </button>
    </div>
}

export default TodoForm;