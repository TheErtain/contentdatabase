import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import "firebase/firestore";
import sort from "fast-sort";

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
        <div className="mt-1 border border-white col-md-2 mr-5">
          <div className="border border-white text-center bg-dark">
            <p className="text-white">Blu-Rays</p>
          </div>
          {this.state.bluray.map(blu => {
            return (
              <p key={blu.id}>
                <Link to={blu.url} className="text-white bg-dark">
                  {blu.name}
                </Link>
              </p>
            );
          })}
        </div>

        <div className="mt-1 border border-white col-md-2 mr-5">
          <div className="border border-white text-center bg-dark">
            <p className="text-white">DVDs</p>
          </div>
          {this.state.dvd.map(dvds => {
            return (
              <p key={dvds.id}>
                <Link to={dvds.url} className="text-white bg-dark">
                  {dvds.name}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="mt-1 border border-white col-md-2 mr-5">
          <div className="border border-white text-center bg-dark">
            <p className="text-white">Downloaded Movies</p>
          </div>
          {this.state.movies.map(movie => {
            return (
              <p key={movie.id}>
                <Link to={movie.url} className="text-white bg-dark">
                  {movie.name}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="mt-1 border border-white col-md-2 mr-5">
          <div className="border border-white text-center bg-dark">
            <p className="text-white">Tv-Shows</p>
          </div>
          {this.state.tvShows.map(tv => {
            return (
              <p key={tv.id}>
                <Link to={tv.url} className="text-white bg-dark">
                  {tv.name}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="mt-1 border border-white col-md-2 mr-5">
          <div className="border border-white text-center bg-dark">
            <p className="text-white">Anime</p>
          </div>
          {this.state.anime.map(ani => {
            return (
              <p key={ani.id}>
                <Link to={ani.url} className="text-white bg-dark">
                  {ani.name}: {ani.eps}
                </Link>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(),
  connect((state, props) => ({}))
)(Dashboard);
