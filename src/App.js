import React, { Component } from 'react';
import logo from './logo.svg';
import PPTable from './PPTable.js';
import PPDraw from './PPDraw.js';
import './App.css';
import './PPTable.css';

export default class App extends Component {

shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  render() {
    
    console.log("APP", JSON.stringify(this.props.matches.Matches[0].Sets[0]));

    

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
         <div className="columns">
         <PPDraw start="80" end="96" db={this.props} />
         <PPDraw start="96" end="104" db={this.props} />
         <PPDraw start="104" end="108" db={this.props} />
         <PPDraw start="108" end="111" db={this.props} />
         <PPDraw start="111" end="112" db={this.props} />
        </div>
        <div>
          <p>{JSON.stringify(this.props.matches.Matches[0])}</p>
        </div>
      </div>
    );
  }
}
