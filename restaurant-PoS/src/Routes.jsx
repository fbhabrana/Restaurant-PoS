// src/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
