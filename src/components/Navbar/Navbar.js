import React from 'react';
import './Navbar.css';
import { userChanges, getPapa } from '../../services/firebase';
import { Avatar } from '@material-ui/core';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            padre: {}
        }
    }

    componentDidMount() {
       userChanges((user) => {
            console.log('usuario: ' + user.email);
            this.setState({ user });

            getPapa(this.state.user.email).then(
                (papa) => {
                    console.log("traje " + papa)
                    this.setState({ padre: papa });
                }
            )

        });

    }

    render() {

        console.log(this.props);
        return (
            <div className="Navbar">
                <div className="user">
                    <div className="saldo">
                        ${this.state.padre.saldo}
                    </div>
                    <Avatar className="Avatar"
                        src='https://public-v2links.adobecc.com/3d3b2a40-41b6-401c-66aa-accd993e5219/component?params=component_id%3A93ddad03-81c5-4394-8e43-fe226f012f51&params=version%3A0&token=1589411534_da39a3ee_ecfe7df313b21abf4ae4612ff9126683a5c0eb1b&api_key=CometServer1' />
                    <div className="UserName">{this.state.padre.nombre}</div>
                </div>
            </div>
        );
    }
}

export default Navbar;