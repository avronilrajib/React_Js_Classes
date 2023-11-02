import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, desc } = this.props;
    return (
      <>
        <div>
          <h2>Card</h2>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </>
    );
  }
}
