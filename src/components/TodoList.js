import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';

const TodoList = (props) =>{

    const {todos} = props;
    console.log("prabhu");
    return <div>
        {
            todos.map((todo)=>{
            return <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}/>
            })
        }
    </div>
}

const mapStateToProps = (state)=>{
    return {
        todos: state
    };
}

export default connect(mapStateToProps)(TodoList);