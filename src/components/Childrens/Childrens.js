import React from 'react'
import './Childrens.css'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { Card, CardActionArea, ButtonGroup, Button } from '@material-ui/core';

class Childrens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.userCh,
            padre: props.padreCh,
            hijos: props.hijosCh,
            loading: true
        }

        this.submitHijo = this.submitHijo.bind(this);
    }

    componentDidMount() {

    }

    submitHijo = (e) => {
        console.log(e)
    }


    render() {
        return (
            <div className="childrensContainer">
                <div className="FilaHijos">
                    <Grid container className="gridContainerHijos" spacing={2}>
                        <Grid className="GridItemHijos" item xs={12}>
                            <Grid container justify="left" spacing={5}>
                                {this.state.hijos.map((value) => (
                                    <Grid className="gridHijo" alignItems="center"
                                        justify="center" key={value.nombre} item>
                                        <Card className="CardHijo" elevation={3} onClick={console.log("hola")}>
                                            <CardActionArea>
                                                <Avatar
                                                    alt={`Avatar n°${value.nombre + 1}`}
                                                    src={value.img}
                                                />
                                                <b>{value.nombre}</b>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                                <Grid className="addHijo" item>
                                    <Card className="CardHijo" elevation={3}>
                                        <CardActionArea onClick={this.submitHijo}>
                                            <b>+</b>
                                            <b>+ Añadir hijo</b>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="FilaMenuBotones">
                    <ButtonGroup className="BotoneraMenu" fullWidth="true" orientation="horizontal" variant="contained" color="green">
                        <Button>ALIMENTOS</Button>
                        <Button>LOCALES</Button>
                        <Button>LIMITES</Button>
                        <Button>PERFIL</Button>
                    </ButtonGroup>
                </div>
                <div className="FilaMenuView">
                    <div className="ColumnOpciones">OPCIONES</div>
                    <div className="ColumnMenu">card menu</div>
                </div>
            </div>
        );
    }

}

export default Childrens;