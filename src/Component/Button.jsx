import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={increaseCounter}>Increment Button</button>
      <h1>Counter : {count}</h1>
      <button onClick={decreaseCounter}>Decrement Button</button>
    </>
  );
}

export default Button;
