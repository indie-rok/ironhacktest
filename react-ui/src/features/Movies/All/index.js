import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

import * as moviesActions from "../redux/actions";
import MovieItem from "../components/MovieItem";

class AllMovies extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getAllMovies();
  }

  renderMovies() {
    const { movies } = this.props;
    if (movies.length > 0) {
      return movies.map(movie => <MovieItem key={movie._id} {...movie} />);
    } else {
      return <Alert variant="info">No movies to display</Alert>;
    }
  }

  render() {
    return <>{this.renderMovies()}</>;
  }
}

const mapStateToProps = state => {
  return { movies: state.Movies.movies, errors: state.Movies.errors.Movies };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    getAllMovies: () => {
      dispatch(moviesActions.getAllMovies());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
