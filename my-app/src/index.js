import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function components such as Square are stateless render-only components
function Square(props) {
  return (
    <button
      className="square"
      data-testid={`aa${props.index}`}
      onClick={props.sqrOnClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  step = 0;
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return (
      // pass method as a prop so that square can call it
      // why not directly use onClick here instead of square

      <Square
        index={i}
        value={this.state.squares[i]}
        sqrOnClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    // create a copy - Data Change without Mutation
    // Main benefit: Immutable data helps to determine when a component requires re-rendering
    // https://reactjs.org/tutorial/tutorial.html#complex-features-become-simple
    let tempSquares = this.state.squares.slice();
    if (tempSquares[i] || calculateWinner(tempSquares)) return;
    this.step++;

    tempSquares[i] = this.step % 2 ? "X" : "O";
    this.setState({ squares: tempSquares });
  }

  render() {
    let status;
    const winner = calculateWinner(this.state.squares);
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.step % 2 ? "O" : "X");
    }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

// ReactDOM.render(<Game />, document.getElementById("root"));

export default Game;
