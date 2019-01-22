import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser } from "../actions/notifyActions";
import Alert from "../layout/Alert";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password1: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillMount() {
    this.props.notify.message = "";
    this.props.notify.messageType = "";
  }

  onSubmit = e => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password, password1 } = this.state;

    if (password !== password1) {
      notifyUser("Your passwords did not match. Try Again", "error");
      this.setState({
        email: "",
        password: "",
        password1: ""
      });
    } else if (password === password1) {
      firebase
        .createUser({
          email,
          password
        })
        .catch(err => notifyUser("That user already exists", "error"));
    }
  };

  render() {
    const { message, messageType } = this.props.notify;
    return (
      <div className="row mt-4">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              {message ? (
                <Alert message={message} messageType={messageType} />
              ) : null}
              <h1 className="text-center pb-4 pt-3">
                <span className="text-secondary">
                  <i className="fas fa-lock" /> Register
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Re-enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password1"
                    required
                    value={this.state.password1}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-secondary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notify: state.notify
});

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    { notifyUser }
  )
)(Register);
