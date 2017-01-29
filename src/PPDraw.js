import React, { Component } from 'react';
import PPLastHeader from './PPLastHeader.js';
import PPMatch from './PPMatch.js';

export default class PPDraw extends Component {

    render() {
        const startNo = this.props.start;
        const endNo = this.props.end;
        const matches = this.props.db.matches.Matches.slice(startNo, endNo);
        
        const listItems = matches.map((mm, index) => (
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

