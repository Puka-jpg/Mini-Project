import { React, useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      // Start counting
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
    }
    // Clean up the interval when component unmounts or running changes
    return () => clearInterval(intervalId);
  }, [running]); // Only re-run effect when running state changes

  return (
    <div>
      <h1>StopWatch</h1>
      <div>
        <span>{String(Math.floor((time / 60000) % 60)).padStart(2, "0")}</span>:
        <span>{String(Math.floor((time / 1000) % 60)).padStart(2, "0")}</span>:
        <span>{String(Math.floor((time / 10) % 100)).padStart(2, "0")}</span>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
