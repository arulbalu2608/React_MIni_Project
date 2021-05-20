import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Button, Form, Input } from "reactstrap";
import Logout_pg from "./Logout_pg";
export class Login_pg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userName: "",
      password: "",
    };
  }
  handleChange = (input) => (e) => {
    e.preventDefault();
    this.setState({
      [input]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { isLogin, userName, password } = this.state;
    const u1 = "Arul";
    const p1 = "123";

    if (!isLogin) {
      if (!(u1 === userName)) {
        toast.error("Please enter valid username!!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } else if (!(p1 === password)) {
        toast.error("Please enter valid password!!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } else {
        this.setState({
          isLogin: true,
        });
        return this.props.history.push("/logoutt");
      }
    }
  };
  render() {
    const { userName, password } = this.state;
    return (
      <div>
        <Router>
          <Form>
            <Route exact path="/login">
              <h2>Login</h2>
              <p>
                In This Demo I use Username:Arul pass:123 otherwise it show
                Toast message
              </p>

              <Input
                className="col-4"
                type="text"
                placeholder="username"
                value={userName}
                onChange={this.handleChange("userName")}
              />
              <br />
              <Input
                className="col-4"
                type="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange("password")}
              />
              <br />

              <Button
                className="btn-success"
                type="submit"
                onClick={this.handleSubmit}>
                <ToastContainer />
                login
                {this.state.isLogin ? (
                  <Redirect
                    to="/logoutt"
                    component={<Logout_pg userName={userName} />}
                  />
                ) : (
                  <Redirect to="/login" />
                )}
              </Button>
            </Route>
          </Form>
        </Router>
      </div>
    );
  }
}

export default Login_pg;
