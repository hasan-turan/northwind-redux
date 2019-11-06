import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Navigation({ history }) {
  const [isOpen, setIsOpen] = useState(false);

  function gotoPath(path) {
    if (history) history.push(path);
  }
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand onClick={() => gotoPath("/")}>Home</NavbarBrand>
        <NavbarBrand onClick={() => gotoPath("/producthooks")}>
          Product With Hooks
        </NavbarBrand>

        <NavbarBrand onClick={() => gotoPath("/productredux")}>
          Product With Redux
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(
  connect(
    null,
    null
  )(Navigation)
);
