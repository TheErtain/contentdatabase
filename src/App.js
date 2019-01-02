import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

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
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/bluray" component={Bluray} />
            <Route exact path="/dvd" component={Dvd} />
            <Route exact path="/dmovies" component={DownMovies} />
            <Route exact path="/tv" component={TvShows} />
            <Route exact path="/anime" component={Anime} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
