import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import EditTodoForm from "./EditTodoForm";
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
  const editForm = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div>
      <h1>What to do</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((item, index) =>
        // console.log(item)
        item.isEditing ? (
          <EditTodoForm editTodo={editTask} task={item} key={item.id} />
        ) : (
          <TodoList
            data={item}
            key={index}
            toggleComplete={toggle}
            deleteData={deleteTodo}
            editTodoForm={editForm}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
