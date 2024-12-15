import { useState } from "react";
import "./Counter.css";

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter-container">
      <h2 className="Project-heading">Counter App</h2>
      <h3>Count: {count}</h3>
      <p>Step value: {step}</p>
      <div className="step">
        <label htmlFor="number">Increase/Decrease by:</label>
        <input
          type="number"
          id="number"
          value={step.toString()}
          onChange={(e) => {
            // console.log(typeof e.target.value, e.target.value);
            setStep(Number(e.target.value));
            // console.log("After Number conversition:", Number(e.target.value));
          }}
        />
      </div>
      <div className="buttons">
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={() => setCount(count - step)}>Decrement</button>
      </div>
    </div>
  );
}

export default Count;
