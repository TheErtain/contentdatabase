import React, { Component } from "react";

const myBackgroundImage = require("./Animepic.jpg");
const divStyle = {
  width: "88%",
  height: "800px",
  backgroundImage: `url(${myBackgroundImage})`,
  backgroundSize: "cover"
};

export default class Anime extends Component {
  state = {
    animeName: "",
    numberOfEps: "",
    url: ""
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
            className="bg-secondary"
            style={{ width: 500, paddingLeft: 20, paddingRight: 20 }}
          >
            <h1 className="text-white text-center">Anime</h1>
            <input
              type="text"
              className="form-control mb-4"
              name="animeName"
              required
              value={this.state.animeName}
              onChange={this.onChange}
              placeholder="Enter an anime name..."
            />
            <input
              type="number"
              className="form-control mb-4"
              name="numberOfEps"
              required
              value={this.state.numberOfEps}
              onChange={this.onChange}
              placeholder="How many episodes?"
            />
            <input
              type="url"
              className="form-control mb-4"
              name="url"
              required
              value={this.state.url}
              onChange={this.onChange}
              placeholder="AniDB url..."
            />
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-success mb-4"
                value="Submit"
                onChange={this.onChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
