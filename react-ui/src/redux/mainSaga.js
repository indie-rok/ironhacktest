import { all } from "redux-saga/effects";
import EmailAuthSaga from "../features/Sessions/redux/sagas";
import MoviesSaga from "../features/Movies/redux/sagas";

export function* mainSaga() {
  yield all([EmailAuthSaga, MoviesSaga]);
}
