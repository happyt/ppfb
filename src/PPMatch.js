import React, { Component } from 'react';
import Player from './Player.js';

export default class PPMatch extends Component {
    constructor(props) {
        super(props);
//        console.log(JSON.stringify(props));
        this.state = {
            mm : JSON.parse(this.props.matchData)
        }
    }
    render() {
 //       console.log("match");
        const setsA = this.state.mm.Sets.map((ss, index) => {
             return(ss.ScoreA);
        });
       const setsB = this.state.mm.Sets.map((ss, index) => {
             return(ss.ScoreB);
        });

        return (
            <div className="match">
                <Player player={this.state.mm.PlayerA ? this.state.mm.PlayerA : "-"}
                    nation={this.state.mm.CountryA ? this.state.mm.CountryA : ""}
                    winner={this.state.mm.Result === 1 ? "*" : ""}
                    star={this.state.mm.SeedA > 0 ? "*" : ""}
                    scores={setsA}
                    wins={this.state.mm.TabA} />
                <Player player={this.state.mm.PlayerB ? this.state.mm.PlayerB : "-"}
                    nation={this.state.mm.CountryB ? this.state.mm.CountryB : ""}
                    winner={this.state.mm.Result === 2 ? "*" : ""}
                    star={this.state.mm.SeedB > 0 ? "*" : ""}
                    scores={setsB}
                    wins={this.state.mm.TabB} />
            </div>
        );
    }
}
/*
{"AddText":"15-13,11-15,15-2,","Group":1,
"GroupTo":0,"ID":"1","LoseTo":71,"PlayerA":"Baggaley","PlayerB":"Gonzales","Result":1,
"Sets":[
    {"DoubleA":false,"DoubleB":false,"Finished":false,"ScoreA":15,"ScoreB":13},
    {"DoubleA":false,"DoubleB":false,"Finished":false,"ScoreA":11,"ScoreB":15},
    {"DoubleA":false,"DoubleB":false,"Finished":false,"ScoreA":15,"ScoreB":2},
    {"DoubleA":false,"DoubleB":false,"Finished":false,"ScoreA":0,"ScoreB":0},
    {"DoubleA":false,"DoubleB":false,"Finished":false,"ScoreA":0,"ScoreB":0}
    ],"Swap":false,"Table":1,"WinTo":51}


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