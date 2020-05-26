import React from 'react';
import './createUser.css';
import { auth } from '../../services/firebase/config.js';

class createUser extends React.Component {

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

    handleAuth() {
        //registro de contacto
        var email = this.username;
        var password = this.password;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END createwithemail]
        this.props.history.push({pathname: "/login", state:this.state});
    }

    submitHandler = () => {
        this.handleAuth();
    }

    render() {
        return (
            <div className="Background">
                <div className="CreateUser">
                    <div className="CardHeader" />
                    <div className="CardContent">
                        <form className="CreateForm">
                            <p>Email</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)} />
                            <button onClick={this.submitHandler}>REGISTRARSE</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default createUser;