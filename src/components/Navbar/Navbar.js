import React from 'react';
import './Navbar.css';
import { Avatar } from '@material-ui/core';
import moni from './moni.png';
import { logout } from '../../helpers/auth'
import Logo from '../../assets/logo.png'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            padre: props.padre,
            imgProfile: props.profile
        }
    }

    render() {
        console.log(this.state.imgProfile)
        return (
            <div className="Navbar">
                <div className="Logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="User">
                    <div className="Saldo">
                        ${this.state.padre.saldo}
                    </div>
                    <Avatar className="Avatar"
                        src={this.state.imgProfile} />
                    <div className="UserName">{this.state.padre.nombre}</div>
                    <button className="Logout"
                        onClick={() => {
                            logout()
                        }}>Cerrar Sesion</button>
                </div>
            </div>
        );
    }
}

export default Navbar;