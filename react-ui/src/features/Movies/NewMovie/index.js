import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

import * as movieActions from "../redux/actions";

function EditMovie({ movie, match, actions }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [score, setScore] = useState("");
  const [plot, setPlot] = useState("");

  return (
    <Container>
      <Link to={`/films`}>Go back to all movies</Link>

      <h3>Add Movie</h3>
      <Form>
        <Form.Group className="mt-3">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
            type="text"
            placeholder="Title.."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            value={releaseDate}
            onChange={event => {
              setReleaseDate(event.target.value);
            }}
            type="text"
            placeholder="Release Date"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie Image</Form.Label>
          <Form.Control
            value={image}
            onChange={event => {
              setImage(event.target.value);
            }}
            type="text"
            placeholder="Movie Image"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie Director</Form.Label>
          <Form.Control
            value={director}
            onChange={event => {
              setDirector(event.target.value);
            }}
            type="email"
            placeholder="Movie Director.."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating 1/5</Form.Label>
          <Form.Control
            value={score}
            onChange={event => {
              setScore(event.target.value);
            }}
            type="email"
            placeholder="1..5"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Plot</Form.Label>
          <Form.Control
            value={plot}
            placeholder="Plot"
            onChange={event => {
              setPlot(event.target.value);
            }}
            as="textarea"
            rows="3"
          />
        </Form.Group>

        <Button
          variant="success"
          onClick={() => {
            actions.addMovie({
              name,
              image,
              director,
              release_date: releaseDate,
              score,
              plot
            });
          }}
        >
          Save changes
        </Button>
      </Form>
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    addMovie: movie => {
      dispatch(movieActions.addMovie(movie));
    }
  }
});

export default connect(null, mapDispatchToProps)(EditMovie);
