import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { dbMov } from '../../services/firebase';
import moment from 'moment';
import sandia from '../../assets/cargando_sandia.gif';
import './ExportExcel.css';

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
                            <div overflow="hidden" webkit-overflow-scrolling="touch" width="300px" height="100px">
                                <table id="emp" class="table" cellspacing="10" cellpadding="10">  
                                        <thead>  
                                            <tr>  
                                                <th className="thClass" align="center"><b>Descripcion</b></th >
                                                <th className="thClass" align="center"><b>Gasto</b></th>
                                                <th className="thClass" align="center"><b>Nombre</b></th>
                                                <th className="thClass" align="center"><b>Saldo</b></th>
                                                <th className="thClass" align="center"><b>Time</b></th>
                                                <th className="thClass" align="center"><b>Tipo</b></th>  
                                            </tr>  
                                        </thead>  
                                        <tbody>              {  
                                                this.state.historial.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                    <td className="tdClass" align="center">{p.desc}</td>  
                                                                    <td className="tdClass" align="center">{p.gasto}</td>  
                                                                    <td className="tdClass" align="center">{p.nombre}</td>  
                                                                    <td className="tdClass" align="center">{p.saldo}</td>  
                                                                    <td className="tdClass" align="center">{moment(p.time.toDate()).format("DD/MM/YYYY")}</td>  
                                                                    <td className="tdClass" align="center">{p.tipo}</td>
                                                        </tr>  
                                                })  
                                        }  
  
                                        </tbody>  
  
                                </table>  
                            </div>
                                <div align="center" height="100px" width="200px">  
									<ReactHTMLTableToExcel  height="50%" width="50%"
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