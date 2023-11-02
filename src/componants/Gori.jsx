import React from "react";
import ReactDOM from "react-dom";

class Gori extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), local: "bn-BD" };
    this.handleClick = this.handleClick.bind(this);
  }
  //state = { date: new Date(), local: "bn-BD" };

  //another function
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  // event function
  handleClick = (local) => {
    this.setState({
      local,
    });
  };
  //timer function
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  //render method
  render() {
    const { date, local } = this.state;
    return (
      <div className="UsTimer">
        <h2>{date.toLocaleTimeString(local)}</h2>
        {/* handle Event */}
        <button onClick={this.handleClick.bind(this, "en-US")}>click</button>
      </div>
    );
  }
}

export default Gori;
