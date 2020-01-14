import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function MovieItem({ name, image, score, _id }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {score}/5 <FontAwesomeIcon icon={faStar} />
        </Card.Subtitle>
        <ButtonGroup aria-label="Basic example">
          <Link to="/filmDetail/3">
            <Button variant="primary">See details</Button>
          </Link>
          <Button variant="danger" data-delete-id={_id}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
