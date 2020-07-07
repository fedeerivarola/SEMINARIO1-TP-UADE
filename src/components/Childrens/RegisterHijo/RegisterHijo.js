import React from 'react';
import './RegisterHijo.css'
import { Modal, Fade, Backdrop, RadioGroup, Radio, FormControlLabel, Avatar } from '@material-ui/core';
import { dbPadres, dbHijos, avatar } from '../../../services/firebase/config'

class RegisterHijo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            padre: props.padreRH,
            avatarSelected: null,
            errorMessage: null,
            openModal: false
        }
        this.fileInput = React.createRef();
        this.handleAvatarSelected = this.handleAvatarSelected.bind(this)
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (this.state.user) {
    //         if (this.state.nombre) {
    //             if (this.state.edad) {
    //                 if ((localStorage.getItem('avatarURL') && this.fileInput.current.files[0]) || (!localStorage.getItem('avatarURL') && !this.fileInput.current.files[0])) {


    //                     let celiac, diabetic;

    //                     this.state.esCeliaco === "si" ? celiac = true : celiac = false;
    //                     this.state.esDiabetico === "si" ? diabetic = true : diabetic = false;


    //                     let newHijo = {
    //                         nombre: this.state.nombre,
    //                         user: this.state.user,
    //                         edad: this.state.edad,
    //                         esCeliaco: celiac,
    //                         esDiabetico: diabetic,
    //                         padre: this.state.padre.mail,
    //                         saldoAsignado: 0,
    //                         avatar: localStorage.getItem('avatarURL')
    //                     }

    //                     localStorage.removeItem('avatarURL');

    //                     console.log(newHijo);
    //                     let refHijos = dbPadres.doc(this.state.padre.mail).collection("hijos");

    //                     refHijos.doc(newHijo.user).set(newHijo)
    //                         .then(() => {
    //                             dbHijos.doc(newHijo.user).set(newHijo)
    //                                 .then(() => {
    //                                     this.props.newHijo(newHijo);
    //                                 })
    //                                 .catch((error) => { this.setState({ errorMessage: error }) })
    //                         })
    //                         .catch((error) => {
    //                             console.log(error);
    //                             this.setState({ errorMessage: error });
    //                         })
    //                 } else if (this.fileInput.current.files[0]) {
    //                     this.setState({ errorMessage: "Aun estamos cargando la imagen :( vuelva a intentar" });
    //                 } else if (localStorage.getItem('avatarURL')) {
    //                     localStorage.removeItem('avatarURL');
    //                     this.setState({ errorMessage: "Algo salio mal :( vuelva a intentar" });
    //                 }
    //             } else { this.setState({ errorMessage: "Debe ingresar una edad" }); }
    //         } else { this.setState({ errorMessage: "Debe ingresar un nombre" }); }
    //     } else { this.setState({ errorMessage: "Debe ingresar un usuario" }); }

    // }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.user) {
            if (this.state.nombre) {
                if (this.state.edad) {

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
                        avatar: this.state.avatarSelected
                    }

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

    handleOpenAvatarPicker = () => {
        this.setState({ openModal: true });
    };

    handleCloseAvatarPicker = () => {
        this.setState({ openModal: false });
    };

    handleAvatarSelected = (value) => {
        console.log(value)
        this.setState({ avatarSelected: value, openModal: false })
    };

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

        const avatarList = [
            {
                src: "https://firebasestorage.googleapis.com/v0/b/seminario-tp.appspot.com/o/profile%2FPeter123.jpg?alt=media&token=388b1012-4258-45e3-99f6-4e1b41651afb",
                alt: "avatar1"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/seminario-tp.appspot.com/o/profile%2Fmarta5.jpg?alt=media&token=e94dee29-effc-4689-be49-bb3d775a0c6d",
                alt: "avatar2"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/seminario-tp.appspot.com/o/avatars%2Fni%C3%B1o2.png?alt=media&token=6f0862c0-5203-4b7a-9c14-85c268ac6800",
                alt: "avatar3"
            },
            {
                src: "https://firebasestorage.googleapis.com/v0/b/seminario-tp.appspot.com/o/avatars%2Frobot-dev.png?alt=media&token=c4398d3f-985d-4d87-9ba5-061e96fb3830",
                alt: "avatar4"
            }
        ]

        return (
            <div className="RegisterHijo">
                <h1>Nuevo hijo</h1>
                <h4>Complete los siguientes datos</h4>
                <form className="formRegisterHijo" onSubmit={this.handleSubmit}>

                    <input placeholder="Nombre" required onChange={(event) => this.nameInputHandler(event)} />

                    <input placeholder="Usuario" required onChange={(event) => this.userInputHandler(event)} />

                    <input placeholder="Edad" required type="number" onChange={(event) => this.ageInputHandler(event)} />
                    <p>Es celiaco?</p>
                    <div className="RadioGroup">
                        <RadioGroup color="blue" onChange={(event) => this.celiacRadioHandler(event)}>
                            <FormControlLabel value="si" control={<Radio />} label="Si" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </div>

                    <p>Es diabetico?</p>
                    <RadioGroup onChange={(event) => this.diabeticRadioHandler(event)}>
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    <p>Avatar</p>
                    <Avatar
                        alt={'Avatar seleccionado'}
                        src={this.state.avatarSelected}
                        onClick={this.handleOpenAvatarPicker}
                    />

                    <Modal className="modal"
                        open={this.state.openModal}
                        onClose={this.handleCloseAvatarPicker}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={this.state.openModal}>
                            <div className="AvatarPicker">
                                <h3>Elije un avatar :)</h3>
                                <ul className="Avatar-list-container">
                                    {avatarList.map((value) =>
                                        <li className="Default" key={value.label}
                                            onClick={() => this.handleAvatarSelected(value.src)}
                                        >
                                            <Avatar
                                                style={{ width: '80px', height: '80px' }}
                                                alt={value.label}
                                                src={value.src}
                                            />
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </Fade>
                    </Modal>


                    {/* <label className="inputImg">
                        <input className="inputImg" type="file" ref={this.fileInput} onChange={(event) => this.fileInputHandler(event)} />
                        Subir imagen
                    </label> */}
                </form>
                {
                    this.state.errorMessage &&
                    <div className="alert alert-danger" role="alert">
                        <span style={{ color: "red" }}>Error:{this.state.errorMessage}</span>
                    </div>
                }
                <div className="RegisterFooter">
                    <button onClick={this.handleSubmit}>REGISTRAR</button>
                </div>
            </div>
        );
    }
}


export default RegisterHijo;