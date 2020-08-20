import React, {useState} from 'react';
import {connect} from 'react-redux';
import {add_todo} from './../actions';

const TodoForm= (props)=>{
    const [todo, setTodo] = useState('');

    const {add} = props;
    const addTodo =  ()=> {
        add(todo)
    }

    console.log(todo);
    return <div>
        <input
            onChange={(e)=>{
                setTodo(e.target.value);
            }}
            value={todo}
        />
        <button onClick={addTodo}>
            +
        </button>
    </div>
}

const mapDispatchToProps =(dispatch)=>({
    add:(todo) =>  dispatch(add_todo(todo))
});

export default connect(null, mapDispatchToProps)(TodoForm);