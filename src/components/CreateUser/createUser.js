import React from 'react';
import './createUser.css';
import { auth } from '../../helpers/auth';
import { dbPadres } from '../../services/firebase';


class createUser extends React.Component {

    constructor() {
        super(...arguments)
        this.state = {
            username: '',
            password: '',
            name: '',
            signupMessage: null
        };


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
       
        e.preventDefault()

        let dataPadre = {
            username: this.state.username,
            name: this.state.name
            };
        console.log(dataPadre);
        
        let refPadre = dbPadres.doc(this.state.username);

        refPadre.set({ 
            mail: this.state.username,
            nombre: this.state.name,
            saldo: 0 }).then(() => {
                auth(this.state.username, this.state.password)
                .catch((error) => {
                    this.setState({ signupMessage: error.message });
                });
                console.log("Se agrego" + "username: "+this.state.username +"name:"+ this.state.name);
        }).catch(error => {
            console.log("Error: "+error.message);
        });   

    }

    render() {
        return (
            <div>
                <div className="CreateUser">
                    <div className="CardHeader" />
                    <div className="CardContent">
                        <form className="CreateForm" onSubmit={this.submitHandler}>
                            <p>Email</p>
                            <input onChange={(event) => this.userInputHandler(event)} />
                            <p>Nombre</p>
                            <input onChange={(event) => this.nameInputHandler(event)} />
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
                <div className="Background"></div>
                <div className="Background2"></div>
            </div>
        );
    }

}

export default createUser;
