import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux/store";

import Menu from "./GeneralComponents/Menu";
import LoginScreen from "./features/Sessions/Login";
import SignUpScreen from "./features/Sessions/SignUp";
import AllMoviesScreen from "./features/Movies/All";
import DetailedMovieScreen from "./features/Movies/Detail";
import NewMovie from "./features/Movies/NewMovie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  async componentDidMount() {
    // todo, move api conections to saga
    let res;
    try {
      res = await fetch("/api");
      console.log(await res.json());
    } catch (err) {
      console.log("err");
    }
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <Router>
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
        </Router>
      </ReduxProvider>
    );
  }
}

const LoggedInContainer = () => (
  <div className="inside-app-container">
    <Route path="/films" component={AllMoviesScreen} />
    <Route path="/newFilm" component={NewMovie} />
    <Route path="/filmDetail/:filmId" component={DetailedMovieScreen} />
  </div>
);

export default App;
