import React, { Component } from "react";
import "./App.css";
import HeaderPanel from "./components/HeaderPanel";
import DynamicPanel from "./components/DynamicPanel";
import ActionsPanel from "./components/ActionsPanel";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_action_page: "home",
    };
  }

  mountApp = () => {
    return (
      <>

        <HeaderPanel setActionsPage={(page) => this.setActionPanel(page)} />
        <DynamicPanel />
        <ActionsPanel currentAction={this.state.current_action_page} />
      </>
    );
  };

  setActionPanel = (name) => {
    this.setState({ current_action_page: name });
  };

  render() {
    return (
      <div className="App">

        {
          //this.state.view_splash ? this.mountSplash() :
          this.mountApp()
        }
      </div>
    );
  }
}
