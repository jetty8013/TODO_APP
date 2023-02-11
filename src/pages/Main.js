import React from "react";
import '../App.css';
import Calendar from "../component/Calendar";
import Profile from "../component/Profile";
import TodoList from "../component/TodoList";

function Main() {
  return(
    <>
        <Profile />
        <Calendar />
        <TodoList />
    </>
  )
}

export default Main;