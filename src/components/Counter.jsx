import React, { useState, useEffect } from "react";
import { useInterval } from "./useInterval"

function isOdd(num) { return num % 2 };

export const Counter = () => {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);
  let [isRunning, setIsRunning] = useState(false)


  // example of setInterval using custom hook
  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);


  // example of setTimeout, delays timer start by two seconds and then clearsTimeout to prevent mem leaks bro
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("beep boop")
      setIsRunning(true);
    }, 2000)
    return () => clearTimeout(timeout);
  })

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <>
      <h1>{count}</h1>
      <p>Delay of the counter (in ms)</p>
      <input value={delay} onChange={handleDelayChange} />

      <h2>Is the count an odd number? If yes, the box will fill red.</h2>
      <div className="isOdd" style={{ background: isOdd(count) ? "red" : "white" }}/>
    </>
  );
}
