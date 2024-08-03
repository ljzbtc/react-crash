import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const resetCounter = () => {
    setCount(0);
  };
  const decreseCounter = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="click-button" onClick={increaseCounter}>
        Increase
      </button>
      <button className="click-button" onClick={resetCounter}>
        Reset
      </button>
      <button className="click-button" onClick={decreseCounter}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
