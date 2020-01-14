import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import PrivateRoute from "./GeneralComponents/PrivateRoute";
import { store, history } from "./redux/store";

import Menu from "./GeneralComponents/Menu";
import LoginScreen from "./features/Sessions/Login";
import SignUpScreen from "./features/Sessions/SignUp";
import AllMoviesScreen from "./features/Movies/All";
import DetailedMovieScreen from "./features/Movies/Detail";
import NewMovie from "./features/Movies/NewMovie";
import EditMovie from "./features/Movies/EditMovie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Switch>
              <Route path="/" exact component={LoginScreen} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/sign_up" component={SignUpScreen} />
              <Route>
                <Menu />
                <LoggedInContainer />
              </Route>
            </Switch>
          </div>
        </ConnectedRouter>
      </ReduxProvider>
    );
  }
}

const LoggedInContainer = () => (
  <div className="inside-app-container">
    <PrivateRoute path="/films" component={AllMoviesScreen} />
    <PrivateRoute path="/newFilm" component={NewMovie} />
    <PrivateRoute path="/editMovie/:filmId" component={EditMovie} />
    <PrivateRoute path="/filmDetail/:filmId" component={DetailedMovieScreen} />
  </div>
);

export default App;
