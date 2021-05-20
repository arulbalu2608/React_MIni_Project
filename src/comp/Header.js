import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/">React Demo</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/incDec">
                    IncDec
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/incDecComp">
                    IncWithNum
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/multi">
                    Multiplication
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/form">
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/back">
                    BackgroundChange
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" exact to="/todo">
                    Todo
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
