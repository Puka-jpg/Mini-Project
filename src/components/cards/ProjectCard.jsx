import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ title, description, projectLink, date }) {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate(projectLink);
  };

  return (
    <div className="card-container">
      <div className="title">
        <h3 className="card-heading">{title}</h3>
        <p id="description">{description}</p>
        <p id="date">{date}</p>
        <button className="button" onClick={handleclick}>
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
