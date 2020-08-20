import React, {useState} from 'react';
import {connect} from 'react-redux';
import {add_todo} from './../actions';

const TodoForm= (props)=>{
    const [todo, setTodo] = useState('');

    const {add} = props;
    const addTodo =  ()=> {
        add(todo)
    }

    const errorMsg =() =>{
        alert("Enter a task");
    }

    console.log(todo);
    return <div>
        <input
            onChange={(e)=>{
                setTodo(e.target.value);
            }}
            placeholder="add ToDo Task"
            value={todo}
        />
        <button onClick={todo? addTodo:errorMsg}>
            +
        </button>
    </div>
}

const mapDispatchToProps =(dispatch)=>({
    add:(todo) =>  dispatch(add_todo(todo))
});

export default connect(null, mapDispatchToProps)(TodoForm);