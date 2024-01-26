import { useState, useRef } from "react";

function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });

    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="newTask">
          New Task:
          <input ref={inputRef} type="text" placeholder="New Task" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h3>To Do List</h3>
      {items.map((item) => (
        <div key={item}>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
