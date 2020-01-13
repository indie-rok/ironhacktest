import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import { combinedReducers } from "./mainReducer";
import { mainSaga } from "./mainSaga";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  combinedReducers(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(mainSaga);

export { store };
