import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as emailAuthActions from "../../features/Sessions/redux/actions";

function Menu({ actions }) {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/films">IMDB clone</Link>
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
          <Button variant="default" onClick={actions.logout}>
            Log out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    logout: () => {
      dispatch(emailAuthActions.logout());
      window.location.reload();
    }
  }
});

export default connect(null, mapDispatchToProps)(Menu);
