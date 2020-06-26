import React from 'react'
import Select from 'react-select';
import './ListHistoryReport.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { dbMov } from '../../services/firebase';
import moment from 'moment';
import sandia from '../../assets/Cargando_sandia.gif'

class ListHistoryReport extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: props.userLH,
            hijos: props.hijosLH,
            profile: props.profileLH,
            selectedOption: "todo",
            loading: true,
            historial: props.historial,
            error: null
        }
    }

    componentWillMount() {
        console.log("pasa por componentWillMount");
        let docRef = dbMov.doc(this.state.user.userEmail).collection("historial");
        let docs = [];
        const fecha_seleccionada = localStorage.getItem("fecha_seleccionada");
        console.log("fecha seleccionada: "+fecha_seleccionada);
        //.where('time', '>=', fecha_seleccionada)
        docRef.orderBy("time", "desc").get()
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

    componentDidMount() {

    }
    
    render() {
        const lista = this.state.historial;
        console.log("lista: "+lista);

        if (this.state.loading === true) {
            return (<img className="cargandoList" src={sandia} alt="cargando"></img>)
        } else if (this.state.loading !== true) {

            return (
                <div> 
                    {
                        lista.map((value) => {
                            return (
                                <tr>
                                    <td>{value.desc}</td>
                                    <td>{value.gasto}</td>
                                    <td>{value.name}</td>
                                    <td>{value.saldo}</td>
                                    <td>{value.time}</td>
                                    <td>{value.tipo}</td>
                                </tr>
                            );
                        })
                    }
                </div>
            );

        }
    }
}

export default ListHistoryReport;