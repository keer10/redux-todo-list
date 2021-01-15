import ActionType from "../actions/types";

const initialState = {
  todos: [],
  maxLengthId: 0,
  pendingTasksCount: 0,
  indexToDelete: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        pendingTasksCount: action.payload.length,
      };
    case ActionType.ADD_TODO:
      return state;
    case ActionType.REMOVE_ITEM:
      return state.todos;
    case ActionType.UPDATE_MAX_ID:
      return { ...state, maxLengthId: action.payload };

    case ActionType.TOGGLE_TODO:
      let newIndexToDelete = [];
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDeleted = todo.isDeleted ? false : true;
        }
        return todo;
      });
      newTodos.forEach((todo) => {
        if (todo.isDeleted) {
          newIndexToDelete.push(todo.id);
        }
      });
      return {
        ...state,
        todos: newTodos,
        indexToDelete: newIndexToDelete,
      };
    default:
      return state;
  }
};

export default rootReducer;
