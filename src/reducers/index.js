

  function todos(state=[], action){
      switch(action.type)
      {
        case 'ADD_TODO':
          console.log("ADD_TODO");
          console.log(action);
            return [
                ...state,
                {
                id: action.id,
                task: action.task,
                completed: false
                }
            ];
        
        case 'TOGGLE_TODO':
          console.log("TOGGLE_TODO");
            return (state.map(todo=>{
                return todo.id === action.id ? {...todo, completed: !todo.completed }: todo
            }));
        
        case 'REMOVE_TODO':
          console.log("REMOVE_TODO");
            return state.filter(todo=>{
                return todo.id !== action.id 
            });
        
        default:
          return state;
        
      }
  }

  export default todos;

