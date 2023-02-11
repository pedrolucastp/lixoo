import React, { Component } from "react";
import "./styles.css";
import UserPage from "./UserPage/UserPage";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Actions-panel">
        <h1
          onClick={() => {
            this.props.onReturn(false);
          }}
        >
          {"My Account"}
        </h1>
        <UserPage />
      </div>
    );
  }
}
