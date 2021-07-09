import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import { Alert, Button } from "react-bootstrap";
import "./index.css";

// https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
// npm star

let teams = null;

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

class Teams extends React.Component {
  render() {
    return <p>- {this.state.teamName}</p>;
  }

  constructor(props) {
    super(props);
    this.state = {
      teamName: 'a',
    };
  }
}

class AppMain extends React.Component {
  render() {
    teams = "...";
    return (
      <div className="app-container">
        <div className="header-container">
          <div className="row">
            <div className="col-5">
              <h1>Soccer data craze.</h1>
            </div>
            <div className="col-7">
              <h4>
                Learn from the past and guess the final result. That includes
                the first half!
              </h4>
            </div>
          </div>
        </div>
        <div className="body-container">
          Teams:{" "}
          {this.state.teams?.map((el) => (
            <Teams teamName={el} />
          ))}
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

  fetchData() {
    return axios
      .get("https://fantasy.premierleague.com/api/bootstrap-static/", {
        mode: "no-cors",
      })
      .then((res) => {
        console.log("res", res);
        this.data = res.data;
        this.setState({ teams: this.data.teams.map((d) => d.name) });
        console.log("teams: ", this.teams);
      })
      .catch((err) => console.error("error:", err)); // catch cors errors
  }

  constructor(props) {
    super(props);
    let data;

    this.state = {
      value: null,
      teams: null,
    };
    this.fetchData();
    console.log("data", this.data);
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
