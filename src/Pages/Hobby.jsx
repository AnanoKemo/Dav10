import React from "react";
import { Link } from "react-router-dom";
import './Hobby.css';

const Hobby = () => {
  return (
    <div className="hobby-container">
      <header className="header">
        <h1>Home Projects Hobby</h1>
      </header>

      <div className="hobby-boxes">
        <div className="hobby-box">
          <h2>Painting</h2>
          <Link to="/hobby/painting" className="btn">Show More</Link>
        </div>
        <div className="hobby-box">
          <h2>Playing Drums</h2>
          <Link to="/hobby/drums" className="btn">Show More</Link>
        </div>
        <div className="hobby-box">
          <h2>Writing Books</h2>
          <Link to="/hobby/writing" className="btn">Show More</Link>
        </div>
        <div className="hobby-box">
          <h2>Reading</h2>
          <Link to="/hobby/reading" className="btn">Show More</Link>
        </div>
      </div>

      <div className="nav-buttons">
        <Link to="/" className="btn">Home</Link>
        <Link to="/projects" className="btn">Projects</Link>
      </div>
    </div>
  );
};

export default Hobby;
