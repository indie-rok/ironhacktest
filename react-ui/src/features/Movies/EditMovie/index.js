import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

import * as movieActions from "../redux/actions";

function EditMovie({ movie, match, actions }) {
  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [director, setDirector] = useState(movie.director);
  const [releaseDate, setReleaseDate] = useState(movie.release_date);
  const [score, setScore] = useState(movie.score);
  const [plot, setPlot] = useState(movie.plot);

  return (
    <Container>
      <Link to={`/filmDetail/${match.params.filmId}`}>Go back to movie</Link>

      <h3>Edit Movie</h3>
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
            actions.updateMovie({
              id: match.params.filmId,
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

const mapStateToProps = state => {
  return { movie: state.Movies.currentMovie };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getMovie: movieId => {
      dispatch(movieActions.getMovie(movieId));
    },
    updateMovie: movie => {
      dispatch(movieActions.updateMovie(movie));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
