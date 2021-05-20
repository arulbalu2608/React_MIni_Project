import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login_pg from "./Login_pg";
import Logout_pg from "./Logout_pg";
class Homee extends Component {
  render() {
    return (
      <div>
        <Router>
          <center>
            <br />
            <Route path="/login" component={Login_pg} />
            <Route path="/logoutt" component={Logout_pg} />
          </center>
        </Router>
      </div>
    );
  }
}

export default Homee;
