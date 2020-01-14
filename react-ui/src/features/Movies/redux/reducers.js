import * as actions from "./constants";

const initialState = {
  movies: [],
  currentMovie: {},
  errors: { movies: null }
};

export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies };

    case actions.GET_MOVIES_ERROR:
      return { ...state, errors: { movies: action.error } };

    case actions.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter(movie => {
          return movie._id !== action.movieId;
        })
      };

    default:
      return state;
  }
};
