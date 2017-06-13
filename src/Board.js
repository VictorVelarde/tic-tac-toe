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
      next: 'X'
    };
  }

  render() {

    return (
      <div>
        <div className="status">next player is {this.state.next}</div>

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

  handleClick(i){
    let s = this.state.squares.slice();
    let current = this.state.next;
    s[i] = current;
    let n = (current === 'X') ? 'O' : 'X';
    this.setState({squares: s, next: n});
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
