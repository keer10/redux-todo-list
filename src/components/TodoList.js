import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";
import TodoItem from "./TodoItem";

function TodoList({ list }) {
  const newIndexToDelete = useSelector((state) => state.indexToDelete);

  const dispatch = useDispatch();
  const renderTodoList = () => {
    return list.map((todoItem, i) => {
      return <TodoItem key={todoItem.id} item={todoItem} idx={i} />;
    });
  };
  return (
    <div>
      {renderTodoList()}
      {newIndexToDelete.length > 0 && (
        <div className="save-btn">
          <button style={{ width: "100px" }}  onClick={() =>dispatch(allActions.deleteTodos(newIndexToDelete))} className="btn btn-primary">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
