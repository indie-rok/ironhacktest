import { all, takeLatest, put, call, select } from "redux-saga/effects";

import * as actions from "./constants";

import { request } from "../../../utils/http";

const getToken = state => state.EmailAuth.user.accessToken;

function getMovies(accessToken) {
  return request.get("/api/movies/", {
    headers: { "x-access-token": accessToken }
  });
}

function deleteMovie(movieId, accessToken) {
  return request.delete(`/api/movies/${movieId}`, {
    headers: { "x-access-token": accessToken }
  });
}

function* handleGetMovies() {
  try {
    const { status, data } = yield call(getMovies, yield select(getToken));

    if (status === 200) {
      yield put({
        type: actions.GET_MOVIES_SUCCESS,
        movies: data.movies
      });
    } else {
      console.log("error", status);
      yield put({
        type: actions.GET_MOVIES_ERROR,
        error: "Unknown Error while getting movies"
      });
    }
  } catch (error) {
    yield put({
      type: actions.GET_MOVIES_ERROR,
      error: error.message
    });
  }
}

function* handleDeleteMovie({ movieId }) {
  try {
    console.log("movie id", movieId);
    const { status } = yield call(deleteMovie, movieId, yield select(getToken));

    if (status === 204) {
      yield put({ type: actions.DELETE_MOVIE_SUCCESS, movieId });
    } else {
      yield put({
        type: actions.DELETE_MOVIE_ERROR,
        error: "unknow error while deleting movies"
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest(actions.GET_MOVIES_REQUEST, handleGetMovies),
  takeLatest(actions.DELETE_MOVIE_REQUEST, handleDeleteMovie)
]);
