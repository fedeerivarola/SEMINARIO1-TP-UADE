import React, { useState, useEffect } from 'react';
import './LocalesMenu.css';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea } from '@material-ui/core';
import { dbHijos, dbComercios } from '../../../services/firebase'

class LocalesMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedHijo: props.hijo,
            comercios: [],
            permisos: []
        }
    }


    componentWillMount() {

        let comercios = []

        dbComercios.get().then(
            querySnapshot => {
                if (querySnapshot.docs.length > 0) {
                    querySnapshot.forEach(doc => {
                        comercios.push(doc.data());
                    })
                    this.setState({ comercios: comercios });
                }
            });

        let refPermisos = dbHijos.doc(this.state.selectedHijo.user).collection("locales");
        let permisos = [];

        refPermisos.get().then(querySnapshot => {
            if (querySnapshot.docs.length > 0) {
                querySnapshot.forEach(doc => {
                    permisos.push(doc.data().address);
                });

                this.setState({ comercios: comercios, permisos: permisos });
            }
        })
            .catch((error) => {
                console.log(error);
            });
    }

    allowLocal = (value, permiso) => {
        console.log(value)

        let refPermisos = dbHijos.doc(this.state.selectedHijo.user).collection("locales");

        if (permiso) {
            let oldPermisos = this.state.permisos;
            let updatePermisos = [];
            for (let index = 0; index < oldPermisos.length; index++) {
                const element = oldPermisos[index];
                if (element !== value.address) {
                    updatePermisos.push(element);
                }
            }
            this.setState({ permisos: updatePermisos });
            refPermisos.doc(value.address).delete();
        } else {
            let updatePermisos = this.state.permisos;
            updatePermisos.push(value.address);
            this.setState({ permisos: updatePermisos });
            refPermisos.doc(value.address).set({ address: value.address });
        }

    }

    render() {
        // let comercios = [{ desc: 'Av. San Juan 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
        // { desc: 'Av. De Mayo 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
        // { desc: 'Av. San Pedro 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true },
        // { desc: 'Av. Siempreviva 717', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
        // { desc: 'Calle 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
        // { desc: 'Calle Callecita 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
        // { desc: 'Otra direccion 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true }]

        let comercios = this.state.comercios;

        return (
            <div className="LocalesMenu">
                <Grid container justify="flex-start" spacing={5}>
                    {comercios.map((value) => (
                        <Card key={value.name} className="CardComercio">
                            <img src={value.img} alt={value.name}></img>
                            {value.name}<br />
                            <b>{value.address}</b>
                            <CardActionArea id={`action-${value.name}`} className="BotonCardComercio" onClick={() => { this.allowLocal(value, this.state.permisos.includes(value.address)) }}>
                                {this.state.permisos.includes(value.address) ? 'Quitar Permiso' : 'Permitir'}
                            </CardActionArea>
                        </Card>
                    ))}
                </Grid>
            </div>
        )
    }

}

export default LocalesMenu;