import React, { useState, useEffect, useRef } from "react";

function Container() {
  // Setting the initial state of the Counter component
  const [count, setCount] = useState(0);
  const [autoDelay, setAutoDelay] = useState(1000);
  const [autoValue, setAutoValue] = useState(1);
  const [clickValue, setClickValue] = useState(1);

  useInterval(() => {
    // Your custom logic here
    setCount(count + autoValue);
  }, autoDelay);

  const click = () => {
    setCount(count + clickValue);
  };

  const increaseAutoValue = () => {
    setAutoValue(autoValue + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Tick Delay: {autoDelay} </p>
      <p>Value Per Tick: {autoValue} </p>
      <p>Click Value: {clickValue}</p>
      <button onClick={click}>Increment</button>
      <button onClick={increaseAutoValue}>increaseAutoValue</button>
    </div>
  );
}

// from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Container;
