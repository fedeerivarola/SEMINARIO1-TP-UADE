import React from 'react';
import './Login.css';
import { auth } from '../../services/firebase/config.js';
import Logo from '../../assets/logo.png';

class Login extends React.Component {

    

    constructor() {
        super(...arguments)
        this.state = {
            username: '',
            password: ''
        };

        this.userInputHandler = this.userInputHandler.bind(this);
        this.passInputHandler = this.passInputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    

    handleAuth() {

        console.log(`currentUser: ${auth.currentUser}`);
        if (auth.currentUser) {
            // [START signout]
            auth.signOut();
            // [END signout]
        } else {

            var email = this.state.username;
            var password = this.state.password;
            // var email = "test@test.com";
            // var password = "123456";
            if (email.length < 4) {
                alert('Please enter an email address.');
                return;
            }
            if (password.length < 4) {
                alert('Please enter a password.');
                return;
            }
            // Sign in with email and pass.
            // [START authwithemail]

            auth.signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    console.log(`error ; ${error}`);
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    //console.log(error);
                    alert("No work");
                    // [END_EXCLUDE]
                });
            this.props.history.push({pathname: "/home"});
            // [END authwithemail]
        }

        

    };

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
        this.handleAuth();
    }

    registrarse = () => {
        this.props.history.push({pathname: "/registrarse", state:this.state});
        
    }

    render() {
        return (
            <div className="Background">
                
                <div className="LoginCard">
                    <div className="CardHeader">
                        <img src={Logo}  alt="Logo"/>     
                    </div>
                    <div className="CardContent">
                        <form className="LoginForm">
                            <p>Usuario</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)} />
                            <button onClick={this.submitHandler}>INGRESAR</button>
                            <button onClick={this.registrarse}>No tienes cuenta?</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;