import React from 'react';
import './Login.css';
import Logo from '../../assets/logo.png'
import { login } from '../../helpers/auth'

class Login extends React.Component {

    constructor(props) {

        super(props)
        this.state = {
            username: '',
            password: '',
            loginMessage: null
        };

        this.userInputHandler = this.userInputHandler.bind(this);
        this.passInputHandler = this.passInputHandler.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth = (e) => {
        e.preventDefault()
        login(this.state.username, this.state.password)
            .catch((error) => {
                this.setState({ loginMessage: 'Invalid username/password.' });
            })
    }

    userInputHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passInputHandler = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    registrarse = () => {
        this.props.history.push({ pathname: "/registrarse", state: this.state });
    }

    render() {
        return (
            <div>
                <div className="LoginCard">
                    <div className="CardHeader">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="CardContent">
                        <form className="LoginForm" onSubmit={this.handleAuth}>
                            <p>Usuario</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)} />

                            {
                                this.state.loginMessage &&
                                <div className="alert alert-danger" role="alert">
                                    <span style={{ color: "red" }}>Error:{this.state.loginMessage}</span>
                                </div>
                            }
                            <button type="submit">INGRESAR</button>
                            <button onClick={this.registrarse}>No tienes cuenta?</button>
                        </form>
                    </div>
                </div>

                <div className="Background"></div>
                <div className="Background2"></div>
            </div>
        );
    }
}

export default Login;