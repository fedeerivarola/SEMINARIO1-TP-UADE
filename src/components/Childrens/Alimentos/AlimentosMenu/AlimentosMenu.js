import React from 'react';
import './AlimentosMenu.css';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea } from '@material-ui/core';
import { dbHijos, dbMorfi } from '../../../../services/firebase'

class AlimentosMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedHijo: props.hijoAM,
            alimentos: [],
            permisos: []
        }

    }

    componentWillMount() {

        let alimentos = []

        dbMorfi.get().then(
            querySnapshot => {
                if (querySnapshot.docs.length > 0) {
                    querySnapshot.forEach(doc => {
                        alimentos.push(doc.data());
                    })
                    this.setState({alimentos: alimentos});
                }
            });

        let refPermisos = dbHijos.doc(this.state.selectedHijo.user).collection("permisos");
        let permisos = [];

        refPermisos.get().then(querySnapshot => {
            if (querySnapshot.docs.length > 0) {
                querySnapshot.forEach(doc => {
                    permisos.push(doc.data().desc);
                });

                this.setState({ alimentos: alimentos, permisos: permisos });
            }
        })
            .catch((error) => {
                console.log(error);
            });
    }

    allowMorfi = (value, permiso) => {
        console.log(value)
        this.props.selectMorfi(value);

        let refPermisos = dbHijos.doc(this.state.selectedHijo.user).collection("permisos");

        if (permiso) {
            let oldPermisos = this.state.permisos;
            let updatePermisos = [];
            for (let index = 0; index < oldPermisos.length; index++) {
                const element = oldPermisos[index];
                if (element !== value.desc) {
                    updatePermisos.push(element);
                }
            }
            this.setState({ permisos: updatePermisos });
            refPermisos.doc(value.desc).delete();
        } else {
            let updatePermisos = this.state.permisos;
            updatePermisos.push(value.desc);
            this.setState({ permisos: updatePermisos });
            refPermisos.doc(value.desc).set({ desc: value.desc });
        }

    }

    render() {

        let alimId = null;

        return (
            <div className="CardAlimentos">
                <Grid container justify="flex-start" spacing={5}>
                    {this.state.alimentos.map((value) => (
                        <Card key={value.desc} className="CardAlimento">
                            <img src={value.img} alt={value.desc}></img>
                            {value.desc}
                            <CardActionArea id={`action-${alimId}`} className="BotonCardAlimento" onClick={() => { this.allowMorfi(value, this.state.permisos.includes(value.desc)) }}>
                                {this.state.permisos.includes(value.desc) ? 'Quitar Permiso' : 'Permitir'}
                            </CardActionArea>
                        </Card>
                    ))}
                </Grid>
            </div>
        );
    }
}
export default AlimentosMenu;