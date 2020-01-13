import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import * as emailAuthActions from "../redux/actions";

function SignUp({ actions, errors }) {
  const [name, setName] = useState("Emmanuel");
  const [email, setEmail] = useState("1@gmail.com");
  const [password, setPassword] = useState("123123");
  const [confirmPassword, setConfirmPassword] = useState("123123");

  const renderErrors = () => {
    if (errors) {
      return (
        <Alert variant="danger" className="mt-4">
          {errors}
        </Alert>
      );
    }
  };

  return (
    <Container>
      <Form.Group>
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to login</span>
        </Link>
      </Form.Group>

      {renderErrors()}

      <Form>
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter name"
            onChange={event => setName(event.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={event => setConfirmPassword(event.target.value)}
            value={confirmPassword}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={event => {
            event.preventDefault();
            actions.login({ name, email, password, confirmPassword });
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return { errors: state.EmailAuth.errors.SignUp };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({ name, email, password }) => {
      dispatch(emailAuthActions.signUp({ email, name, password }));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
