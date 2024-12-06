import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Home Projects Hobby</h1>
      </header>
      
      <div className="profile-container">
        <img src="/assets/me.jpg" alt="Profile" className="profile-img" />
        <div className="profile-text">
          <h1>I am an Artist</h1>
          <p>Contact info: 598088977</p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
          <p>Email: <a href="mailto:ananokemo9@gmail.com">ananokemo9@gmail.com</a></p>
          
          <div className="nav-buttons">
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/hobby" className="btn">Hobby</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
