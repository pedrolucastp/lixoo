import React, { Component } from "react";
import "./styles.css";



export default class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.props.onReturn(false);
          }}
        > Return </button>
        <h1>{"Supplier"}</h1>
      </>
    );
  }
}
