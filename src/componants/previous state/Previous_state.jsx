import React, { useState } from "react";

export default function Previous_state() {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
