import React, { Component } from "react";
import Confirm from "./Confirm";
import FormComp from "./FormComp";
import Success from "./Success";

class UserComp extends Component {
  state = {
    step: 1,
    fname: "",
    lname: "",
    address: "",
    gender: "male",
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    dept: "CSE",
    date: "",
    age: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
      fname,
      lname,
      address,
      gender,
      check4,
      check3,
      check2,
      check1,
      dept,
      date,
      age,
    } = this.state;
    const values = {
      fname,
      lname,
      address,
      gender,
      check4,
      check3,
      check2,
      check1,
      dept,
      date,
      age,
    };

    switch (step) {
      case 1:
        return (
          <FormComp
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 3:
        return <Success prevStep={this.prevStep} nextStep={this.nextStep} />;
    }
  }
}

export default UserComp;
