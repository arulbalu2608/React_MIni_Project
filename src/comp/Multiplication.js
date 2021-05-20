import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";

function Multiplication() {
  const [table, settable] = useState(0);
  const [range, setrange] = useState(0);
  return (
    <div className="container">
      <center>
        <h1>Multiplication</h1>
        <Form>
          <FormGroup>
            <Input
              type="number"
              onChange={(e) => settable(e.target.value)}
              placeholder="enter only number"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="number"
              onChange={(e) => setrange(e.target.value)}
              placeholder="enter only number"
            />
          </FormGroup>
        </Form>
        {Array.from({ length: range }, (v, i) => (
          <div>
            <h3>
              {i + 1} X {table} = {table * (i + 1)}
            </h3>
          </div>
        ))}
      </center>
    </div>
  );
}

export default Multiplication;
