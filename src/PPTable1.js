import React, { Component } from 'react';

export default class PPTable extends Component {

    constructor(props) {
        super(props);
        
        const startNo = this.props.group * 8;
  //      this.state = {matches: JSON.stringify(this.props.db.matches.Matches.slice(startNo, 10))};
        this.state = {match: "abc", matches: this.props.db.matches.Matches.slice(startNo, 10)};
        // const listItems = this.state.matches.map((mm,index) => (
        //     // <li key={index}>{mm}</li>
        //     console.log("12");
        // ));
    }
    render() {
        // const listItems = this.state.matches.map((mm,index) => (
        //     <li key={index}>{mm}</li>
        // ));

        //  {this.state.matches.map((mm,index) =>  <li key={index}>{mm}</li>)}

        return (
            <div>
               
                <p>{this.state.match}</p>
                <p>{this.state.matches}</p>
                 <ul>listItems</ul>
                <p>{JSON.stringify(this.props.db.matches.Matches[0])}</p>
            </div>
        );
    }
}