import { useEffect, useState, useRef } from "react";
import "./StopWatch.css";
function formatTime(milliseconds) {
  const totalCentiseconds = Math.floor(milliseconds / 10);
  const minutes = Math.floor(totalCentiseconds / 6000);
  const seconds = Math.floor((totalCentiseconds % 6000) / 100);
  const centiseconds = totalCentiseconds % 100;

  const format = (num) => num.toString().padStart(2, "0");
  return `${format(minutes)}:${format(seconds)}:${format(centiseconds)}`;
}

function StopWatch() {
  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);
  const startimeRef = useRef(0);

  function handleStart() {
    if (intervalRef.current !== null) {
      return;
    }

    startimeRef.current = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startimeRef.current);
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function handleReset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <div className="stopwatch">
      <h1>StopWatch</h1>
      <p className="time">{formatTime(time)}</p>
      <div className="controls">
        <button className="start" onClick={handleStart}>
          Start
        </button>
        <button className="stop" onClick={handleStop}>
          Stop
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
