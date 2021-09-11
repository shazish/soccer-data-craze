import React from "react";
import "./App.css";
import TeamsMini from "./components/teamsMini";
import axios from "axios";

import HomePage from "./components/homePage";
import Nav from "./components/nav";
let teams = null;

class App extends React.Component {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  render() {
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
        <div className="body-container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Team</th>
                <th scope="col">Team abbr.</th>
                <th scope="col">Strength</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamstate?.map((el) => (
                <TeamsMini team={el} />
              ))}
            </tbody>
          </table>
        </div>
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

  fetchData = () => {
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

  constructor(props) {
    super(props);
    this.state = {};
    this.fetchData();
  }
}

export default App;
