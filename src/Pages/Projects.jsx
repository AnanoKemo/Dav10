import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <header className="header">
        <h1>Home Projects Hobby</h1>
      </header>

      <div className="project-content">
        <img src="/assets/react.png" alt="React" className="project-img" />
        <div className="project-text">
          <h1>Project Overview</h1>
          <div className="project-buttons">
            <a href="https://github.com/AnanoKemo/Davaleba9" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            <a href="https://vercel.com/ananokemos-projects/davalebaa9" target="_blank" rel="noopener noreferrer" className="btn">Vercel</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
