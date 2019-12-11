import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class NewMovie extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Image</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Director</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Rating 1/5</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Plot</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="success" type="submit">
            Save changes
          </Button>
        </Form>
      </Container>
    );
  }
}
