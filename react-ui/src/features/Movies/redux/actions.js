import * as actions from "./constants";

export const getAllMovies = _ => ({
  type: actions.GET_MOVIES_REQUEST
});

export const deleteMovie = movieId => ({
  type: actions.DELETE_MOVIE_REQUEST,
  movieId
});
