import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Splash-sceen">
        <img src={logo} alt={"Logo"} className="splash-logo" />
      </div>
    );
  }
}
