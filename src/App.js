import "./App.css";
import {useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Todo from "./components/Todo";
import allActions from "./actions/index";

function App() {


  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(allActions.fetchTodos());  
  }, []);

  return (
    <div className="App">
      <Todo list={todoList} />
    </div>
  );
}

export default App;
