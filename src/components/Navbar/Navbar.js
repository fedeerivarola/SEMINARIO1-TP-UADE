import React from 'react';
import './Navbar.css';
import { userChanges, getPapa } from '../../services/firebase';
import { Avatar } from '@material-ui/core';
import moni from './moni.png';
import Logo from '../../assets/logo.png';

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
                <div className="Logo">
                    <img src={Logo}  alt="Logo"/>
                </div>
                <div className="user">
                    <div className="saldo">
                        ${this.state.padre.saldo}
                    </div>
                    <Avatar className="Avatar"
                        src={moni} />
                    <div className="UserName">{this.state.padre.nombre}</div>
                </div>
            </div>
        );
    }
}

export default Navbar;