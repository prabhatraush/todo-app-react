import React from 'react';

const TodoList = (props) =>{
    console.log(props.todos);
    console.log("prabhu");
    return <div>
        {
            props.todos.map((todo)=>{
            return <div className="list-item">
                <div>{todo.id}. {todo.task}</div>
                <button >X</button></div>
            })
        }
    </div>
}

export default TodoList;