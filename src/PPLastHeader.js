import React, { Component } from 'react';

export default class PPLastHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grpX : ["32", "16", "8", "4", "2"].splice(this.props.group,1)
        }
    }
    render() {

        return (
                <div className="lastHeading">LAST {this.state.grpX}</div>
        );
    }
}
