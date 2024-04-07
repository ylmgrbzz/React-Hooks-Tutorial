import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementSix = () => {
    for (let i = 0; i < 6; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementSix}>Increment 6</button>
    </div>
  );
};

export default HookCounterTwo;
