import React from 'react'
import './ListHistory.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class ListHistory extends React.Component {


    componentWillMount() {

        //TODO RECUPERAR HISTORIAL
    }

    render() {
        return (
            <div>
                <List dense className="ListHistory">
                    <div className="title"><p>Ultimos movimientos</p></div>
                    {[0, 1, 2, 3].map((value) => {
                        const labelId = `label-${value}`;
                        return (
                            <ListItem key={value} button className="Registro">
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={'src\\components\\ListHistory\\boy.png'}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={'name-' + labelId} primary={`Nombre ${value + 1}`} />
                                <ListItemText className="ItemTime" id={'time-' + labelId} primary={`Hace ${value + 1} horas`} />
                                <ListItemText id={'desc-' + labelId} primary={`Descripcion ${value + 1}`} />
                                <ListItemText id={'saldo-' + labelId} primary={`Saldo ${value + 1}`} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

export default ListHistory;