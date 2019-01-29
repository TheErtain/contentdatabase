import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className=" text-right">
        <div className="bg-dark">
          <div
            style={{ width: "50%", float: "left", backgroundColor: "#343a40" }}
          >
            <Link to="/about" className="text-white">
              About
            </Link>
          </div>
          <div
            style={{ width: "50%", float: "left", backgroundColor: "#343a40" }}
            className="text-white"
          >
            Created on 1/15/2019
          </div>
        </div>
      </footer>
    );
  }
}
