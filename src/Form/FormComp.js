import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  row,
} from "reactstrap";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container">
        <h1>STUDENT REGISTRATION</h1>
        <br />
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              First Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="fname"
                id="text"
                placeholder="Start with Caps"
                ref={this.inputRef}
                value={values.fname}
                onChange={handleChange("fname")}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              last Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="lname"
                id="fname"
                placeholder="Your Initial"
                value={values.lname}
                onChange={handleChange("lname")}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Address
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                value={values.address}
                onChange={handleChange("address")}
              />
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset" row>
            <Col sm={2}>
              <legend className="col-form-label ">Gender</legend>
            </Col>

            <Col sm={3}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={values.gender === "male"}
                    onChange={handleChange("gender")}
                  />{" "}
                  Male
                </Label>
              </FormGroup>{" "}
            </Col>
            <Col sm={3}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={values.gender === "female"}
                    onChange={handleChange("gender")}
                  />{" "}
                  Female
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={2}>
              <Label for="exampleDate">Date</Label>
            </Col>
            <Col sm={10}>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                value={values.date}
                onChange={handleChange("date")}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm="2">
              <Label for="exampleEmail">Interest</Label>
            </Col>
            <Col sm="2">
              {" "}
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="check1"
                    checked={values.check1}
                    onChange={handleChange("check1")}
                  />{" "}
                  Java
                </Label>
              </FormGroup>
            </Col>
            <Col sm="2">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="check2"
                    checked={values.check2}
                    onChange={handleChange("check2")}
                  />{" "}
                  Python
                </Label>
              </FormGroup>
            </Col>
            <Col sm="2">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="check3"
                    checked={values.check3}
                    onChange={handleChange("check3")}
                  />{" "}
                  C
                </Label>
              </FormGroup>
            </Col>
            <Col sm="2">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="check4"
                    checked={values.check4}
                    onChange={handleChange("check4")}
                  />{" "}
                  javascript
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Department
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                value={values.dept}
                onChange={handleChange("dept")}>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" checked /> Above Details are True to My
              Knowledge
            </Label>
          </FormGroup>
          <br />
          <center>
            <Button color="success" size="lg" onClick={this.continue}>
              Submit
            </Button>
          </center>
        </Form>
      </div>
    );
  }
}

export default FormComp;
