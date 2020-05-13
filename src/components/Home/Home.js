import React, { Component } from 'react';
import './Home.css';
import ListHistory from '../ListHistory/ListHistory.js';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            mail : this.props.mail,
            username: this.props.username
        }
    }

    render(){
        return(
            <div>
                <ListHistory />
            </div>
        );
    }
}

export default Home;