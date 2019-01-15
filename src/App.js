import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import { Provider } from "react-redux";
import store from "./store";

// Components
import Navbar from "./components/Navbar";
import Login from "./layout/Login";
import Register from "./layout/Register";

// Layout
import Dashboard from "./layout/Dashboard";
import Bluray from "./layout/Bluray";
import Dvd from "./layout/Dvd";
import DownMovies from "./layout/DownMovies";
import TvShows from "./layout/TvShows";
import Anime from "./layout/Anime";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/reg"
                component={UserIsNotAuthenticated(Register)}
              />
              <Route
                exact
                path="/bluray"
                component={UserIsAuthenticated(Bluray)}
              />
              <Route exact path="/dvd" component={UserIsAuthenticated(Dvd)} />
              <Route
                exact
                path="/dmovies"
                component={UserIsAuthenticated(DownMovies)}
              />
              <Route
                exact
                path="/tv"
                component={UserIsAuthenticated(TvShows)}
              />
              <Route
                exact
                path="/anime"
                component={UserIsAuthenticated(Anime)}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
