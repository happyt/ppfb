import React, { Component } from 'react';
import PPLastHeader from './PPLastHeader.js';
import PPMatch from './PPMatch.js';

export default class PPDraw extends Component {

    constructor(props) {
        super(props);

        const startNo = this.props.start;
        const endNo = this.props.end;
        this.state = { start: startNo, matches: this.props.db.matches.Matches.slice(startNo, endNo) };
    }
    render() {
        const listItems = this.state.matches.map((mm, index) => (
            <PPMatch key={index} matchData={JSON.stringify(mm)} />
        ));

        return (
            <div className="lastColumn">
                <PPLastHeader group={this.props.group} />
                {listItems}
            </div>
        );
    }
}

