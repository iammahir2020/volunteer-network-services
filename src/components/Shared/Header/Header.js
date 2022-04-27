import logo from "../../../images/logo.png";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar className="nav-bar" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img className="header-logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={NavLink} to="/add">
                    Add Event
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/manage">
                    Manage Event
                  </Nav.Link>
                </>
              )}
              {user ? (
                <>
                  <NavDropdown
                    title={user?.displayName}
                    id="basic-nav-dropdown"
                    className="user-logout"
                  >
                    <button onClick={handleLogOut} className="btn-logout">
                      Logout
                    </button>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login">
                    <Button variant="primary">Login</Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/register">
                    <Button variant="dark">Register</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
