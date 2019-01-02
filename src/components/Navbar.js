import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="text-success">
              <i className="fas fa-database" />
            </span>{" "}
            Content Database
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
