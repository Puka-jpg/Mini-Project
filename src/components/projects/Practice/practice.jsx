import { React, useState, useEffect } from "react";

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [count, setCount] = useState(0);

  // Effect that runs on every render
  useEffect(() => {
    console.log("Effect 1: I run on every render!");
  });

  // Effect that runs only when color changes
  useEffect(() => {
    console.log("Effect 2: I run only when color changes!");
  }, [backgroundColor]);

  return (
    <div style={{ backgroundColor, height: "100vh", width: "100%" }}>
      <button
        onClick={() =>
          setBackgroundColor(
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
          )
        }
      >
        Change Color
      </button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default ColorChanger;
