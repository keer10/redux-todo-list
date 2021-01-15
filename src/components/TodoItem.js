import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../actions";
import ActionType from "../actions/types";

function TodoItem({ item, idx }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`todo-list-item ${item.isDeleted ? "striked" : ""}  `}
      onClick={() => dispatch(allActions.toggleTodo(item.id))}
    >
      {idx + 1}. {item.text}
    </div>
  );
}

export default TodoItem;
