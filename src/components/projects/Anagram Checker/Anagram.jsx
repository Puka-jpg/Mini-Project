import React from "react";
import { useState } from "react";
import "./Anagram.css";

function Anagram() {
  const [firstWord, setFirstWord] = useState("");

  const [secondWord, setSecondWord] = useState("");

  const [result, setResult] = useState(null);

  const handleFirstWordChange = (event) => {
    if (event.key === "Enter") {
      console.log(firstWord);
      setFirstWord(event.target.value);
    }
  };

  const handleSecondWordChange = (event) => {
    if (event.key === "Enter") {
      console.log(secondWord);
      setSecondWord(event.target.value);
    }
  };

  const checkSimilarity = () => {
    // console.log("Button clicked");
    // console.log("first word:", firstWord);
    // console.log("secondWord word:", secondWord);
    const word1 = firstWord.toLowerCase();
    const word2 = secondWord.toLowerCase();

    const same = word1 === word2;
    setResult(same);

    console.log("Are they same?", same);
  };

  return (
    <div className="main-container">
      <div className="anargam-page-heading">
        <h1>Anargam Checker</h1>
      </div>
      <div className="Check-container">
        <div className="first-word">
          <label htmlFor="firstword">Enter first word for comparision:</label>{" "}
          <input
            type="text"
            className="firstword"
            id="firstword"
            onChange={(e) => {
              setFirstWord(e.target.value);
              console.log(e.target.value);
            }}
            onKeyDown={handleFirstWordChange}
            value={firstWord}
          />
        </div>
        <div className="second-word">
          <label htmlFor="secondword">Enter second word for comparision:</label>{" "}
          <input
            type="text"
            className="secondword"
            id="secondword"
            onChange={(e) => setSecondWord(e.target.value)}
            onKeyDown={handleSecondWordChange}
            value={secondWord}
          />
        </div>

        <button className="check-similar" onClick={checkSimilarity}>
          Check similarity
        </button>
        <p>
          Output:{" "}
          {result === null
            ? "Click button to check"
            : result
            ? "Words are same"
            : "Words are different"}
        </p>
      </div>
    </div>
  );
}
export default Anagram;
