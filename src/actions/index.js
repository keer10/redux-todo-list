import ACTION from "./types";
import * as TodoAPI from "../api/todo";
import Todo from "../components/Todo";

export const fetchTodos = () => {
  return (dispatch) => {
    TodoAPI.getTodoItems().then((todos) => {
      let maxId = 0;
      todos.forEach((item) => {
        maxId = Math.max(maxId, item.id);
      });
      dispatch({ type: ACTION.FETCH_TODOS, payload: todos });
      dispatch(updateMaxLengthId(maxId));
      
    });
  };
};

export const addTodo = (item) => {
  return (dispatch) => {
    TodoAPI.addTodoItem(item).then((res) => {
      dispatch({ type: ACTION.ADD_TODO });
      dispatch(fetchTodos());
    });
  };
};


export const updateMaxLengthId = (maxID) => {
  return {
    type: ACTION.UPDATE_MAX_ID,
    payload: maxID,
  };
};

export const toggleTodo = (item) => {
    return {
        type: ACTION.TOGGLE_TODO,
        payload: item
    }
}

export const deleteTodos = (ids) => {
    return (dispatch) => {  
        ids.forEach(id => {
            TodoAPI.removeItem(id).then(res => {
                console.log(res);
            }).catch(err => console.log(err))
        });
        dispatch(fetchTodos());
       
    }
}

const allActions = {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodos
};

export default allActions;
