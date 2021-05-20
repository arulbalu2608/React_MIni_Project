import React, { Component } from "react";
import { Input, Button } from "reactstrap";

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: "",
      g: "",
      b: "",
    };
  }
  valuechangeforR = (event) => {
    this.setState({
      r: event.target.value,
    });
  };
  valuechangeforG = (event) => {
    this.setState({
      g: event.target.value,
    });
  };
  valuechangeforB = (event) => {
    this.setState({
      b: event.target.value,
    });
  };
  backchange = () => {
    document.body.style.background = `rgb(${this.state.r},${this.state.g},${this.state.b})`;
  };

  render() {
    return (
      <div className="container">
        <center>
          {" "}
          <h1>Change Background using RGB</h1>
          <br />
          <Input
            type="number"
            value={this.state.r}
            onChange={this.valuechangeforR}
            placeholder="0-255"
          />
          <br />
          <Input
            type="number"
            value={this.state.g}
            onChange={this.valuechangeforG}
            placeholder="0-255"
          />
          <br />
          <Input
            type="number"
            value={this.state.b}
            onChange={this.valuechangeforB}
            placeholder="0-255"
          />
          <br />
          <br />
          <Button onClick={this.backchange}>Change Background</Button>
        </center>
      </div>
    );
  }
}

export default Background;
