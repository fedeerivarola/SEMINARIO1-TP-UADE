import React from 'react';
import './CardSaldo.css';
import masCashVector from './masCashVector.svg'
import CashVector from './CashVector.svg'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { setSaldo, createMovimiento, userChanges, getPapa } from '../../services/firebase';
import { Link } from 'react-router-dom';



class CardSaldo extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            openModal: false,
            sumarSaldo: 0,
            isUpdated: false
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saldoInputHandler = this.saldoInputHandler.bind(this);
        this.submitSaldo = this.submitSaldo.bind(this);
    }


    
    componentDidMount() {
        userChanges((user) => {
             console.log('usuario: ' + user.email);
             this.setState({ user });
 
             getPapa(this.state.user.email).then(
                 (padre) => {
                     this.setState({ padre: padre });
                 }
             )
 
         });
 
     }

    handleOpen = () => {
        this.setState({ openModal: true });
    };

    handleClose = () => {
        this.setState({ openModal: false });
    };

    saldoInputHandler = (e) => {
        this.setState({ sumarSaldo: e.target.value });
    }

    submitSaldo = () => {
        let movimiento = {
            concepto: "Recarga de saldo",
            padreMail: 'test@test.com',
            responsable: 'Monica Alvarez',
            updateSaldo: "+" + this.state.sumarSaldo
        }

        console.log(this.state);

        let nuevoSaldo = {
            mail: this.state.padre.mail,
            nombre: this.state.padre.nombre,
            saldo: parseInt(this.state.padre.saldo) + parseInt(this.state.sumarSaldo)
        }

        createMovimiento(movimiento)
        setSaldo(nuevoSaldo);
        this.setState({ openModal: false });
        this.setState({isUpdated: true})
    }

    createMovimiento = async (data) => {
        try {
            await createMovimiento({
                ...data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    setSaldo = async (data) => {
        try {
            console.log(data)
            await setSaldo({
                ...data,
            });
        } catch (error) {
            console.log(error);
        }
    }


    render() {

        return (
            <div className="CardSaldo">
                <img className="imgSaldo" alt='imgSaldo' src={CashVector} />
                <div className="lblSaldo"><b>Saldo</b></div>
                <button className="btnSaldo" onClick={this.handleOpen}><img className="imgBtn" alt='imgSumarSaldo' src={masCashVector} />Añadir fondos</button>

                <Modal className="modal"
                    open={this.state.openModal}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.openModal}>
                        <div className="cargarSaldo">
                            <h2 id="transition-modal-title">Ingrese saldo a cargar</h2>
                            <input type="number" onChange={(event) => this.saldoInputHandler(event)} />
                            <button onClick={this.submitSaldo}>CARGAR</button>
                        </div>
                    </Fade>
                </Modal>
            </div>

        );
    }
}

export default CardSaldo;