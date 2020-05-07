import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    state = {
        username: '',
        password: ''
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

    submitHandler = () => {
        this.props.login();
    }

    render(){
        return(
            <div className="Background">
                <div className="LoginCard">
                    <div className="CardHeader"/>
                    <div className="CardContent">
                        <form className="LoginForm">
                            <p>Usuario</p>
                            <input onChange={(event) => this.userInputHandler(event)}/>
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)}/>
                            <button onClick={this.submitHandler}>INGRESAR</button>
                            <div className="CreateAccountContainer">
                                <div className="CreateAccount">
                                    <p>No tienes cuenta?</p>
                                    <p>Click aqui</p>
                                </div>
                                
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;