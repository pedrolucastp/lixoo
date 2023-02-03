import React, { Component } from 'react';
import './App.css';
import './Firebase'
import HeaderPanel from './components/HeaderPanel';
import DynamicPanel from './components/DynamicPanel';
import ActionsPanel from './components/ActionsPanel';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_action_page: "home"
    }
  }


  setActionPanel = (name) => {
    this.setState({ current_action_page: name })
  }

  render() {
    return (
      <div className="App">
        <HeaderPanel setActionsPage={(page) => this.setActionPanel(page)} />
        <DynamicPanel />
        <ActionsPanel currentAction={this.state.current_action_page} />
      </div>
    );
  }

}
