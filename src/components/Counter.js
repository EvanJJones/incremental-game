import React, { useState, useEffect, useRef } from "react";

// By extending the React.Component class, Counter inherits functionality from it
function Counter() {
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

  const changeAutoValue = changeValue => {
    setAutoValue(autoValue + changeValue);
  };

  const changeAutoDelay = changeValue => {
    setAutoDelay(autoDelay + changeValue);
  };

  const changeClickValue = changeValue => {
    setClickValue(clickValue + changeValue);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>
        Tick Delay: {autoDelay}
        <button onClick={() => changeAutoDelay(100)}>+</button>
        <button onClick={() => changeAutoDelay(-100)}>-</button>{" "}
      </p>
      <p>
        Value Per Tick: {autoValue}{" "}
        <button onClick={() => changeAutoValue(1)}>+</button>
        <button onClick={() => changeAutoValue(-1)}>-</button>
      </p>
      <p>
        Click Value: {clickValue}
        <button onClick={() => changeClickValue(1)}>+</button>
        <button onClick={() => changeClickValue(-1)}>-</button>
      </p>
      <button onClick={click}>Increment</button>
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

export default Counter;
