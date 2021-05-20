import React, { useState } from "react";
import { Button } from "reactstrap";

function IncDecComp() {
  const initial = 0;
  const [c, set] = useState(initial);

  return (
    <div className="container">
      <center>
        <h1>Increment Decrement</h1>
        <h3>Count : {c}</h3>
        <br />
        <Button
          color="success"
          onClick={() => set((prevCount) => prevCount + 1)}>
          Increment
        </Button>{" "}
        <Button
          color="danger"
          onClick={() => set((prevCount) => prevCount - 1)}>
          Decrement
        </Button>
      </center>
    </div>
  );
}

export default IncDecComp;
