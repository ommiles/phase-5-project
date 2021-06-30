import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import Navigation from "./Navigation";
import Name from "./Name";

class App extends Component {
  state = {
    user: "",
    comments: [],
  };

  handleLogout = () => {};

  setUser = () => {};

  setComments = () => {};

  componentDidMount() {}

  render() {
    return;
    <Router basename="patreon">
      <Navigation />
      <Route path="/" component={Name} exact />
      <Route path="/login" component={Name} />
    </Router>;
  }
}

export default withRouter(App);
