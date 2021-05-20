import React, { Component } from "react";
import { Button } from "reactstrap";

class Logout_pg extends Component {
  handleClick = () => {
    let path = "/login";
    this.props.history.push(path);
  };
  render() {
    return (
      <div>
        <h4>logged in succesfully...</h4>
        <h3>Welcome {this.props.userName}</h3>
        <Button className="btn-success" onClick={this.handleClick}>
          log out
        </Button>
      </div>
    );
  }
}

export default Logout_pg;
