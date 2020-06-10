import React from "react";
import "./Comercios.css";
import LocalCard from "./LocalCard/LocalCard";
import Select from 'react-select';

import img1 from './img/img1.jpg'

class Comercios extends React.Component {
  state = {
    comercios: [
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
    ],
  };

  render() {
    return (
        <div className="Locals">       
            <div className="LocalSearch">
                <Select className="selectLocal"/>
            </div>
            <div className="LocalList">
                {this.state.comercios.map((c) => {
                    return <LocalCard data={c} />;
                })}
            </div>
        </div>
    );
  }
}

export default Comercios;
