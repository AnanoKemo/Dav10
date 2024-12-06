import React from "react";
import { useParams, Link } from "react-router-dom";

const HobbyDetail = () => {
  const { hobbyName } = useParams();

  return (
    <div className="hobby-detail-container">
      <header className="header">
        <h1>Home Projects Hobby</h1>
      </header>

      <div className="hobby-detail">
        <h1>{hobbyName}</h1>
        <p>Why I love {hobbyName}...</p>
        <Link to="/hobby" className="btn">Back</Link>
      </div>
    </div>
  );
};

export default HobbyDetail;
