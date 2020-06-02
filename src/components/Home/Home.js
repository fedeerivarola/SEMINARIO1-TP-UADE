import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';
import CardSaldo from '../CardSaldo/CardSaldo';

class Home extends Component {

    //CONS TRUC YOR
    constructor(props) {
        super(props);
        this.state = {
            user: props.userHome,
            loading: false
        }
    }

    render() {
        return (
            <div className="Home"> 
                <div className="Column">
                    <ListHistory user={this.state.user}/>
                </div>
                <div className="Column">
                    <CardSaldo />
                </div>
                
            </div>
        );
    }
}

export default Home;