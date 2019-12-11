import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
          <Link to="/filmDetail/3">
            <Button variant="primary">See details</Button>
          </Link>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
