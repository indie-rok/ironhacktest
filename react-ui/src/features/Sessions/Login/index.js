import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as emailAuthActions from "../redux/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleEmailChange(event) {
    const email = event.target.value;
    this.setState({ email });
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  submitLogin() {
    const {
      actions: { login }
    } = this.props;

    const { email, password } = this.state;

    login({ email, password });

    this.setState({ email: "", password: "" });
  }
  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <Alert variant="danger" className="mt-4">
          {errors}
        </Alert>
      );
    }
  }

  render() {
    return (
      <Container>
        {this.renderErrors()}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleEmailChange}
              placeholder="Enter email"
              value={this.state.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handlePasswordChange}
              type="password"
              placeholder="Password"
              value={this.state.password}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Link to="/sign_up">Or, create an account?</Link>
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              console.log("here");
              this.submitLogin();
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { errors: state.EmailAuth.errors.SignIn };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({ email, password }) => {
      dispatch(emailAuthActions.login({ email, password }));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
