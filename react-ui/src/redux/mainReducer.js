import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
/**
 * You can import more reducers here
 */
import { EmailAuthReducer } from "../features/Sessions/redux/reducers";
import { MoviesReducer } from "../features/Movies/redux/reducers";

export const combinedReducers = history =>
  combineReducers({
    router: connectRouter(history),

    EmailAuth: EmailAuthReducer,
    Movies: MoviesReducer
  });
