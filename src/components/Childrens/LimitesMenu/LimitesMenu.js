import React from 'react';
import './LimitesMenu.css';
import { dbPadres, dbMov, fieldValue } from '../../../services/firebase';


class LimitesMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hijo: props.hijoLM,
            padre: props.padreLM,
            error: null
        }
        this.submitAsignada = this.submitAsignada.bind(this);
    }


    submitAsignada = () => {

        let nuevoSaldo = parseInt(this.state.padre.saldo) - parseInt(this.state.asignarSaldo);

        if (nuevoSaldo > 0) {
            let movimiento = {
                desc: `Saldo asignado a ${this.state.hijo.nombre}`,
                nombre: this.state.padre.nombre,
                saldo: this.state.asignarSaldo,
                gasto: "1",
                tipo: "gastos",
                uid: this.state.padre.mail,
                time: fieldValue.serverTimestamp()
            }

            let refPadre = dbPadres.doc(this.state.padre.mail);
            let padre = this.state.padre;
            padre.saldo = nuevoSaldo;

            refPadre.update({ saldo: nuevoSaldo }).then(() => {
                let nuevoMovimiento = dbMov.doc(this.state.padre.mail).collection("historial").doc();
                nuevoMovimiento.set(movimiento);
                this.setState({ padre });
            }).catch(error => {
                this.setState({ error: error.message });
                alert(error.message);
            });
        } else {
            this.setState({ error: 'La asignación supera tu saldo actual.' })
        }
    }

    handleInputSaldo = (event) => {
        console.log(event);
        this.setState({ asignarSaldo: event.target.value });
    }

    render() {


        return (
            <div className="LimitesMenu">
                <div className="LimitesLeft">
                    <img style={{ marginTop: '10px', width: '5rem', height: '5rem', objectFit: 'cover' }} src={this.state.padre.profilePic} alt={`limite-${this.state.padre.nombre}`} />
                    <p>Credito en cuenta de padre: </p>
                    <p>$ {this.state.padre.saldo}</p>
                </div>
                <div className="LimitesRight">
                    <img style={{ marginTop: '10px', width: '5rem', height: '5rem', objectFit: 'cover' }} src={this.state.hijo.avatar} alt={`limite-${this.state.hijo.nombre}`} />
                    <p>¿ Cuanto deseas asignarle a {this.state.hijo.nombre} ?</p>
                    <input type="number" placeholder="Saldo a asignar" onChange={(event) => this.handleInputSaldo(event)} />
                    <button onClick={() => { this.submitAsignada() }}>Asignar Saldo</button>
                    {
                        this.state.error &&
                        <div className="alert alert-danger" role="alert">
                            <span style={{ color: "red" }}>Ups! {this.state.error}</span>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default LimitesMenu;