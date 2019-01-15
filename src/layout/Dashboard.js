import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import "firebase/firestore";
import sort from "fast-sort";
import "./dashboard.css";
import Card from "../components/Card";

const myBackgroundImage = require("./Dashboardpic.jpg");
const divStyle = {
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${myBackgroundImage})`
};

class Dashboard extends Component {
  state = {
    bluray: [{ name: "", url: "", id: "" }],
    dvd: [{ name: "", url: "", id: "" }],
    movies: [{ name: "", url: "", id: "" }],
    tvShows: [{ name: "", url: "", id: "" }],
    anime: [{ name: "", url: "", id: "" }]
  };

  componentDidMount() {
    const { firestore } = this.props;
    // getting blurays from firestore
    firestore.get({ collection: "blurays" }).then(blurayFunc => {
      const bluray = [];

      blurayFunc.forEach(function(doc) {
        bluray.push({
          name: doc.data().blueRayName,
          url: doc.data().url,
          id: doc.id
        });
      });
      sort(bluray).asc(u => u.name);

      this.setState({ bluray });
    });
    //getting dvds from firestore
    firestore.get({ collection: "dvds" }).then(dvdFunc => {
      const dvd = [];

      dvdFunc.forEach(function(doc) {
        dvd.push({
          name: doc.data().dvdName,
          url: doc.data().url,
          id: doc.id
        });
      });
      sort(dvd).asc(u => u.name);
      this.setState({ dvd });
    });
    //getting movies from firestore
    firestore.get({ collection: "movies" }).then(movieFunc => {
      const movies = [];

      movieFunc.forEach(function(doc) {
        movies.push({
          name: doc.data().movieName,
          url: doc.data().url,
          id: doc.id
        });
      });
      sort(movies).asc(u => u.name);
      this.setState({ movies });
    });

    //getting tv shows from firestore
    firestore.get({ collection: "tvshows" }).then(tvFunc => {
      const tvShows = [];

      tvFunc.forEach(function(doc) {
        tvShows.push({
          name: doc.data().tvShowName,
          url: doc.data().url,
          id: doc.id
        });
      });
      sort(tvShows).asc(u => u.name);
      this.setState({ tvShows });
    });

    //getting anime from firestore
    firestore.get({ collection: "animes" }).then(animeFunc => {
      const anime = [];

      animeFunc.forEach(function(doc) {
        anime.push({
          name: doc.data().animeName,
          eps: doc.data().numberOfEps,
          url: doc.data().url,
          id: doc.id
        });
      });
      sort(anime).asc(u => u.name);
      this.setState({ anime });
    });
  }

  render() {
    return (
      <div className="d-flex" style={divStyle}>
        <Card name="Blu-Ray" array={this.state.bluray} />
        <Card name="DVD" array={this.state.dvd} />
        <Card name="Downloaded Movies" array={this.state.movies} />
        <Card name="Tv-Shows" array={this.state.tvShows} />
        <Card name="Anime" array={this.state.anime} />
      </div>
    );
  }
}

export default compose(
  firestoreConnect(),
  connect((state, props) => ({}))
)(Dashboard);
