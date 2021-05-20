import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import ItemDisplay from "./ItemDisplay";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfItem: [],
      current: {
        text: "",
        key: "",
      },
    };
  }
  handleInput = (e) => {
    this.setState({
      current: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addList = (e) => {
    e.preventDefault();
    const addingText = this.state.current;
    if (addingText !== "") {
      const newList = [...this.state.listOfItem, addingText];

      this.setState({
        listOfItem: newList,
        current: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    console.log(key);
    const filteredItems = this.state.listOfItem.filter(
      (item) => item.key !== key
    );
    this.setState({
      listOfItem: filteredItems,
    });
  };
  updateItem = (text, key) => {
    const items = this.state.listOfItem;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      listOfItem: items,
    });
  };
  render() {
    return (
      <div className="container">
        <center>
          {" "}
          <h1>Todo App</h1>
        </center>

        <br />
        <Form onSubmit={this.addList}>
          <FormGroup>
            <Row>
              <Col className="col-12 col-sm-11">
                <Input
                  type="text"
                  value={this.state.current.text}
                  onChange={this.handleInput}
                />
              </Col>
              <br />
              <br />
              <br />
              <Col className="col-12 col-sm-1">
                <Button type="submit">Add</Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
        <ItemDisplay
          items={this.state.listOfItem}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

export default Todo;
