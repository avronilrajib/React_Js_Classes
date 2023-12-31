import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleincement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecriment = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={this.handleincement}
          disabled={count == 10 ? true : false}
        >
          +
        </button>
        <button
          onClick={this.handleDecriment}
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
