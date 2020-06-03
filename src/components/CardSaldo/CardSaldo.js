import React from 'react';
import './CardSaldo.css';
import masCashVector from './masCashVector.svg'
import CashVector from './CashVector.svg'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { fieldValue, dbMov, dbPadres } from '../../services/firebase'

class CardSaldo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            padre: props.padreCS,
            user: props.userCS,
            openModal: false,
            sumarSaldo: 0,
            isUpdated: false,
            error: null
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saldoInputHandler = this.saldoInputHandler.bind(this);
        this.submitSaldo = this.submitSaldo.bind(this);
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
        console.log(`a ver q hay aca ${fieldValue.serverTimestamp()}`);
        let movimiento = {
            desc: "Recarga de saldo",
            name: this.state.padre.nombre,
            saldo: this.state.sumarSaldo,
            gasto: "0",
            tipo: "recarga",
            uid: this.state.user.userEmail,
            time: fieldValue.serverTimestamp()
        }

        let nuevoSaldo = parseInt(this.state.padre.saldo) + parseInt(this.state.sumarSaldo);
        let refPadre = dbPadres.doc(this.state.user.userEmail);

        refPadre.update({ saldo: nuevoSaldo }).then(() => {
            let nuevoMovimiento = dbMov.doc(this.state.user.userEmail).collection("historial").doc();
            nuevoMovimiento.set(movimiento)
        }).catch(error => {
            this.setState({ error: error.message });
            alert(error.message);
        });

        this.setState({ openModal: false });
        this.setState({ isUpdated: true });

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