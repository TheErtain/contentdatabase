import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { firestoreConnect } from "react-redux-firebase";

const myCursorImage = require("../images/dragoncursor.cur");
const cursorStyle = {
  height: "30px",
  cursor: `url(${myCursorImage}), auto`
};

class Card extends Component {
  render() {
    const arr = this.props.array;

    return (
      <span
        className="mt-1 ml-5 mb-3 border border-white col-md-2"
        style={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <div
          className="border border-white text-center bg-dark"
          style={{
            marginLeft: "-16px",
            width: "112%"
          }}
        >
          <p className="text-white m-auto">{this.props.name}</p>
        </div>

        {arr.map(gen => {
          return (
            <div
              key={gen.id}
              className="bg-dark mb-2 border border-white mt-1 pl-1"
              style={cursorStyle}
            >
              <Link to={gen.url} className="text-white">
                {gen.name}
              </Link>
              <button
                className="btn btn-sm"
                style={{ float: "right", backgroundColor: "rgba(0,0,0,0)" }}
                onClick={e => this.props.onDelete(e, gen.id, gen.collection)}
              >
                <i className="fas fa-times text-danger" />
              </button>
            </div>
          );
        })}
      </span>
    );
  }
}

export default firestoreConnect()(Card);
