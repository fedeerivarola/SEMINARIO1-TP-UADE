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
    products: [
      { 
        name: "Alfajor", 
        img: "https://images.rappi.com.ar/products/437290-1554301117.png?d=128x90&e=webp"
      },
      {
        name: "Banana",
        img: "https://img.freepik.com/foto-gratis/platano-amarillo-fresco_2829-13457.jpg?size=626&ext=jpg"
      },
      { 
        name: "Gallo Barra", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/862105-292-292/Barra-Ba%C3%B1ada-Gallo-Yogubar-Frutilla-Sin-Tacc-X-20-Gr-1-470809.jpg?v=637233700949330000"
      },
      { 
        name: "Barra Arroz", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/180221-1000-1000/0779147600593-1.jpg?v=635841456868500000"
      },
      {
        name: "Yogur Frutilla",
        img: "https://walmartar.vteximg.com.br/arquivos/ids/848493-1000-1000/0779827024428-1.jpg?v=636994049258830000"
      },{ 
        name: "Barra Egran", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/180220-1000-1000/0779147600591-1.jpg?v=635841456853830000"
      },
      {
        name: "Banana",
        img: "https://img.freepik.com/foto-gratis/platano-amarillo-fresco_2829-13457.jpg?size=626&ext=jpg"
      },
      { 
        name: "Gallo Barra", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/862105-292-292/Barra-Ba%C3%B1ada-Gallo-Yogubar-Frutilla-Sin-Tacc-X-20-Gr-1-470809.jpg?v=637233700949330000"
      },
      { 
        name: "Barra Arroz", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/180221-1000-1000/0779147600593-1.jpg?v=635841456868500000"
      },
      {
        name: "Yogur Frutilla",
        img: "https://walmartar.vteximg.com.br/arquivos/ids/848493-1000-1000/0779827024428-1.jpg?v=636994049258830000"
      },{ 
        name: "Barra Egran", 
        img: "https://walmartar.vteximg.com.br/arquivos/ids/180220-1000-1000/0779147600591-1.jpg?v=635841456853830000"
      },
      
    ],
    comercios: [
      {
        id: 0,
        name: "La tiendita",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
      },
      {
        id: 1,
        name: "24hs",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
      },
      {
        id: 2,
        name: "El rojito",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
      },
      {
        id: 3,
        name: "Pizza 10",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
      },
      {
        id: 4,
        name: "Barreta",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
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
      },
      {
        id: 7,
        name: "Old Store",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
      },
      {
        id: 8,
        name: "Hollers",
        address: "Av. San Juan 642",
        type: "Kiosco",
        time: "10 a 22hs",
        img: img1,
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
            productos={this.state.products}
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
                  products={this.state.products} 
                />;
              })}
          </div>
        </div>
    );
  }
}

export default Comercios;
