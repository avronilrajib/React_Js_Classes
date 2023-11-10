import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [loding, setLoding] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("UseEffect");
  }, [count]);
  return (
    <div>
      {console.log("rendring")}
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+</button>
      <button
        onClick={() => {
          setLoding(!loding);
        }}
      >
        Loding
      </button>
    </div>
  );
}

export default UseEffect;
