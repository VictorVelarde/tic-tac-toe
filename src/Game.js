import React, {Component} from 'react';

import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Hi tic-tac-toe</h1>
        <Board/>
      </div>
    );
  }
}

export default Game;
