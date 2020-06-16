import React from 'react';
import './RegisterHijo.css'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { dbPadres, dbHijos, avatar } from '../../../services/firebase/config'


class RegisterHijo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            padre: props.padreRH,
            errorMessage: null
        }
        this.fileInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.user) {
            if (this.state.nombre) {
                if (this.state.edad) {
                    if ((localStorage.getItem('avatarURL') && this.fileInput.current.files[0]) || (!localStorage.getItem('avatarURL') && !this.fileInput.current.files[0])) {


                        let celiac, diabetic;

                        this.state.esCeliaco === "si" ? celiac = true : celiac = false;
                        this.state.esDiabetico === "si" ? diabetic = true : diabetic = false;


                        let newHijo = {
                            nombre: this.state.nombre,
                            user: this.state.user,
                            edad: this.state.edad,
                            esCeliaco: celiac,
                            esDiabetico: diabetic,
                            padre: this.state.padre.mail,
                            saldoAsignado: 0,
                            avatar: localStorage.getItem('avatarURL')
                        }

                        localStorage.removeItem('avatarURL');

                        console.log(newHijo);
                        let refHijos = dbPadres.doc(this.state.padre.mail).collection("hijos");

                        refHijos.doc(newHijo.user).set(newHijo)
                            .then(() => {
                                dbHijos.doc(newHijo.user).set(newHijo)
                                    .then(() => {
                                        this.props.newHijo(newHijo);
                                    })
                                    .catch((error) => { this.setState({ errorMessage: error }) })
                            })
                            .catch((error) => {
                                console.log(error);
                                this.setState({ errorMessage: error });
                            })
                    } else if (this.fileInput.current.files[0]) {
                        this.setState({ errorMessage: "Aun estamos cargando la imagen :( vuelva a intentar" });
                    } else if (localStorage.getItem('avatarURL')){
                        localStorage.removeItem('avatarURL');
                        this.setState({ errorMessage: "Algo salio mal :( vuelva a intentar" });
                    }
                } else { this.setState({ errorMessage: "Debe ingresar una edad" }); }
            } else { this.setState({ errorMessage: "Debe ingresar un nombre" }); }
        } else { this.setState({ errorMessage: "Debe ingresar un usuario" }); }

    }

    fileInputHandler = (e) => {

        if (this.fileInput.current.files[0]) {
            if (this.state.user) {
                let newAvatar = avatar.child(`${this.state.user}.jpg`);
                var uploadTask = newAvatar.put(this.fileInput.current.files[0]);

                uploadTask.on('state_changed', function (snapshot) {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                }, function (error) {
                    localStorage.setItem('errorMessage', error.message)
                }, function () {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        localStorage.setItem('avatarURL', downloadURL);
                    });
                });

            } else {
                this.setState({ errorMessage: "Primero complete el usuario por favor" })
            }
        }

    }

    nameInputHandler = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }

    userInputHandler = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    ageInputHandler = (e) => {
        this.setState({
            edad: e.target.value
        })
    }

    celiacRadioHandler = (e) => {
        this.setState({
            esCeliaco: e.target.value
        })
    }

    diabeticRadioHandler = (e) => {
        this.setState({
            esDiabetico: e.target.value
        })
    }

    render() {
        return (
            <div className="RegisterHijo">
                <h2>Complete datos del hijo a registrar</h2>
                <form className="formRegisterHijo" onSubmit={this.handleSubmit}>
                    <p>Nombre</p>
                    <input required onChange={(event) => this.nameInputHandler(event)} />
                    <p>Usuario</p>
                    <input required onChange={(event) => this.userInputHandler(event)} />
                    <p>Edad</p>
                    <input required type="number" onChange={(event) => this.ageInputHandler(event)} />
                    <p>Es celiaco?</p>
                    <RadioGroup onChange={(event) => this.celiacRadioHandler(event)}>
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    <p>Es diabetico?</p>
                    <RadioGroup onChange={(event) => this.diabeticRadioHandler(event)}>
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    <p>Avatar</p>
                    <input type="file" ref={this.fileInput} onChange={(event) => this.fileInputHandler(event)} />
                    {/* <button type="submit">REGISTRAR</button> */}
                </form>
                {
                    this.state.errorMessage &&
                    <div className="alert alert-danger" role="alert">
                        <span style={{ color: "red" }}>Error:{this.state.errorMessage}</span>
                    </div>
                }
                <button onClick={this.handleSubmit}>REGISTRAR</button>
            </div>
        );
    }
}


export default RegisterHijo;