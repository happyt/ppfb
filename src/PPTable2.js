import React, { Component } from 'react';

export default class PPTable extends Component {

    constructor(props) {
        super(props);
        
        const startNo = this.props.group * 8;
  //      this.state = {matches: JSON.stringify(this.props.db.matches.Matches.slice(startNo, 10))};
        this.setState = {match: "abc", matches: this.props.db.matches.Matches.slice(startNo, 10)};
        // const listItems = this.state.matches.map((mm,index) => (
        //     // <li key={index}>{mm}</li>
        //     console.log("12");
        // ));
    }
    render() {
        // const listItems = this.state.matches.map((mm,index) => (
        //     <li key={index}>{mm}</li>
        // ));

        //  {this.state.matches.map((mm,index) =>  <li key={index}>mm</li>)}
        return Object.entries(this.props.db.matches.Matches.slice(1, 10)).map((mm, i) => {
            return <div key={i}>mm</div>; 
        });
    }
}