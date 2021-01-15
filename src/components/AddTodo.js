import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");

  const maxId = useSelector((state) => state.maxLengthId);
  const dispatch = useDispatch();
  const addTodoItem = () => {
    const item = { id: maxId + 1, text: inputValue };
    dispatch(allActions.addTodo(item));
    setInputValue("");
  };

  return (
    <div className="todo-input-box">
      <input
        className="todo-input flex-9"
        placeholder="Please enter new task"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={addTodoItem} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default AddTodo;
