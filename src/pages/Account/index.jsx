import React, { Component } from "react";
import "./styles.css";
import FirebaseApp from "../../FirebaseAuth/FirebaseApp";

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
          {"Account"}
        </h1>
        <FirebaseApp />
      </div>
    );
  }
}
