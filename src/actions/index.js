
let toDoId=0;
export const add_todo = (task) =>{
    return {
        type:'ADD_TODO',
        id: toDoId++,
        task
    }
}

export const remove_todo = (id) =>{
    return {
        type:'REMOVE_TODO',
        id
    }
}

export const toggle_todo = (id) =>{
    return {
        type:'TOGGLE_TODO',
        id
    }
}