import React, { Component } from 'react';
import logo from './logo.svg';
import PPTable from './PPTable.js';
import PPDraw from './PPDraw.js';
const qs = require('querystring-es3');

// import PPLastHeader from './PPLastHeader.js';
import './App.css';
import './PPTable.css';

export default class App extends Component {

  render() {
    const d = new Date().toLocaleString();    
    
    // adds the ? to the property list
    const xx = qs.parse(location.search.slice(1));

    let year = (xx.year) ? xx.year : "2019" ; // default
//    debugger;

    let matches = this.props.PingPong2019;
    if (year === "2017") matches = this.props.PingPong2017;
    if (year === "2018") matches = this.props.PingPong2018;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>World Championship Ping Pong {year}</h2>
        </div>

        <div className="columns">
          <PPTable group="0" dbm={matches} />
          <PPTable group="1" dbm={matches} />
          <PPTable group="2" dbm={matches} />
          <PPTable group="3" dbm={matches} />
        </div>9
        <div className="columns">
          <PPTable group="4" dbm={matches} />
          <PPTable group="5" dbm={matches} />
          <PPTable group="6" dbm={matches} />
          <PPTable group="7" dbm={matches} />
        </div>
        <div className="columns">
          <PPDraw start="96" end="104" group="1" dbm={matches} />
          <PPDraw start="104" end="108" group="2" dbm={matches} />
          <PPDraw start="80" end="96"  group="0" dbm={matches} />
          <PPDraw start="108" end="110" group="3" dbm={matches} />
          <PPDraw start="110" end="111" group="4" dbm={matches} />
        </div>
      </div>
    );
  }
}
// <div>
//   <p>Results 2017,8,9 - {d}</p>
// </div>
//  <p>{JSON.stringify(this.props.matches.Matches[80])}</p>