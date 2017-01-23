import React, { Component } from 'react';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const listScores = this.props.scores.map((ss, index) => (
            <div key={index} className="set">{ss}</div>
        ));
        return (
            <div className="player">
                <div>xx</div>
                <div className="name">{this.props.player}</div>             
                    { this.props.nation ? 
                        <div className="nationality">
                            <div className="flag GBR"></div> GBR</div>
                    : "" }
                    { this.props.star ? <div className="star"></div> : "" }
                    { this.props.winner ? <div className="winner"></div> : "" }
                    <div className="scores">
                        {listScores}
                    </div>
            </div>
        );
    }
}
