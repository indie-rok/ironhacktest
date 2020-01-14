import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import * as movieActions from "../redux/actions";

class DetailedMovie extends Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.getMovie(match.params.filmId);
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
        <Container>
          <img src={movie.image} alt="cover movie" className="mb-4" />

          <h3>{movie.name}</h3>
          <h6>
            <small>Director:</small>
            {movie.director}
          </h6>
          <h6>
            <small>Release Date</small>
            {movie.release_date}
          </h6>
          <h6>
            <small>Score</small> {movie.score}/5
            <FontAwesomeIcon icon={faStar} />
          </h6>
          <h5>Plot</h5>
          <p>{movie.plot}</p>
          <p>
            <Link to={`/editMovie/${movie._id}`}>
              <Button variant="warning">Edit</Button>
            </Link>
          </p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movie: state.Movies.currentMovie };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getMovie: movieId => {
      dispatch(movieActions.getMovie(movieId));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovie);
