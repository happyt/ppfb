import React, { Component } from 'react';
import './PPGroup.css';

export default class PPTable extends Component {

    constructor(props) {
        super(props);
        
        const startNo = this.props.group * 10;
        const grp = ["A", "B", "C", "D", "E", "F", "G", "H"].splice(this.props.group,1);
        this.state = {grp: grp, start: startNo, matches: this.props.db.matches.Matches.slice(startNo, startNo+10)};
    }
    render() {
        const listItems = this.state.matches.map((mm,index) => (
                <div className="match"  key={index}>
                    <div className="player">
                        <div className="name">{mm.PlayerA ? mm.PlayerA : "-" }</div>
                    </div>
                    <div className="player">
                        <div className="name">{mm.PlayerB ? mm.PlayerB : "-"}</div>
                    </div>
                 </div>
        ));

        return (
            <div>
                    <div className="column">
                        <PPGroup grp={grp} />
                        {listItems}
                    </div>
                 </div>
 
        );
    }
}

/*

  <div class="columns">
        <div class="column">
            <div class="heading">GROUP A</div>
            <div class="match">
                <div class="player">
                    <div class="name">K.Galbraithe</div>
                    <div class="nationality">
                        <div class="flag GBR"></div> GBR</div>
                    <div class="star"></div>
                    <div class="scores">
                        <div class="set ">3</div>
                        <div class="set ">15</div>
                        <div class="set ">15</div>
                    </div>
                </div>
                <div class="player">
                    <div class="name">G.Foxton</div>
                    <div class="nationality">
                        <div class="flag FRA"></div>FRA</div>
                    <div class="seed">(8)</div>
                    <div class="winner"></div>
                    <div class="scores">
                        <div class="set ">15</div>
                        <div class="set ">3</div>
                        <div class="set ">6</div>
                    </div>
                </div>
            </div>

            */