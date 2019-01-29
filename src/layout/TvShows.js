import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import "firebase/firestore";

const myBackgroundImage = require("../images/Moviepic.jpg");
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${myBackgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

class TvShows extends Component {
  state = {
    tvShowName: "",
    numberOfEps: "",
    url: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const newTvShow = this.state;

    const { firestore, history, firebase } = this.props;

    let user = firebase.auth().currentUser;

    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tvshows")
      .add(newTvShow)
      .then(() => history.push("/tv"));

    this.setState({
      tvShowName: "",
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
              Tv Shows
            </h1>

            <input
              type="text"
              className="form-control mb-4"
              name="tvShowName"
              required
              value={this.state.tvShowName}
              onChange={this.onChange}
              placeholder="Enter a Tv Show..."
              style={{ boxShadow: "14px 12px 18px 3px #404040" }}
            />
            <input
              type="number"
              className="form-control mb-4"
              name="numberOfEps"
              required
              value={this.state.numberOfEps}
              onChange={this.onChange}
              placeholder="How many episodes?"
              style={{ boxShadow: "14px 12px 18px 3px #404040" }}
            />
            <input
              type="url"
              className="form-control mb-4"
              name="url"
              required
              value={this.state.url}
              onChange={this.onChange}
              placeholder="IMDB..."
              style={{ boxShadow: "14px 12px 18px 3px #404040" }}
            />
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-light mb-4 text-dark"
                value="Submit"
                onChange={this.onChange}
                style={{ boxShadow: "14px 12px 18px 3px #404040" }}
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
)(TvShows);
