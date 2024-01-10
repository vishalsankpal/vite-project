import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  let [uid, setUid] = useState(0);
  const addTodo = (todo) => {
    setUid(uid + 1);
    setTodos([
      ...todos,
      {
        id: uid,
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };
  const toggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>What to do</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((item, index) => (
        // console.log(item)
        <TodoList
          data={item}
          key={index}
          toggleComplete={toggle}
          delete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;
