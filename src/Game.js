import React, {Component} from 'react';

import Board from './Board';

class Game extends Component {
    constructor(){
        super();
        this.state = {
            history: [
                { squares: Array(9).fill(null) }
            ],
            xIsNext: true,
            stepNumber: 0
        }
    }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  goTo(step) {
    console.log('You have time-traveled to ', step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, i) => {
      console.log(step, i);
      const description = (i !== 0) ? '# ' + i : 'START';
      return (
        <li key={i}>
          <a href='#' onClick={() => this.goTo(i)}>{description}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <h1>Hi tic-tac-toe</h1>
        <div className='game-board'>
            <Board squares={current.squares}
            onClick={(i)=> this.handleClick(i)}/>
        </div>
        <div className='game-info'>
            <div>{status}</div>
            <ul>{moves}</ul>
        </div>
      </div>
    );
  }

  calculateWinner(squares) {
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
}

export default Game;
