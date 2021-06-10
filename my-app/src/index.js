import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

class Square extends React.Component {  
  render() {
    return (
      <button className="square"  onClick={ () => this.setState({value: 'X'})}>
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
          <Board />
      </div>
    );
  }

  fetchData() {
    axios.get("https://fantasy.premierleague.com/api/bootstrap-static/", {mode: 'no-cors'})
    .then(res => console.log(">", res)).catch(err => console.log(err));
  }
}



// ========================================

ReactDOM.render(
  <AppMain />,
  document.getElementById('root')
);
