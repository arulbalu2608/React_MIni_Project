import React, { Component } from 'react'

import {Button} from "reactstrap";
class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // this.props.nextStep();
    this.props.prevStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.nextStep();
    // this.props.prevStep();
  };

  render() {
    const {
      values: { fname, lname, address, gender, check1, check2, check3, check4,dept,date,age },
    } = this.props;

    return (
      <div>
        <center>
          <h1>DETAILS</h1>
        </center>
        <div
          style={{
            textAlign: "justify",
            border: "3px solid black ",
            borderRadius: "8px",
            marginLeft: "20%",
            marginRight: "20%",
            padding: "10px 6% ",
          }}
        >
          <h3>First name: {fname}</h3>
          <h3>Last name: {lname}</h3>
          <h3>Gender: {gender}</h3>
          <h3>DOB: {date}</h3>
          {/* <h3>age: {age}</h3> */}
          <h3>Address: {address}</h3>
          <h3>Department: {dept}</h3>
          <h3>interested in :</h3>
          {check1 == "on" ? (
            <h3>
              <li>Java</li>
            </h3>
          ) : null}
          {check2 == "on" ? (
            <h3>
              <li>Python</li>
            </h3>
          ) : null}
          {check3 == "on" ? (
            <h3>
              <li>C</li>
            </h3>
          ) : null}
          {check4 == "on" ? (
            <h3>
              <li>JavaScript</li>
            </h3>
          ) : null}
        </div>
        
        {
          '  '
        }
        <center style={{marginTop : "10px"}}>
          <Button color="dark" size="lg" onClick={this.continue}>
            back
          </Button>{" "}
          <Button color="success" size="lg" onClick={this.back}>
            finish
          </Button>
        </center>
      </div>
    );
  }
}

export default Confirm
