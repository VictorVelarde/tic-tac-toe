import React, {Component} from 'react';
import './Square.css';

class Square extends Component {

  constructor() {
    super();
    this.state = {
      value: null
    }
  }

  mark() {
    this.setState({value: 'x'});
  }

  render() {
    return (
      <button className="square" onClick={() => this.mark()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
