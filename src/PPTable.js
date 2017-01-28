import React, { Component } from 'react';
import PPGroupHeader from './PPGroupHeader.js';
import PPMatch from './PPMatch.js';

export default class PPTable extends Component {

    constructor(props) {
        super(props);

        const startNo = this.props.group * 10;
        this.state = { start: startNo, matches: this.props.db.matches.Matches.slice(startNo, startNo + 10) };
        console.log("table");

    }
    render() {
        const listItems = this.state.matches.map((mm, index) => (
            <PPMatch key={index} matchData={JSON.stringify(mm)} />
        ));

        return (
            <div>
                <div className="column">
                    <PPGroupHeader group={this.props.group} />
                    {listItems}
                </div>
            </div>

        );
    }
}

