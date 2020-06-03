import React from 'react'
import Select from 'react-select';
import './ListHistory.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { dbMov } from '../../services/firebase';
import moment from 'moment';
import sandia from '../../assets/Cargando_sandia.gif'

class ListHistory extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: props.userLH,
            hijos: props.hijosLH,
            profile: props.profileLH,
            selectedOption: "todo",
            loading: true,
            historial: [],
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
        console.log(e)

        let hijos = [];
        hijos = this.state.hijos;
        let img;

        for (let index = 0; index < hijos.length; index++) {
            if (e.uid === hijos[index].uid) {
                 img = hijos[index].img;
            } else if (e.uid === this.state.user.userEmail){
                img = this.state.profile;
            }

        }

        let fecha = new Date(e.time.seconds * 1000 + e.time.nanoseconds / 1000);
        const labelId = `label-${e.name}-${e.time}`;
        if ((this.state.selectedOption === e.tipo) || (this.state.selectedOption === "todo")) {
            return (
                <ListItem key={e} button className="Registro">
                    <ListItemAvatar>
                        <Avatar
                            alt={`Avatar n°${e + 1}`}
                            src={img}
                        />
                    </ListItemAvatar>
                    <ListItemText id={'name-' + labelId} primary={e.name} />
                    <ListItemText className="ItemTime" id={'time-' + labelId} primary={`${moment(fecha).format('DD/MM/YYYY')}`} />
                    <ListItemText className="ItemTime" id={'time-2-' + labelId} primary={`Hace ${moment(fecha).fromNow(true)}`} />
                    <ListItemText id={'desc-' + labelId} primary={e.desc} />
                    {e.gasto === '0' ? <ListItemText className="saldoPositivo" id={'saldo-' + labelId} primary={`+ $${e.saldo}`} /> : <ListItemText className="saldoNegativo" id={'saldo-' + labelId} primary={`- $${e.saldo}`} />}
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

        const lista = this.state.historial;

        const filteredMovements = lista.filter(movement => {
            if (this.state.selectedOption === 'todo') {
                return movement;
            } else {
                return movement.tipo.toLowerCase().indexOf(this.state.selectedOption.toLowerCase()) !== -1;
            }
        });

        if (this.state.loading === true) {
            return (<img className="cargandoList" src={sandia} alt="cargando"></img>)
        } else if (this.state.loading !== true) {
            if (this.state.error) {
                return (<div>{this.state.error}</div>);

            } else {
                return (
                    <div>
                        <List dense className="ListHistory">
                            <div className="title">
                                <h2>Ultimos movimientos</h2>
                                <div className="unido">
                                    <p>Filtrar por:</p>
                                    <Select className="select1"
                                        options={options}
                                        minMenuHeight={15}
                                        onChange={(event) => this.handleChange(event)}
                                        placeholder="Todos"
                                    />
                                </div>
                            </div>
                            <div className="itemsList">
                                {
                                    filteredMovements.map((value) => {
                                        return this.renderList(value);
                                    })
                                }
                            </div>
                        </List>
                    </div>
                );
            }
        }
    }
}

export default ListHistory;