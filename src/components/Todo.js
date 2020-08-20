import React from 'react';
import {connect} from 'react-redux';

import {toggle_todo, remove_todo} from './../actions';

const Todo = (props) =>{
    console.log(props);

    const {toggle, remove} = props;

    const toggleTodo =()=>{
        toggle(props.id);
    }

    const removeTodo =()=>{
        remove(props.id);
    }

    return <div className="list-item">
                <div onClick={toggleTodo}>
                    { props.completed ? "---------": <p>{props.id} . {props.task}</p>}
                </div>
                <button onClick={removeTodo}>X</button>
            </div>
}

// const mapStateToProps = (state)=>{
//     return {
//         id: state.id,
//         task: state.task,
//         completed: state.completed
//     };
// }

const mapDispatchToProps = (dispatch)=>{
    return{
        toggle:(id) => { dispatch(toggle_todo(id))},
        remove:(id) => { dispatch(remove_todo(id))}
    }
}

export default connect(null, mapDispatchToProps)(Todo);