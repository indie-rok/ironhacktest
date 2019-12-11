import { all } from "redux-saga/effects";
import EmailAuthSaga from "../features/Sessions/redux/sagas";

export function* mainSaga() {
  yield all([EmailAuthSaga]);
}
