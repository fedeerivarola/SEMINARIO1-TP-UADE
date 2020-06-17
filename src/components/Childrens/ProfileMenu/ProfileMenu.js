import React from 'react';
import './ProfileMenu.css'

const ProfileMenu = props => {

    let selectedHijo = props.selectedHijo;

    return (
        <div className="ProfileHijo">
            <div>
                <img style={{ marginTop: '10px', width: '5rem', height: '5rem', objectFit: 'cover' }} src={selectedHijo.avatar} alt={selectedHijo.nombre}></img>
            </div>
            <h1 style={{ textAlign: "center" }}>{selectedHijo.nombre}</h1>
            <form className="formProfileHijo">
                <input type="text" placeholder={`Nombre: ${selectedHijo.nombre}`}></input>
                <input type="text" placeholder={`Edad: ${selectedHijo.edad}`}></input>
                <h5>{`Saldo actual: $${selectedHijo.saldoAsignado}`}</h5>
                {selectedHijo.esCeliaco ? <p>Es celiaco</p> : null}
                {selectedHijo.esDiabetico ? <p>Es diabetico</p> : null}
                <div className="botonesProfileHijo"><button>BORRAR</button><button>GUARDAR</button></div>
            </form>
        </div>
    )
}

export default ProfileMenu;