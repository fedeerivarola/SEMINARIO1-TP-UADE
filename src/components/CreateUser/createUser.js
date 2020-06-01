import React from 'react';
import './createUser.css';
import { auth } from '../../helpers/auth'


class createUser extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            username: '',
            password: '',
            signupMessage: null
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

    submitHandler = (e) => {
        e.preventDefault()
        auth(this.state.username, this.state.password)
            .catch((error) => {
                this.setState({ signupMessage: error.message });
            });
    }

    render() {
        return (
            <div className="Background">
                <div className="CreateUser">
                    <div className="CardHeader" />
                    <div className="CardContent">
                        <form className="CreateForm" onSubmit={this.submitHandler}>
                            <p>Email</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Contraseña</p>
                            <input type="password" onChange={(event) => this.passInputHandler(event)} />
                            {
                                this.state.loginMessage &&
                                <div className="alert alert-danger" role="alert">
                                    <span style={{ color: "red" }}>Error:{this.state.signupMessage}</span>
                                </div>
                            }
                            <button type="submit">REGISTRARSE</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default createUser;