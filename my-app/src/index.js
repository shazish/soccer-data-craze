import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Alert, Button } from 'react-bootstrap';
import './index.css';

// https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
// npm star

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

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


class AppMain extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="header-container">
          <div class="row">
            <div class="col-5">
              <h1>Soccer data craze.</h1>
            </div>
            <div class="col-7">
              <h4>Learn from the past and guess the final result. That includes the first half!</h4>
            </div>
          </div>
        </div>
        <div className="body-container">

        </div>
        <div className="footer-container">

        </div>
        <Alert variant='primary' className="flex flex-row" >Zeresk behkhor</Alert>
        <Board />
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
    axios.get("https://fantasy.premierleague.com/api/bootstrap-static/", { mode: 'no-cors' })
      .then(res => console.log(">", res)).catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
    // this.state = {
    //   value: null,
    // }
    this.fetchData();
  }
}



// ========================================

ReactDOM.render(
  <AppMain />,
  document.getElementById('root')
);
