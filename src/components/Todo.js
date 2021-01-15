import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todo({ list }) {
  console.log("list ", { list });

  const pendingTaskCount = useSelector((state) => state.pendingTasksCount);
  return (
    <div className="container">
      <header className="text-center">
        <h1>Todo App</h1>
      </header>
      <section className="todo-count">
        <p>Todo's pending is: {pendingTaskCount}</p>
      </section>
      <section>
        <AddTodo />
      </section>
      {list.length > 0 && (
        <section className="todo-list">
          <TodoList list={list} />
        </section>
      )}
    </div>
  );
}

export default Todo;
