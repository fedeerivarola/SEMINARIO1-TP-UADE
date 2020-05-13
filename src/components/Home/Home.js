import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';
import CardSaldo from '../CardSaldo/CardSaldo';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: this.props.mail,
            username: this.props.username
        }
    }

    render() {
        return (
            <div className="Home">
                <div>
                    <ListHistory />
                    <CardSaldo />
                </div>
            </div>
        );
    }
}

export default Home;