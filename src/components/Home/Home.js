import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';
import CardSaldo from '../CardSaldo/CardSaldo';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Home extends Component {

    //CONS TRUC YOR
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: props.userHome,
            padre: props.padreHome,
            loading: false
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="Column">
                    <ListHistory userLH={this.state.user} />
                </div>
                <div className="Column">
                    <div className="cardSaldo">
                        <CardSaldo userCS={this.state.user} padreCS={this.state.padre} />
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