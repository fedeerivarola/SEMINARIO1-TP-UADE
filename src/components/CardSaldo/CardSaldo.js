import React from 'react';
import './CardSaldo.css';


class CardSaldo extends React.Component {

    render() {

        return (
            <div className="CardSaldo">
                <div className="desc">
                    <img className="imgSaldo" alt='imgSaldo' src='https://public-v2links.adobecc.com/3d3b2a40-41b6-401c-66aa-accd993e5219/component?params=component_id%3A88c7a32f-c6a2-4d1d-9e89-27c7a9da5ed7&params=version%3A0&token=1589464291_da39a3ee_eef990517658b533675b2896e72fa474c0801633&api_key=CometServer1' />
                    <p className="lblSaldo">Saldo</p>
                </div>
                <button className="btnSaldo"><img className="imgBtn" alt='imgSumarSaldo' src='https://public-v2links.adobecc.com/3d3b2a40-41b6-401c-66aa-accd993e5219/component?params=component_id%3Add741286-799e-4d03-b8d9-57323e91ac35&params=version%3A0&token=1589464291_da39a3ee_eef990517658b533675b2896e72fa474c0801633&api_key=CometServer1' />Añadir fondos</button> 
            </div>
        );
    }
}

export default CardSaldo;