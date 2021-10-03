import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
// https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
// npm start

// ========================================

ReactDOM.render(
  // <Provider store="this.props.store">

  // </Provider>
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
    , document.getElementById("root")
  </ReduxProvider>
);
