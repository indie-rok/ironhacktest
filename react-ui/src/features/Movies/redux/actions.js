import * as actions from "./constants";

export const getAllMovies = _ => ({
  type: actions.GET_MOVIES_REQUEST
});

export const getMovie = movieId => ({
  type: actions.GET_SINGLE_MOVIE_REQUEST,
  movieId
});

export const updateMovie = movie => ({
  type: actions.UPDATE_MOVIE_REQUEST,
  movie
});

export const deleteMovie = movieId => ({
  type: actions.DELETE_MOVIE_REQUEST,
  movieId
});
