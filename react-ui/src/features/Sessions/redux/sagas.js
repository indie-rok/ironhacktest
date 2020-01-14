import { all, takeLatest, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  EMAIL_AUTH_LOGIN_REQUEST,
  EMAIL_AUTH_LOGIN_ERROR,
  EMAIL_AUTH_SIGNUP_REQUEST,
  EMAIL_AUTH_LOGIN_SUCCESS,
  EMAIL_AUTH_SIGNUP_ERROR,
  EMAIL_AUTH_SIGNUP_SUCCESS
} from "./constants";

import { request } from "../../../utils/http";

function sendLogin({ email, password }) {
  return request.post("/api/session/", {
    email,
    password
  });
}

function sendSignUp({ email, password, name }) {
  return request.post("/api/user/", {
    email,
    password,
    name
  });
}

function* handleLogin(action) {
  const {
    user: { email, password }
  } = action;

  try {
    const { status, data } = yield call(sendLogin, { email, password });

    if (status === 200) {
      yield put({
        type: EMAIL_AUTH_LOGIN_SUCCESS,
        user: data.user
      });

      yield put(push("/films"));
    } else {
      yield put({
        type: EMAIL_AUTH_LOGIN_ERROR,
        error: "Unknown Error"
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    console.log(error.message);
    yield put({
      type: EMAIL_AUTH_LOGIN_ERROR,
      error: "Can't sign in with provided credentials"
    });
  }
}

function* handleSignUp(action) {
  const {
    user: { email, password, name }
  } = action;
  try {
    const { status, data } = yield call(sendSignUp, { email, password, name });
    if (status === 201) {
      yield put({
        type: EMAIL_AUTH_SIGNUP_SUCCESS,
        user: data
      });
      yield put(push("/films"));
    } else {
      yield put({
        type: EMAIL_AUTH_SIGNUP_ERROR,
        error: "Unknown Error"
      });
    }
  } catch (error) {
    // todo add errors with similar structure in backend
    yield put({
      type: EMAIL_AUTH_SIGNUP_ERROR,
      error: "Can't sign up with provided credentials"
    });
  }
}

export default all([
  takeLatest(EMAIL_AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(EMAIL_AUTH_SIGNUP_REQUEST, handleSignUp)
]);
