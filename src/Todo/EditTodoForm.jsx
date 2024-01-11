import { useState } from "react";
function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id);
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
      <button type="submit">Update</button>
    </form>
  );
}
export default EditTodoForm;
