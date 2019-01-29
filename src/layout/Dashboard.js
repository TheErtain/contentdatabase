import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "firebase/firestore";
import sort from "fast-sort";
import "./dashboard.css";
import Card from "../components/Card";

const myBackgroundImage = require("../images/Dashboardpic.jpg");
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${myBackgroundImage})`
};

class Dashboard extends Component {
  state = {
    bluray: [{ name: "", url: "", id: "", collection: "" }],
    dvd: [{ name: "", url: "", id: "", collection: "" }],
    movies: [{ name: "", url: "", id: "", collection: "" }],
    tvShows: [{ name: "", url: "", id: "", collection: "" }],
    anime: [{ name: "", url: "", id: "", collection: "" }],
    index: 0
  };

  getFirebaseVideos = () => {
    const { firestore, firebase } = this.props;
    let user = firebase.auth().currentUser;
    // getting blurays from firestore
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("blurays")
      .get()

      .then(blurayFunc => {
        const bluray = [];

        blurayFunc.forEach(function(doc) {
          bluray.push({
            name: doc.data().blueRayName,
            url: doc.data().url,
            id: doc.id,
            collection: "blurays"
          });
        });
        sort(bluray).asc(u => u.name);

        this.setState({ bluray });
      });
    //getting dvds from firestore
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("dvds")
      .get()
      .then(dvdFunc => {
        const dvd = [];

        dvdFunc.forEach(function(doc) {
          dvd.push({
            name: doc.data().dvdName,
            url: doc.data().url,
            id: doc.id,
            collection: "dvds"
          });
        });
        sort(dvd).asc(u => u.name);
        this.setState({ dvd });
      });
    //getting movies from firestore
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("movies")
      .get()
      .then(movieFunc => {
        const movies = [];

        movieFunc.forEach(function(doc) {
          movies.push({
            name: doc.data().movieName,
            url: doc.data().url,
            id: doc.id,
            collection: "movies"
          });
        });
        sort(movies).asc(u => u.name);
        this.setState({ movies });
      });

    //getting tv shows from firestore
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("tvshows")
      .get()
      .then(tvFunc => {
        const tvShows = [];

        tvFunc.forEach(function(doc) {
          tvShows.push({
            name: doc.data().tvShowName,
            url: doc.data().url,
            id: doc.id,
            collection: "tvshows"
          });
        });
        sort(tvShows).asc(u => u.name);
        this.setState({ tvShows });
      });

    //getting anime from firestore
    firestore
      .collection("users")
      .doc(user.uid)
      .collection("animes")
      .get()
      .then(animeFunc => {
        const anime = [];

        animeFunc.forEach(function(doc) {
          anime.push({
            name: doc.data().animeName,
            eps: doc.data().numberOfEps,
            url: doc.data().url,
            id: doc.id,
            collection: "animes"
          });
        });
        sort(anime).asc(u => u.name);
        this.setState({ anime });
      });
  };
  componentDidMount() {
    this.getFirebaseVideos();
  }

  onDelete = (e, id, collection) => {
    e.preventDefault();
    const { firebase, firestore } = this.props;

    let user = firebase.auth().currentUser;

    const deletion = window.confirm("Are you sure you want to delete?");

    if (deletion === true) {
      firestore
        .collection("users")
        .doc(user.uid)
        .collection(collection)
        .doc(id)
        .delete()
        .then(() => this.getFirebaseVideos());
    }
  };

  render() {
    return (
      <div className="d-flex" style={divStyle}>
        <Card
          name="Blu-Ray"
          array={this.state.bluray}
          onDelete={this.onDelete}
        />
        <Card name="DVD" array={this.state.dvd} onDelete={this.onDelete} />
        <Card
          name="Downloaded Movies"
          array={this.state.movies}
          onDelete={this.onDelete}
        />
        <Card
          name="Tv-Shows"
          array={this.state.tvShows}
          onDelete={this.onDelete}
        />
        <Card name="Anime" array={this.state.anime} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default compose(
  firestoreConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    {}
  )
)(withRouter(Dashboard));
