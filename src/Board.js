import React, {Component} from 'react';
import './Board.css';
import Square from './Square';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      squares: [
        null, null, null,
        null, null, null,
        null, null, null
      ],
      next: 'X',
      winner: null
    };
  }

  render() {
    let w = this.isThereAWinner();

    return (
      <div>
        {this.renderStatus(w)}

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
    ); //squares;
  }

  renderStatus(winner){
    if (winner){
      return (<span> `The winner is ` {winner}</span>);
    }
    return (
      <div className="status">next player is {this.state.next}</div>);
  }

  handleClick(i){
    let s = this.state.squares.slice();

    let noMore = this.isThereAWinner() || s[i] !== null;
    if (noMore) return;

    let current = this.state.next;
    s[i] = current;
    let n = (current === 'X') ? 'O' : 'X';
    this.setState({squares: s, next: n});
  }

  isThereAWinner(){
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    let s = this.state.squares;
    for(let three of winCombinations){
      let [a, b, c] = three;
      if (a && s[a] === s[b] && s[b] === s[c]){
          let winner = s[a];
          return winner;
      }
    }
    return null;
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}/>);
  }
}

export default Board;
