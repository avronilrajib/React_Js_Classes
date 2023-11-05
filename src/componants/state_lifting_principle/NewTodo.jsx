import React, { useState } from "react";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          id="todo"
          name="todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
