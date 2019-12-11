import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */
import { EmailAuthReducer } from "../features/Sessions/redux/reducers";

export const combinedReducers = combineReducers({
  EmailAuth: EmailAuthReducer
});
