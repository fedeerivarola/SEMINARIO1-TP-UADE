import React from 'react';
import './Navbar.css';
import { Avatar } from '@material-ui/core';
import moni from './moni.png';
import { logout } from '../../helpers/auth'
import Logo from '../../assets/Logo.png'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            padre: props.padre
        }
    }

    render() {
        return (
            <div className="Navbar">
                <div className="Logo">
                    <img src={Logo}  alt="Logo"/>
                </div>
                <div className="User">
                    <div className="Saldo">
                        ${this.state.padre.saldo}
                    </div>
                    <Avatar className="Avatar"
                        src={moni} />
                    <div className="UserName">{this.state.padre.nombre}</div>
                    <button
                        style={{ border: 'none', background: 'transparent', color: 'white' }}
                        onClick={() => {
                            logout()
                        }}
                        className="navbar-brand">Cerrar Sesion</button>
                </div>
            </div>
        );
    }
}

export default Navbar;