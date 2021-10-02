import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/homePage";
import Login from "./components/login";
import Nav from "./components/nav";
import notFound from "./components/404";
let teams = null;

function App() {
  return (
    <div className="app-container p-4">
      <div className="header-container">
        <div className="grid row">
          <div className="col-5">
            <h1>Soccer data craze.</h1>
          </div>
          <div className="col-7">
            <Nav />
          </div>
        </div>
      </div>
      {/* switch is needed so that once a valid route match is found, it no longer checks below routes */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route component={notFound} />
      </Switch>

      <div className="footer-container"></div>
      {/* <Alert variant='primary' className="flex flex-row" >Zeresk behkhor</Alert>
        <Board /> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
    </div>
  );
}

let fetchData = () => {
  console.log("fetchData");
  return axios
    .get("https://fantasy.premierleague.com/api/bootstrap-static/", {
      mode: "no-cors",
    })
    .then((res) => {
      console.log("res.data: ", res.data);
      teams = res.data.teams;
      // this.setState({ teams: this.data.teams.map((d) => d.name) });
      this.setState({ teamstate: teams });
      console.log("teams: ", teams);

      // teams = ['b'];
    })
    .catch((err) => console.error("error:", err)); // catch cors errors
};

// constructor(props) {
//   super(props);
//   this.state = {};
//   this.fetchData();
// }

export default App;
