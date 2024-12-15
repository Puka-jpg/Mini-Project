import React, { useState, useEffect } from "react";
import "./BGChanger.css";

function ColorChanger() {
  // Using state instead of a regular variable
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  useEffect(() => {
    console.log("Color updated to:", backgroundColor);
  }, [backgroundColor]);

  return (
    <div className="app-container" style={{ backgroundColor: backgroundColor }}>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ColorChanger;
