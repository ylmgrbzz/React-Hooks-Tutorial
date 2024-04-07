import React, { useState } from "react";

const HookCounterFive = () => {
  const [items, setItems] = useState([]);
  return (
    <div>
      <button
        onClick={() =>
          setItems([
            ...items,
            { id: items.length, value: Math.floor(Math.random() * 10) },
          ])
        }
      >
        Add a number
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFive;
