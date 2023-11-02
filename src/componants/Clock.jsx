import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //state = { date: new Date() };
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  render() {
    return (
      <div className="Header">
        <h1>Bangladesh Time</h1>
        <h2>{new Date().toLocaleTimeString(this.props.local)} </h2>
      </div>
    );
  }
}

export default Clock;
