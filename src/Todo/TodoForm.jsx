import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
