import React from 'react'
import './SideDrawer.css'
import { Route, Link } from 'react-router-dom'

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
                <Link to="/home">
                        <img src={resumenLogo} alt=""></img>
                        Resumen
                </Link>
                <Link to="/saldo">
                    <img src={saldoLogo} alt=""></img>
                    Saldo
                </Link>
                <Link to="/movimientos">
                    <img src={movimientosLogo} alt=""></img>
                    Movimientos
                </Link>
                <Link to="/niños">
                    <img src={niñosLogo} alt=""></img>
                    Niños
                </Link>
                <Link to="/comercios">
                    <img src={comercioLogo} alt=""></img>
                    Comercios
                </Link>
            </div>
        </div>
    );

}

export default sideDrawer;