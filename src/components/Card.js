import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
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
          <p className="text-white">{this.props.name}</p>
        </div>
        {arr.map(gen => {
          return (
            <p key={gen.id}>
              <Link to={gen.url} className="text-white bg-dark">
                {gen.name}
              </Link>
            </p>
          );
        })}
      </span>
    );
  }
}
