import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';
import CardSaldo from '../CardSaldo/CardSaldo';

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
                    <ListHistory user={this.state.user}/>
                </div>
                <div className="Column">
                    <CardSaldo user={this.state.user} padre={this.state.padre}/>
                    <div style={{backgroundColor: "green"}}> ACA VAN NOTICIAS O PROPAGANDAS </div>
                </div>
                
            </div>
        );
    }
}

export default Home;