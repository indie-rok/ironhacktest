import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as movieActions from "../../redux/actions";

function MovieItem({ name, image, score, _id, actions }) {
  return (
    <Card style={{ margin: "10px", display: "inline-block", width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {score}/5 <FontAwesomeIcon icon={faStar} />
        </Card.Subtitle>
        <ButtonGroup aria-label="Basic example">
          <Link to={`/filmDetail/${_id}`}>
            <Button variant="primary">See details</Button>
          </Link>
          <Button
            variant="danger"
            onClick={() => {
              actions.deleteMovie(_id);
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    deleteMovie: movieId => {
      dispatch(movieActions.deleteMovie(movieId));
    }
  }
});

export default connect(null, mapDispatchToProps)(MovieItem);
