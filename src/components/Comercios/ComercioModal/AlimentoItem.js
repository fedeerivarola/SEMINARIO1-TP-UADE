import React from 'react';
import './AlimentoItem.css';

const alimentoItem = (props) => {
    return(
        <div className="AliItemCard">
            <div className="ItemImg">
                <img src={props.img} alt=""></img>
            </div>
            {props.name}
        </div>
    );
}

export default alimentoItem;