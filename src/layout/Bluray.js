import React, { Component } from "react";

const myBackgroundImage = require("./Bluraypic.jpg");
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${myBackgroundImage})`
};

export default class Blueray extends Component {
  state = {
    blueRayName: "",
    numberOfEps: "",
    url: ""
  };

  onSubmit = e => {
    e.preventDefault();

    localStorage.setItem("blu-ray", this.state.blueRayName);
    localStorage.setItem("blunumeps", this.state.numberOfEps);
    localStorage.setItem("blu-url", this.state.url);

    this.setState({
      blueRayName: "",
      numberOfEps: "",
      url: ""
    });
  };

  onChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        style={divStyle}
        className="d-flex justify-content-center align-items-center"
      >
        <form onSubmit={this.onSubmit}>
          <div
            className=""
            style={{ width: 500, paddingLeft: 20, paddingRight: 20 }}
          >
            <h1
              className="text-white text-center"
              style={{
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15)"
              }}
            >
              Blu-Rays
            </h1>

            <input
              type="text"
              className="form-control mb-4"
              name="blueRayName"
              required
              value={this.state.blueRayName}
              onChange={this.onChange}
              placeholder="Enter an blueRay name..."
              style={{ boxShadow: "14px 12px 18px 3px #000000" }}
            />
            <input
              type="number"
              className="form-control mb-4"
              name="numberOfEps"
              required
              value={this.state.numberOfEps}
              onChange={this.onChange}
              placeholder="How many episodes?"
              style={{ boxShadow: "14px 12px 18px 3px #000000" }}
            />
            <input
              type="url"
              className="form-control mb-4"
              name="url"
              required
              value={this.state.url}
              onChange={this.onChange}
              placeholder="IMDB..."
              style={{ boxShadow: "14px 12px 18px 3px #000000" }}
            />
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-light mb-4 text-dark"
                value="Submit"
                onSubmit={this.onSubmit}
                style={{ boxShadow: "14px 12px 18px 3px #000000" }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
