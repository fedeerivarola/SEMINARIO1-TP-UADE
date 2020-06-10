import React from 'react'
import './LocalCard.css'

const localCard = props => {
    return(
        <div className="LocalCard">
            <div className="HeaderImg">
                <img src={props.data.img} alt=""></img>
            </div>
            <h1>{props.data.name}</h1>
            <p>{props.data.address}</p>
            <p>{props.data.type}</p>
            <p>{props.data.time}</p>

        </div>
    );
}

export default localCard;