import React from 'react';
import './CardSaldo.css';
import masCashVector from './masCashVector.svg'
import CashVector from './CashVector.svg'


class CardSaldo extends React.Component {

    render() {

        return (
            <div className="CardSaldo">
                <img className="imgSaldo" alt='imgSaldo' src={CashVector} />
                <div className="lblSaldo"><b>Saldo</b></div>
                <button className="btnSaldo"><img className="imgBtn" alt='imgSumarSaldo' src={masCashVector} />Añadir fondos</button>
            </div>
        );
    }
}

export default CardSaldo;