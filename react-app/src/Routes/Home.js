import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }

  removeOne() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name1} and {this.props.name2}</h1>
        <p>Counter : {this.state.count}</p>
        <button onClick={() => this.addOne()}>Add 1</button>
        <button onClick={() => this.removeOne()}>Minus 1</button>
      </div>
    );
  }
}

export default Home;