import React from 'react'
import Card from 'react-credit-card-payment'
import './Tarjetas.css'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

class Tarjetas extends React.Component{
    state = {
        cardSelected: {
            bankName:'',
            cardHolder:'',
            cardNumber:'',
            issuer: null,
            theme:''
        },
        //hardcode data
        cards: [
            {
                bankName:'Santander',
                cardHolder:'Andrew White',
                cardNumber:'5684312578549382',
                issuer: 'visa',
                theme:'dark'
            },
            {
                bankName:'Provincia',
                cardHolder:'Andrew White',
                cardNumber:'7458321964823128',
                issuer: 'mastercard',
                theme:'light'
            }
        ],
        //New card fields
        newCard: true,
        editCard: false,
        bankname: '****',
        cardHolder: 'NOMBRE Y APELLIDO',
        cardNumber:'****************',
        issuer: 'visa',
        code: '',
        expire: ''
    }

    handleCardClick = (card) => {
        this.setState({
            cardSelected: card, 
            newCard: false
        });
    }

    handleNewCard = () => {
        this.setState({cardSelected: {
            bankName: '',
            cardHolder: '',
            cardNumber: '',
            issuer: 'visa',
            theme: ''
            },
            newCard: true
        });
    }
    
    createCard = () =>{
        
        console.log(this.state.bankname + this.state.cardHolder + this.state.cardNumber + this.state.issuer + this.state.code + this.state.expire);
        
        if(this.state.bankname !== '****' &&
            this.state.cardHolder !== 'NOMBRE Y APELLIDO' &&
            this.state.cardNumber !== '****************' &&
            this.state.code !== '' &&
            this.state.expire !== ''){
                let cards2 = [...this.state.cards];
                let newcard = {
                    bankName: this.state.bankname,
                    cardHolder:this.state.cardHolder,
                    cardNumber:this.state.cardNumber,
                    issuer:this.state.issuer,
                    code: this.state.code,
                    expire: this.state.expire
                }
                cards2.push(newcard);
                this.setState({
                    cards: cards2
                });
            }
    }

    deleteCard = (number) => {
        let cards2 = [...this.state.cards];
        const idx = cards2.findIndex((card) => card.cardNumber === number);
        console.log(idx);
        cards2.splice(idx,1);
        this.setState({
            cards: cards2,
            newCard: true,
            cardSelected: {
                bankName:'',
                cardHolder:'',
                cardNumber:'',
                issuer: null,
                theme:''
            },
        });
    }

    handleInputBank = (e) => {
        this.setState({bankname: e.target.value});
    }
    handleInputName = (e) => {
        let name = e.target.value;
        name = name.toUpperCase();
        if(name.lenght === 0)
            this.setState({cardHolder: 'NOMBRE Y APELLIDO'});
        else
            this.setState({cardHolder: name});
    }
    handleInputNumber = (e) => {
        let n = e.target.value;
        if(n.lenght > 15)
            n = n.slice(0,15);
        const length = n.length;
        let complete= '****************';
        complete = complete.substr(0,16-length);
        let res = n.concat(complete);
        
        this.setState({cardNumber: res});
    }
    handleInputIssuer = (e) => {
        this.setState({issuer: e.target.value});
    }
    handleInputExpire = (e) => {
        this.setState({expire: e.target.value});
    }
    handleInputCode = (e) => {
        this.setState({code: e.target.value});
    }
    
    returnLogoPath(string){
        if (string === 'visa')
            return visa;
        if (string === 'mastercard')
            return mastercard;
    }

    hideCardNumber(number){
        let hidden = '************';
        hidden = hidden.concat(number.substr(12,16));
        return hidden;
    }

    render(){
       
        return(
            <div className="TarjetasMain">
                <div className="CardsList">
                    <div 
                        className={this.state.newCard ? "CardItem Selected" : "CardItem"}
                        onClick={this.handleNewCard}>
                    <p>Ingresar nueva tarjeta</p>
                    </div>
                    {this.state.cards.map((cc) => {
                        return (
                            <div 
                                className={this.state.cardSelected.cardNumber!==cc.cardNumber ? "CardItem" : "CardItem Selected"}
                                onClick={() => this.handleCardClick(cc)}
                                key={cc.cardNumber}
                            >
                                <div className="CardLogo">
                                    <img src={this.returnLogoPath(cc.issuer)} alt=""></img>
                                </div>
                                <p>{this.hideCardNumber(cc.cardNumber)}</p>
                            </div>
                        )
                    })}
                    
                </div>
                {this.state.cardSelected.cardNumber !== '' ?
                    //Vista previa tarjeta creada
                    <div className="Preview">
                        <div className="Card">
                            <Card
                                bankName={this.state.cardSelected.bankName}
                                cardHolder={this.state.cardSelected.cardHolder}
                                cardNumber={this.state.cardSelected.cardNumber}
                                issuer='visa'
                                theme={this.state.cardSelected.theme}
                            />
                            <div className="OneButton">
                                <button onClick={() => this.deleteCard(this.state.cardSelected.cardNumber)} className="button">
                                    Borrar
                                </button>
                            </div>
                        </div>
                    </div>
                :   //Vista previa crear tarjeta
                    <div className="Preview">
                        <div className="Card">
                            <Card
                                bankName={this.state.bankname}
                                cardHolder={this.state.cardHolder}
                                cardNumber={this.state.cardNumber}
                                issuer={this.state.issuer}
                                theme='dark'
                            />
                            <div className="CardForm">
                                <div>
                                    <Select
                                        value={this.state.bankname}
                                        onChange={(e) => this.handleInputBank(e)}
                                        >
                                        <MenuItem value="Santander">Santander</MenuItem>
                                        <MenuItem value="Provincia">Provincia</MenuItem>
                                        <MenuItem value="Macro">Macro</MenuItem>
                                    </Select>
                                    <Select
                                        
                                        value={this.state.issuer}
                                        onChange={(e) => this.handleInputIssuer(e)}
                                        >
                                        <MenuItem value="visa">Visa</MenuItem>
                                        <MenuItem value="mastercard">Mastercard</MenuItem>
                                        
                                    </Select>
                                </div>
                                <input type="text" maxlength="40" onChange={(e) => this.handleInputName(e)} placeholder="Nombre y apellido"></input>
                                <input type="text" maxlength="16" onChange={(e) => this.handleInputNumber(e)} placeholder="Numero"></input>
                                <div>
                                    <input type="text" maxlength="5" onChange={(e) => this.handleInputExpire(e)} placeholder="Vencimiento"></input>
                                    <div style={{width: '2rem'}}></div>
                                    <input type="text" maxlength="3" onChange={(e) => this.handleInputCode(e)} placeholder="Codigo"></input>
                                </div>
                                <div className="OneButton">
                                    <button onClick={this.createCard} className="button">Agregar</button>
                                </div>
                            </div>
                        </div> 
                    </div> 
                }
            </div>
        );
    }
}

export default Tarjetas;