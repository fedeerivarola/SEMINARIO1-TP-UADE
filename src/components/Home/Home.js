import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';
import CardSaldo from '../CardSaldo/CardSaldo';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Home extends Component {

    //CONS TRUC YOR
    constructor(props) {
        super(props);
        this.state = {
            user: props.userHome,
            padre: props.padreHome,
            hijos: props.hijosHome,
            profile: props.profileHome,
            historial: [],
            loading: false
        }
        this.handleNewMovimiento = this.handleNewMovimiento.bind(this);
    }

    handleNewMovimiento = (value) => {
        let movimientos = this.state.historial;
        movimientos.push(value);
        this.setState({ historial: movimientos });
    }

    render() {
        return (
            <div className="Home">
                <div className="Column">
                    <ListHistory userLH={this.state.user} hijosLH={this.state.hijos} profileLH={this.state.profile} historial={this.state.historial} />
                </div>
                <div className="Column">
                    <div className="cardSaldo">
                        <CardSaldo userCS={this.state.user} padreCS={this.state.padre} hijosCS={this.state.hijos} newMovimiento={() => this.handleNewMovimiento} />
                    </div>
                    <div className="timelineTwitter">
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="UNICEFargentina"
                            options={{ height: 400, width: 300 }}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;