import React, { Component } from 'react'  
import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Select from 'react-select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { dbMov } from '../../services/firebase';
import moment from 'moment';
import sandia from '../../assets/Cargando_sandia.gif';

export class ExportExcel extends Component {  
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

        componentDidMount() {  
            console.log("pasa por componentDidMount");
            let docRef = dbMov.doc(this.state.user.userEmail).collection("historial");
            let docs = [];
            docRef.orderBy("time", "desc").get()
                .then(querySnapshot => {
                    if (querySnapshot.docs.length === 0) {
                        this.setState({ loading: false, error: 'Aun no hay movimientos' });
                    } else {
                        querySnapshot.forEach(doc => {
                            docs.push(doc.data());
                        });
                        console.log("docs:",docs);
                        this.setState({ historial: docs, loading: false });
                    }
                })
                .catch((error) => {
                    this.setState({ error: error.message, loading: false });
                }); 
        }  
        render() {  
            
        const lista = this.state.historial;
        console.log("lista: ",lista);

        if (this.state.loading === true) {
            return (<img className="cargandoList" src={sandia} alt="cargando"></img>)
        } else if (this.state.loading !== true) {
                return (  
                        <div>  
                                <table id="emp" class="table">  
                                        <thead>  
                                            <tr>  
                                                <th>Descripcion</th>
                                                <th>Gasto</th>
                                                <th>Nombre</th>
                                                <th>Saldo</th>
                                                <th>Time</th>
                                                <th>Tipo</th>  
                                            </tr>  
                                        </thead>  
                                        <tbody>              {  
                                                this.state.historial.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                    <td >{p.desc}</td>  
                                                                    <td >{p.gasto}</td>  
                                                                    <td >{p.nombre}</td>  
                                                                    <td >{p.saldo}</td>  
                                                                    <td >{moment(p.time.toDate()).format("DD/MM/YYYY")}</td>  
                                                                    <td >{p.tipo}</td>
                                                        </tr>  
                                                })  
                                        }  
  
                                        </tbody>  
  
                                </table>  
                                <div>  
									<ReactHTMLTableToExcel  
                                            className="btn btn-info"  
                                            table="emp"  
                                            filename="ReportExcel"  
                                            sheet="Sheet"  
                                            buttonText="Export excel" />
                                </div>  
                        </div>  
                )  
        }  
    }
}  
  
export default ExportExcel