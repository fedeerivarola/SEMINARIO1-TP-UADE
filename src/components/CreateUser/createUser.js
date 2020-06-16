import React from 'react';
import './createUser.css';
import { auth } from '../../helpers/auth';
import { dbPadres } from '../../services/firebase';
import SelectorGenero from '../Selector/SelectorGenero';
import Logo from '../../assets/logo.png';


class createUser extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            username: '',
            password: '',
            name: '',
            signupMessage: null
        };

        localStorage.setItem("genero_seleccionado", "Nulo");

        this.userInputHandler = this.userInputHandler.bind(this);
        this.nameInputHandler = this.nameInputHandler.bind(this);
        this.passInputHandler = this.passInputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }


    userInputHandler = (e) => {
        this.setState({
            username: e.target.value.toLowerCase()
        })
    }

    nameInputHandler = (e) => {
        this.setState({
            name: e.target.value.toLowerCase()
        })
    }

    passInputHandler = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();

        const gen = localStorage.getItem("genero_seleccionado");
        let avatarURL = null;

        if (gen !== "Nulo") {
            if (gen === 'Masculino')
                avatarURL = 'https://previews.123rf.com/images/yupiramos/yupiramos1805/yupiramos180515118/101455452-cute-father-with-beard-avatar-character-vector-illustration-design.jpg';
            else
                avatarURL = 'https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1609/yupiramos160912725.jpg';

            let dataPadre = {
                username: this.state.username,
                name: this.state.name,
                genero: gen,
                saldo: 0,
                profilePic: avatarURL
            };
            console.log(dataPadre);

            let refPadre = dbPadres.doc(this.state.username);

            refPadre.set(dataPadre).then(() => {
                auth(this.state.username, this.state.password)
                    .catch((error) => {
                        this.setState({ signupMessage: error.message });
                    });
            }).catch(error => {
                console.log("Error: " + error.message);
                this.setState({ signupMessage: error.message });
            });
        } else {
            this.setState({ signupMessage: "Debe seleccionar un genero" });
        }
    }

    render() {
        return (
            <div>
                <div className="CreateUser">
                    <div className="CardHeaderRegister" >
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="CardContentRegister">
                        <form className="CreateForm" onSubmit={this.submitHandler}>
                            <p>Email</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Nombre</p>
                            <input onChange={(event) => this.nameInputHandler(event)} />
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)} />
                            <p>Genero</p>
                            <SelectorGenero />
                            <button type="submit">REGISTRARSE</button>
                        </form>
                        {
                            this.state.signupMessage &&
                            <div className="alert alert-danger" role="alert">
                                <span style={{ color: "red" }}>Error:{this.state.signupMessage}</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="Background"></div>
                <div className="Background2"></div>
            </div>
        );
    }

}

export default createUser;
