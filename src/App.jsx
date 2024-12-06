import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Hobby from "./components/Hobby";
import HobbyDetail from "./components/HobbyDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/hobby/:hobbyName" element={<HobbyDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
