import React, {Component} from 'react';

import Square from './Square';

class Board extends Component{
  render(){
    let squares = [];
    for(let i=0; i<10; i++){
      squares.push(this.renderSquare(i));
    }
    console.log(squares);

    return (
      <div>{squares}</div>
    ); //squares;
  }

  renderSquare(i){
    return <Square key={i} value={i}/>;
  }
}

export default Board;
