import React from "react";
import languagesData from "./languageData.js";
import "./LanguageMV.css";

const Language = () => {
  return (
    <div className="language-class-container">
      <div className="page-heading">
        <h2 className="languageMV-main-heading">Programming Multiverse</h2>
      </div>
      <div className="language-cards-container">
        {languagesData.map((language) => (
          <div key={language.name} className="cards">
            <h2 className="language-name">{language.name}</h2>
            <div className="language-description">
              <p>Year of Start: {language.year}</p>
              <p>Creator: {language.creator}</p>
              <p>Use Case: {language.usecase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
