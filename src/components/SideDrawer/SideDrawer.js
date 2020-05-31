import React from 'react'
import './SideDrawer.css'
import Link from 'react-router-dom'

//Imagenes
import resumenLogo from '../../assets/sd-resumen.png';
import comercioLogo from '../../assets/sd-comercio.png';
import niñosLogo from '../../assets/sd-niños.png';
import saldoLogo from '../../assets/sd-saldo.png';
import movimientosLogo from '../../assets/sd-movimientos.png';

const sideDrawer = props => {
    return(
        <div className="SideDrawer">
            <div className="List">
                <a active href="/home">
                    <img src={resumenLogo} alt=""></img>
                    Resumen
                </a>
                <a href="/home">
                    <img src={saldoLogo} alt=""></img>
                    Saldo
                </a>
                <a href="/home">
                    <img src={movimientosLogo} alt=""></img>
                    Movimientos
                </a>
                <a href="/home">
                    <img src={niñosLogo} alt=""></img>
                    Niños
                </a>
                <a href="/home">
                    <img src={comercioLogo} alt=""></img>
                    Comercios
                </a>
            </div>
        </div>
    );

}

export default sideDrawer;