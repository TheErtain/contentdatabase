import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import "firebase/firestore";
import "firebase/auth";

const myBackgroundImage = require("../images/Bluraypic.jpg");
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${myBackgroundImage})`
};

class Bluray extends Component {
  state = {
    blueRayName: "",
    url: "",
    id: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newBlueray = this.state;

    const { firestore, history, firebase } = this.props;

    let user = firebase.auth().currentUser;

    firestore
      .collection("users")
      .doc(user.uid)
      .collection("blurays")
      .add(newBlueray)
      .then(() => history.push("/bluray"));

    this.setState({
      blueRayName: "",

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

export default compose(
  firestoreConnect(),
  connect((state, props) => ({}))
)(Bluray);
