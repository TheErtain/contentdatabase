import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-database text-success" /> Content Database
          </Link>
        </div>
        <div className="dropdown mr-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            type="button"
          >
            Select your content
          </button>
          <div className="dropdown-menu bg-secondary">
            <ul type="none">
              <li>
                <i className="fas fa-film pr-2 text-white" />
                <Link to="/bluray" className="text-warning pl-1">
                  Blu-Ray
                </Link>
              </li>
              <li>
                <i className="fas fa-film pr-2 text-white" />
                <Link to="/dvd" className="text-warning pl-1">
                  DVD
                </Link>
              </li>
              <li>
                <i className="fas fa-film pr-2 text-white" />
                <Link to="/dmovies" className="text-warning pl-1">
                  Movies
                </Link>
              </li>
              <li>
                <i className="fas fa-tv pr-2 text-white" />
                <Link to="/tv" className="text-warning">
                  Tv Shows
                </Link>
              </li>
              <li>
                <i className="fab fa-artstation pr-2 text-white" />
                <Link to="/anime" className="text-warning pl-1">
                  Anime
                </Link>
              </li>
              <div className="dropdown-divider" />
              <li>
                <i className="fab fa-artstation pr-2 text-white" />
                <Link to="/" className="text-warning pl-1">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
