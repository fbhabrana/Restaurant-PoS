// src/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
