import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Movie Database About Page</h1>
        <p>
          This application was made with ReactJS v16.6.3. Using Firestore to
          store your content, it auto loads and will allow you to edit your
          content and you are able to delete it from the database. I started
          working on the framework in the beginning of January 2019.
        </p>
        <h5 className="text-white">Author: William Luther Watson III</h5>
      </div>
    );
  }
}
