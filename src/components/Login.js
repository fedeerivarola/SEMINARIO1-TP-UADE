import React from 'react';
import '../App.css';
import firebase from 'firebase';

class Login extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            user: null,
            email: 'test@test.com',
            pass: '123456'
        };

        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPass = this.handleInputPass.bind(this);
        this.handleAuth = this.handleAuth.bind(this);

    }

    
    //funcion para manejar las credenciales al presionar boton de Login 
    handleAuth() {

        console.log(`currentUser: ${firebase.auth().currentUser}`);
        if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        } else {

            var email = this.state.email;
            var password = this.state.pass;
            console.log(`email: ${email}, pass: ${password}`)
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
            firebase.auth().signInWithEmailAndPassword(email, password)
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
                console.log(error);
                alert("No work");
                // [END_EXCLUDE]
            });
            // [END authwithemail]
        }
    };

    handleInputEmail(event) {
        console.log("handle mail");
        this.setState({ user: this.state.user, email: event.target.value, pass: this.state.pass });
    };

    handleInputPass(event) {
        console.log("handle pass");
        this.setState({ user: this.state.user, email: this.state.email, pass: event.target.value });
    };

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-33">Login</span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" id="email" name="email" placeholder="Email"
                                    value={this.state.email} onChange={this.handleInputEmail} />
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>

                            <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" id="pass" name="pass" placeholder="Password"
                                    value={this.state.pass} onChange={this.handleInputPass} />
                                <span className="focus-input100-1"></span>
                                <span className="focus-input100-2"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button onClick={this.handleAuth} className="login100-form-btn">Sign in</button>
                            </div>

                            <div className="text-center p-t-45 p-b-4">
                                <span className="txt1">Forgot   </span>
                                <a href="#" className="txt2 hov1">Username / Password?</a>
                            </div>

                            <div className="text-center">
                                <span className="txt1">Create an account?   </span>
                                <a href="#" className="txt2 hov1">Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login