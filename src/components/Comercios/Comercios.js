import React from "react";
import "./Comercios.css";
import LocalCard from "./LocalCard/LocalCard";
import Select from 'react-select';
import img1 from './img/img1.jpg'

class Comercios extends React.Component {
  state = {
    filter: '',
    comercios: [
      {
        id: 0,
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 1,
        name: "24hs",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 2,
        name: "El rojito",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 3,
        name: "Pizza 10",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 4,
        name: "Barreta",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 5,
        name: "Kleo",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 6,
        name: "La Mediterranea",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 7,
        name: "Old Store",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
      {
        id: 8,
        name: "Hollers",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1
      },
    ],
  };

  handleChange = (e) => {
    console.log("hola");
    this.setState({
        filter: e.target.value
    });
}

  render() {
    let showLocals = [];
    if (this.state.filter === ''){
        showLocals = this.state.comercios.map(comercio => {
          return comercio;
        });
    } else {
      showLocals = this.state.comercios.filter( comercio => {
        return comercio.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1;
      })
    }
    
    return (
        <div className="Locals">       
            <div className="LocalSearch">
                <input
                  placeholder="Buscar..."
                  onChange= {(event) => this.handleChange(event)} 
                ></input>
            </div>
            <div className="LocalList">
                {showLocals.map((c) => {
                    return <LocalCard key={c.id} data={c} />;
                })}
            </div>
        </div>
    );
  }
}

export default Comercios;
