import React from 'react';
import './ComercioModal.css';

const comercioModal = (props) => {
    return(
        props.open ?
            <div className="Backdrop">
                <div className="Modal">
                    <div className="ModalSidebar">
                        <div className="ModalImg">
                            <img src={props.local.img} alt=""></img>
                        </div>
                        <div className="ModalInfo">
                            <h1>{props.local.name}</h1>
                            <p>{props.local.address}</p>
                            <p>{props.local.type}</p>
                            <p>{props.local.time}</p>
                        </div>
                    </div>
                    <div className="ModalListProducts">
                        <div className="Header">
                            <h2>Productos</h2>
                            <h2 className="Close" onClick={props.close}>X</h2>
                        </div>
                        {props.local.products.map((p) => {
                            return <div>{p.name}</div>;
                        })}
                    </div>
                </div>
            </div> 
        : null
    );
}

export default comercioModal;