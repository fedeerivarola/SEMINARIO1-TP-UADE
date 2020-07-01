import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

//Imagenes
import resumenLogo from '../../assets/sd-resumen.png';
import comercioLogo from '../../assets/sd-comercio.png';
import niñosLogo from '../../assets/sd-niños.png';
import saldoReporte from '../../assets/sd-reporte.png';
import tarjetasLogo from '../../assets/sd-tarjetas.png';

const sideDrawer = props => {
    return(
        <div className="SideDrawer">
            <div className="List">
                <Link to="/home">
                        <img src={resumenLogo} alt=""></img>
                        Resumen
                </Link>
                <Link to="/reportMaker">
                    <img src={saldoReporte} alt=""></img>
                    Reporte
                </Link>
                <Link to="/tarjetas">
                    <img src={tarjetasLogo} alt=""></img>
                    Tarjetas
                </Link>
                <Link to="/childrens">
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