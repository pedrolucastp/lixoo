import React, { Component, Fragment } from "react";
import "./styles.css";
import Map from "../Map";

export default class Collector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="buttons-container">
          <div
            className="button"
            onClick={() => {
              this.props.onReturn(false);
            }}
          >
            {"<"}
          </div>
          <div
            className="button"
            /*  onClick={() => {
                         this.props.onReturn(false)
                     }} */
          >
            {"Filters"}
          </div>
          <div
            className="button"
            /*  onClick={() => {
                         this.props.onReturn(false)
                     }} */
          >
            {"List"}
          </div>
        </div>
        <Map />
      </Fragment>
    );
  }
}
