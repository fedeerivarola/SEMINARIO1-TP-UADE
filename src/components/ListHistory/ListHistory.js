import React from 'react'
import Select from 'react-select';
import './ListHistory.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { getHistory } from '../../services/firebase';
import boy from './boy.png';
import monip from './monip.png';


class ListHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption : "todo"
        }
    }

    handleChange = (e) => {
        console.log(`Option selected:`, e.value);
        this.setState({
            selectedOption: e.value
        });
    }

    componentDidMount() {
        getHistory((history) => {
            this.setState({ history });
        });
    }

    actualizarValorFiltrado(valor) {
        this.opcionFiltrado.setState(valor);
    }

    renderList = (e) => {
        console.log(e);
        const labelId = `label-${e.name}-${e.time}`;
        if ((this.state.selectedOption == e.tipo) || (this.state.selectedOption == "todo")) {
        return (
            <ListItem  key={e} button className="Registro">
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar n°${e + 1}`}
                        src={e.img}
                    />
                </ListItemAvatar>
                <ListItemText id={'name-' + labelId} primary={e.name} />
                <ListItemText className="ItemTime" id={'time-' + labelId} primary={`Hace ${e.time} horas`} />
                <ListItemText id={'desc-' + labelId} primary={e.desc} />
                {e.gasto === 0 ? <ListItemText className="saldoPositivo" id={'saldo-' + labelId} primary={`+ $${e.saldo}`} /> : <ListItemText className="saldoNegativo" id={'saldo-' + labelId} primary={`- $${e.saldo}`} />}
            </ListItem>
            );
        }
    }

    render() {
        const { selectedOption } = this.state;

        const options = [
            { value: 'todo', label: 'Todos' },
            { value: 'gasto', label: 'Gastos' },
            { value: 'recarga', label: 'Recarga' },
          ]


        const historial = [{
            name: 'Lucas',
            time: '9',
            desc: 'Super Pancho',
            saldo: 70,
            gasto: 1,
            tipo: "gasto",
            img: boy
        },
        {
            name: 'Martina',
            time: '10',
            desc: 'Sandwich J&Q',
            saldo: 70,
            gasto: 1,
            tipo: "gasto",
            img: 'https://public-v2links.adobecc.com/3d3b2a40-41b6-401c-66aa-accd993e5219/component?params=component_id%3A4e231c73-e27b-46ef-a86b-2c82991d528c&params=version%3A0&token=1589464291_da39a3ee_eef990517658b533675b2896e72fa474c0801633&api_key=CometServer1'
        },
        {
            name: 'Monica',
            time: '12',
            desc: 'Recarga de saldo',
            saldo: 970,
            gasto: 0,
            tipo: "recarga",
            img: monip
        },
        {
            name: 'Lucas',
            time: '9',
            desc: 'Yogurt Ligth',
            saldo: 100,
            gasto: 1,
            tipo: "gasto",
            img: boy
        }
        ]

        return (
            <div>
                <List dense className="ListHistory">
                    <div className="title">
                        <div className="wrapped"> 
                            <p>Ultimos movimientos</p>
                            <div className="unido" style={{width: '300px', heigh: "100px"}}>
                                <p>Filtrar por:</p>
                                <Select className="select1"
                                    options = { options }
                                    onChange={(event) => this.handleChange(event)}
                                    placeholder="Todos"
                                />
                            </div>
                        </div>
                    </div>
                    {historial.map((value) => {
                            return this.renderList(value);
                    })}
                </List>
            </div>
        );
    }
}

export default ListHistory;