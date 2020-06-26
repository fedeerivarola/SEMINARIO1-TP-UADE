import React, {Component} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import SelectDatePicker from "../DatePicker/DatePicker";
import ListHistoryReport from "../ListHistoryReport/ListHistoryReport";
import ExportExcel from './ExportExcel';

class ReportMaker extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            user: props.userHome,
            padre: props.padreHome,
            hijos: props.hijosHome,
            profile: props.profileHome
        }
        localStorage.setItem("fecha_seleccionada", new Date().toISOString());
    }
 
    render() {
        return (
            <div>
                <ExportExcel id="table-to-xls" userLH={this.state.user} hijosLH={this.state.hijos} profileLH={this.state.profile} historial={this.state.historial}/>
            </div>
        );
    }
}
 
export default ReportMaker