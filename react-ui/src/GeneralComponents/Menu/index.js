import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Link to="/films">IMDB clone</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/newFilm">
            <Button>Add movie</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
