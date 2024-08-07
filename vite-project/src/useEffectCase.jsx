// useEffect

// event listener
// Dom manipulation
// network request

// useEffect(() => {}) //-> render only once
// useEffect(() => {}, []) // -> mount and
// useEffect(() => {}, [count]) // -> mount and value change

import { useEffect, useState } from "react";

function UseEffectCase() {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");
    return () => {
      console.log("useEffect Clean up");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    document.title = `${`Width: ${width} x Height: ${height}`}`;

  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>{count}</p>
      <p>{number}</p>
      <p>
        {width} x {height}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* <button onClick={() => setCount(count+0)}>Pulse0</button> */}
      <button onClick={() => setNumber(number + 1)}>Pulse1</button>
    </div>
  );
}

export default UseEffectCase;
