import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginScreen from "./features/Sessions/Login";
import SignUpScreen from "./features/Sessions/SignUp";
import AllMoviesScreen from "./features/Movies/All";
import DetailedMovieScreen from "./features/Movies/Detail";

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
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/sign_up" component={SignUpScreen} />
            <Route>
              <LoggedInContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const LoggedInContainer = () => (
  <div className="inside-app-container">
    <Route path="/films" component={AllMoviesScreen} />
    <Route path="/filmDetail/:filmId" component={DetailedMovieScreen} />
  </div>
);

export default App;
