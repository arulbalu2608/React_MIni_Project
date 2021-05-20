import React from "react";
import { ListGroup, ListGroupItem, ButtonGroup, Row, Col } from "reactstrap";
import "./item.css";
import FlipMove from "react-flip-move";

function ItemDisplay(props) {
  const items = props.items;
  console.log(items);
  const list = items.map((item) => {
    return (
      <div key={item.key}>
        <ListGroupItem color="info">
          <Row>
            <Col className="col-11">
              {" "}
              <input
                className="input"
                type="text"
                key={item.key}
                value={item.text}
                onChange={(e) => {
                  props.updateItem(e.target.value, item.key);
                }}
              />
            </Col>
            <Col className="col-1">
              <i
                className=" fa fa-trash  fa-lg done"
                onClick={() => {
                  props.deleteItem(item.key);
                }}
                aria-hidden="true"></i>
            </Col>
          </Row>
        </ListGroupItem>
      </div>
    );
  });
  return (
    <div>
      <ListGroup>
        <FlipMove duration={300} easing="ease-in-out">
          {list}
        </FlipMove>
      </ListGroup>
    </div>
  );
}

export default ItemDisplay;
