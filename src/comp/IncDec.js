import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

function IncDec() {
  const initial = 0;
  const [main, setmain] = useState(initial);
  const [c, set] = useState(initial);
  return (
    <div className="container">
      <center>
        <h1>Increment With Number</h1>
        <Form>
          <h3>Count : {main}</h3>
          <br />
          <FormGroup>
            <Input
              type="number"
              onChange={(e) => set(e.target.value)}
              placeholder="Enter only Number"
            />
          </FormGroup>
          <FormGroup check>
            <Button
              color="success"
              onClick={() =>
                setmain((prevCount) => parseInt(prevCount) + parseInt(c))
              }>
              Increment
            </Button>{" "}
            <Button
              color="danger"
              onClick={() =>
                setmain((prevCount) => parseInt(prevCount) - parseInt(c))
              }>
              Decrement
            </Button>
          </FormGroup>
        </Form>
      </center>
    </div>
  );
}

export default IncDec;
