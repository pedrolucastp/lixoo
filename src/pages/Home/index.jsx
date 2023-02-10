import React, { Component, Fragment } from "react";
import "./styles.css";
import ActionButton from "../../components/ActionButton";
import Collector from "../../components/Collector";
import Supplier from "../../components/Supplier";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: false,
    };
  }

  handleSetAction = (action) => {
    this.setState({ currentAction: action });
  };

  setAction = () => {
    if (this.state.currentAction === false) {
      return (
        <Fragment>
          <ActionButton
            title="Collector"
            type="collector"
            onClick={() => {
              this.handleSetAction("collector");
            }}
          />
          <ActionButton
            title="Supplier"
            type="supplier"
            onClick={() => {
              this.handleSetAction("supplier");
            }}
          />
        </Fragment>
      );
    }
    if (this.state.currentAction === "collector") {
      return <Collector onReturn={() => this.handleSetAction(false)} />;
    }
    if (this.state.currentAction === "supplier") {
      return <Supplier onReturn={() => this.handleSetAction(false)} />;
    }
  };

  render() {
    return <div className="Actions-panel">{this.setAction()}</div>;
  }
}
