import React from "react";
import "./todo.css";
function TodoList({ data, toggleComplete, deleteData, editTodoForm }) {
  console.log(data);
  return (
    <>
      <div className={data.completed ? "complete" : "non"}>
        <h2 onClick={() => toggleComplete(data.id)}>{data.task}</h2>
        <button onClick={() => editTodoForm(data.id)}>Edit</button>
        <button onClick={() => deleteData(data.id)}>Delete</button>
      </div>
    </>
  );
}

export default TodoList;
