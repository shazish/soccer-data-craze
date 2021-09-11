import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
// npm start

// ========================================

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
