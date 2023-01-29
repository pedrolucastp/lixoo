import React, { Component } from 'react';
import './App.css';
import './Firebase'
import AppHeader from './components/AppHeader';
import DynamicPanel from './components/DynamicPanel';
import ActionButton from './components/ActionButton';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <DynamicPanel/>

        <div className='Actions-panel'>
          <ActionButton title="Coletar" type="receiver" />
          <ActionButton title="Destinar" type="giver" />
        </div>
        
      </div>
    );
  }

}
