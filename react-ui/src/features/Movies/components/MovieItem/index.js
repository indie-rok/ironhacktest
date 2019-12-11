import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieItem() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Star Wars</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          4.2/5 <FontAwesomeIcon icon={faStar} />
        </Card.Subtitle>
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">See details</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
