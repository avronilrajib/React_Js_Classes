import React, { useEffect, useState } from "react";

function FetchingData() {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <h1>FetchingData</h1>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.completed}</p>
          </div>
        ))}
    </div>
  );
}

export default FetchingData;
