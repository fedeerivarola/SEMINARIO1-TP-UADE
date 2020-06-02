import React from 'react'
import Select from 'react-select';
import './ListHistory.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { dbMov } from '../../services/firebase'


class ListHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            selectedOption: "todo",
            loading: true,
            historial: null,
            error: null
        }
    }

    componentWillMount() {

        let docRef = dbMov.doc(this.state.user.userEmail).collection("historial");
        let docs = [];

        docRef.get()
            .then(querySnapshot => {
                if (querySnapshot.docs.length === 0) {
                    this.setState({ loading: false, error: 'Aun no hay movimientos' });
                } else {
                    querySnapshot.forEach(doc => {
                        docs.push(doc.data());
                    });
                    this.setState({ historial: docs, loading: false });
                }
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }

    handleChange = (e) => {
        console.log(`Option selected:`, e.value);
        this.setState({
            selectedOption: e.value
        });
    }

    componentDidMount() {

    }

    actualizarValorFiltrado(valor) {
        this.opcionFiltrado.setState(valor);
    }

    renderList = (e) => {
        console.log(e);
        const labelId = `label-${e.name}-${e.time}`;
        if ((this.state.selectedOption === e.tipo) || (this.state.selectedOption === "todo")) {
            return (
                <ListItem key={e} button className="Registro">
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
        const options = [
            { value: 'todo', label: 'Todos' },
            { value: 'gasto', label: 'Gastos' },
            { value: 'recarga', label: 'Recarga' },
        ]

        if (this.state.loading === true) {
            return (<h1>Loading</h1>)
        } else if (this.state.loading !== true) {
            if (this.state.error) {
                return (<div>{this.state.error}</div>);

            } else {
                return (
                    <div>
                        <List dense className="ListHistory">
                            <div className="title">
                                <div className="wrapped">
                                    <p>Ultimos movimientos</p>
                                    <div className="unido" style={{ width: '300px', heigh: "100px" }}>
                                        <p>Filtrar por:</p>
                                        <Select className="select1"
                                            options={options}
                                            onChange={(event) => this.handleChange(event)}
                                            placeholder="Todos"
                                        />
                                    </div>
                                </div>
                            </div>
                            {this.state.historial.map((value) => {
                                return this.renderList(value);
                            })}
                        </List>
                    </div>
                );
            }
        }
    }
}

export default ListHistory;