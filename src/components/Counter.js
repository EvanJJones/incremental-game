import React, { useState, useEffect, useRef } from "react";

// By extending the React.Component class, Counter inherits functionality from it
function Counter() {
  // Setting the initial state of the Counter component
  const [count, setCount] = useState(0);
  const [autoDelay, setAutoDelay] = useState(1000);
  const [autoValue, setAutoValue] = useState(1);
  const [clickValue, setClickValue] = useState(5);

  useInterval(() => {
    // Your custom logic here
    setCount(count + autoValue);
  }, autoDelay);

  const click = () => {
    setCount(count + clickValue);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={click}>
          Increment
        </button>
      </div>
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
