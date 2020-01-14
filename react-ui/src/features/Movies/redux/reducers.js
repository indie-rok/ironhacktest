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

    default:
      return state;
  }
};
