import React from 'react'
import './SideDrawer.css'

const sideDrawer = props => {
    return(
        <div className="SideDrawer">
            <div className="List">
                <a active href="/home">Resumen</a>
                <a href="/home"><li>Saldo</li></a>
                <a href="/home"><li>Movimientos</li></a>
                <a href="/home"><li>Niños</li></a>
                <a href="/home"><li>Locales</li></a>
            </div>
        </div>
    );

}

export default sideDrawer;