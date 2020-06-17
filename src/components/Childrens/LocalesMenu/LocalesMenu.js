import React from 'react';
import './LocalesMenu.css';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea} from '@material-ui/core';

const LocalesMenu = props => {

    let comercios = [{ desc: 'Av. San Juan 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
    { desc: 'Av. De Mayo 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
    { desc: 'Av. San Pedro 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true },
    { desc: 'Av. Siempreviva 717', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
    { desc: 'Calle 616', img: 'https://diariolaportada.com.ar/wp-content/uploads/2019/05/Kiosko-solidario-2.jpg', permiso: false },
    { desc: 'Calle Callecita 1116', img: 'https://px.cdn.lanueva.com/082019/1566559128595.jpg', permiso: false },
    { desc: 'Otra direccion 616', img: 'https://inforbano.com.ar/wp-content/uploads/2018/10/44330644_248691659152032_6214889948726689792_n.jpg', permiso: true }]

    return (<div className="CardComercios">
        <Grid container justify="flex-start" spacing={5}>
            {comercios.map((value) => (
                <Card key={value.desc} className="CardComercio">
                    <img src={value.img} alt={value.desc}></img>
                    {value.desc}
                    {value.permiso === true ? <CardActionArea id={`action-${value.desc}`} className="BotonCardComercio">Quitar</CardActionArea> : <CardActionArea id={`action-${value.desc}`} className="BotonCardComercio">Permitir</CardActionArea>}
                </Card>
            ))}
        </Grid>
    </div>)

}

export default LocalesMenu;