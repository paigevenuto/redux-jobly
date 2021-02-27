import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md" className="border-bottom">
        <NavLink exact to="/" className="navbar-brand">
          Shoply
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem className="mx-2">
            <NavLink to="/cart">Cart</NavLink>
          </NavItem>
          <NavItem className="mx-2">
            <NavLink to="/">Products</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
