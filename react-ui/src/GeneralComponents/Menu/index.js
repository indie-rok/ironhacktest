import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/login">IMDB clone</Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Link to="/newFilm">
            <Button>Add movie</Button>
          </Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Button variant="default">Log out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
