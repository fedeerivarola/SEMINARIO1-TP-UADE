import React from "react";
import "./Comercios.css";
import LocalCard from "./LocalCard/LocalCard";
import img1 from './img/img1.jpg'
import ComercioModal from './ComercioModal/ComercioModal';

class Comercios extends React.Component {
  state = {
    modalOpen: false,
    selectedLocal: null,
    filter: '',
    comercios: [
      {
        id: 0,
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 1,
        name: "24hs",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 2,
        name: "El rojito",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 3,
        name: "Pizza 10",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 4,
        name: "Barreta",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 5,
        name: "Kleo",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 6,
        name: "La Mediterranea",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 7,
        name: "Old Store",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
      {
        id: 8,
        name: "Hollers",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
        products: [{name: "Alfajor"}]
      },
    ],
  };

  handleChange = (e) => {
    console.log("hola");
    this.setState({
        filter: e.target.value
    });
  }

  handleClickLocal = (local) => {
    this.setState({
      modalOpen: true,
      selectedLocal: local,
    });
  }

  closeModal = () => {
    this.setState({modalOpen: false})
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
          <ComercioModal 
            open={this.state.modalOpen}
            close={this.closeModal}
            local={this.state.selectedLocal}
          />
          <div className="LocalSearch">
              <input
                placeholder="Buscar..."
                onChange= {(event) => this.handleChange(event)} 
              ></input>
          </div>
          <div className="LocalList">
              {showLocals.map((c) => {
                return <LocalCard 
                  clicked={() => this.handleClickLocal(c)}
                  key={c.id} 
                  data={c} 
                />;
              })}
          </div>
        </div>
    );
  }
}

export default Comercios;
