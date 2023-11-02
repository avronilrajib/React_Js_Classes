import React, { Component } from "react";

export default class EventClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
    //Binding Processing. passing this on handleOnChange methods
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.setState(
      {
        changeValue: event.target.value,
      },
      () => {
        console.log(event.target.value);
      }
    );
  }
  handleclick = () => {
    console.log("clicked");
  };
  render() {
    const { changeValue } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} name="" id="" />
        <button onClick={this.handleclick}>click here</button>
        <h2>{changeValue}</h2>
      </div>
    );
  }
}
