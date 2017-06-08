import React, {Component} from 'react';

import Square from './Square';

class Board extends Component{

  constructor(){
    super();
    this.state = {
      squares: [
        null, null, null,
        null, null, null,
        null, null, null
      ]};
  }

  render(){
    let status = 'Next player is: X';

    let elements = [];
    for(let i=1; i<10; i++){
      elements.push(this.renderSquare(i));
      let endOfRow = (i % 3 === 0);
      endOfRow && elements.push(<br/>);
    }
    console.log(elements);

    return (
      <div>
        <h2>{status}</h2>
        {elements}
      </div>
    ); //squares;
  }

  renderSquare(i){
    return (
      <Square key={i} value={this.state.squares[i]} />
    );
  }
}

export default Board;
