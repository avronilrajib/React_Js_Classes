import React, { useState } from "react";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummytodos = ["Rajib", "Avronil"];

export default function Home() {
  const [todos, setTodo] = useState(dummytodos);

  const handleNewTodo = (newTodo) => {
    setTodo([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
}
