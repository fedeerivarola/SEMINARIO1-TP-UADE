import React from 'react';
import './Navbar.css';
import { Avatar } from '@material-ui/core';
import moni from './moni.png';
import { logout } from '../../helpers/auth'
import { dbPadres } from '../../services/firebase'
import Logo from '../../assets/logo.png';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: props.user,
            padre: {}
        }
    }

    componentWillMount() {

        let docRef = dbPadres.doc(this.state.user.userEmail);
        docRef.get().then((doc) => {
            if (doc.exists) {
                this.setState({ padre: doc.data(), loading: false });
            } else {
                docRef.set({
                    mail: this.state.user.userEmail
                });
                this.setState({ padre: { mail: this.state.user.userEmail, nombre: 'none', saldo: 0 }, loading: false });
            }
        }).catch((error) => {
            console.log(`ocurrio error: ${error}`);
        });

        console.log(this.state);
    }


    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
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