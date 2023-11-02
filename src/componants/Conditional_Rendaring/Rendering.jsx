import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
export default class Rendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isinfo: false,
    };
  }

  render() {
    const { isinfo } = this.state;
    const rendering = isinfo ? <HomePage /> : <LoginPage />;
    return (
      <div>
        <h1>{rendering}</h1>
      </div>
    );
  }
}
