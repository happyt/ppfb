import React, { Component } from 'react';
import logo from './logo.svg';
import PPTable from './PPTable.js';
import './App.css';
import './PPTable.css';

export default class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>World Championship Ping Pong</h2>
        </div>

        <div className="columns">
          <PPTable group="0" db={this.props} />
          <PPTable group="1" db={this.props} />
          <PPTable group="2" db={this.props} />
          <PPTable group="3" db={this.props} />
        </div>
        <div className="columns">
          <PPTable group="4" db={this.props} />
          <PPTable group="5" db={this.props} />
          <PPTable group="6" db={this.props} />
          <PPTable group="7" db={this.props} />
        </div>
        <div>
          <p>{JSON.stringify(this.props.matches.Matches[0])}</p>
        </div>
      </div>
    );
  }
}
