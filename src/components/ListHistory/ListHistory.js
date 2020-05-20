import React from 'react'
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
        this.state = {}
    }

    componentDidMount() {
        getHistory((history) => {
            this.setState({ history });
        });
    }

    render() {
        const historial = [{
            name: 'Lucas',
            time: '9',
            desc: 'Super Pancho',
            saldo: 70,
            gasto: 1,
            img: boy
        },
        {
            name: 'Martina',
            time: '10',
            desc: 'Sandwich J&Q',
            saldo: 70,
            gasto: 1,
            img: 'https://public-v2links.adobecc.com/3d3b2a40-41b6-401c-66aa-accd993e5219/component?params=component_id%3A4e231c73-e27b-46ef-a86b-2c82991d528c&params=version%3A0&token=1589464291_da39a3ee_eef990517658b533675b2896e72fa474c0801633&api_key=CometServer1'
        },
        {
            name: 'Monica',
            time: '12',
            desc: 'Recarga de saldo',
            saldo: 970,
            gasto: 0,
            img: monip
        },
        {
            name: 'Lucas',
            time: '9',
            desc: 'Yogurt Ligth',
            saldo: 100,
            gasto: 1,
            img: boy
        }
        ]
        return (
            <div>
                <List dense className="ListHistory">
                    <div className="title"><p>Ultimos movimientos</p></div>
                    {historial.map((value) => {
                        const labelId = `label-${value.name}-${value.time}`;
                        return (
                            <ListItem key={value} button className="Registro">
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={value.img}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={'name-' + labelId} primary={value.name} />
                                <ListItemText className="ItemTime" id={'time-' + labelId} primary={`Hace ${value.time} horas`} />
                                <ListItemText id={'desc-' + labelId} primary={value.desc} />
                                {value.gasto === 0 ? <ListItemText className="saldoPositivo" id={'saldo-' + labelId} primary={`+ $${value.saldo}`} /> : <ListItemText className="saldoNegativo" id={'saldo-' + labelId} primary={`- $${value.saldo}`} />}
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

export default ListHistory;