import React, { Component } from "react";

const myBackgroundImage = require("./Animepic.jpg");
const divStyle = {
  width: "88%",
  height: "800px",
  backgroundImage: `url(${myBackgroundImage})`,
  backgroundSize: "cover"
};

export default class Anime extends Component {
  render() {
    return (
      <div style={divStyle}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-25 bg-secondary col-md-4">
            <h1 className="text-white text-center">Anime</h1>
            <input
              type="text"
              className="form-control mb-4"
              name="animeName"
              required
              value=""
              onChange=""
              placeholder="Enter an anime name..."
            />
            <input
              type="number"
              className="form-control mb-4"
              name="numberOfEps"
              required
              value=""
              onChange=""
              placeholder="How many episodes?"
            />
          </div>
        </div>
      </div>
    );
  }
}
