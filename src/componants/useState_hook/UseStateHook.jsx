import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handledec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handlePlus}>Increment</button>
      <button onClick={handledec}>Decrement</button>
    </div>
  );
}
