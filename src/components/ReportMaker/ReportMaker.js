import React, {Component} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
class ReportMaker extends React.Component {
 
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                <table id="table-to-xls">
                    <tr>
                        <th>Descripcion</th>
                        <th>Gasto</th>
                        <th>Nombre</th>
                        <th>Saldo</th>
                        <th>Time</th>
                        <th>Tipo</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                </table>
 
            </div>
        );
    }
}
 
export default ReportMaker