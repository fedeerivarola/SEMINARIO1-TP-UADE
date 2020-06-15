import React from 'react';
import './Navbar.css';
import { Avatar } from '@material-ui/core';
import moni from './moni.png';
import { logout } from '../../helpers/auth'
import Logo from '../../assets/logo.png'
import adulto from '../../assets/adulto.jpg';
import adulta from '../../assets/adulta.jpg';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        

        if (props.padre.genero == 'Masculino'){
            this.state = {
                user: props.user,
                padre: props.padre,
                imgProfile: 'https://previews.123rf.com/images/yupiramos/yupiramos1805/yupiramos180515118/101455452-cute-father-with-beard-avatar-character-vector-illustration-design.jpg'
            }
            console.log("Masculino");
        }else{
            this.state = {
                user: props.user,
                padre: props.padre,
                imgProfile: 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1609/yupiramos160912725.jpg'
            }
            console.log("Femenino");
        }
        console.log(this.state);
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