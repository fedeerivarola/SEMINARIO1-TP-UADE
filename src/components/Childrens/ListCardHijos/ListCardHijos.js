import React from 'react';
import './ListCardHijos.css'
import Grid from '@material-ui/core/Grid';
import { Modal, Fade, Backdrop, Card, CardActionArea } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import RegisterHijo from '../RegisterHijo/RegisterHijo.js'

class ListCardHijos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hijos: props.hijosLCH,
            padre: props.padreLHC,
            selectedHijo: props.selectedHijo,
            openModal: false
        }

        this.handleNewHijo = this.handleNewHijo.bind(this);
        this.clickHijo = this.clickHijo.bind(this);

    }

    handleOpenRegisterHijo = () => {
        this.setState({ openModal: true });
    };

    handleCloseRegisterHijo = () => {
        this.setState({ openModal: false });
    };

    handleNewHijo = (value) => {
        let newHijos = []
        newHijos = this.state.hijos;
        newHijos.push(value);
        this.setState({ hijos: newHijos, openModal: false });
    };

    clickHijo = (value) => {
        this.props.selectHijo(value)
        this.setState({ selectedHijo: value });
    }

    render() {
        return (
            <div>
                <Grid container className="gridContainerHijos" spacing={2}>
                    <Grid className="GridItemHijos" item xs={12}>
                        <Grid container justify="flex-start" spacing={5}>
                            {this.state.hijos.map((value) => (
                                <Grid className="gridHijo" key={value.nombre} item>
                                    <Card className="CardHijo" elevation={3}>
                                        <CardActionArea className="CardHijo" onClick={() => { this.clickHijo(value) }}>
                                            <div className="ContentCardHijo">
                                                <Avatar
                                                    alt={`Avatar n°${value.nombre + 1}`}
                                                    src={value.avatar}
                                                />
                                                <b>{value.nombre}</b>
                                                {value === this.state.selectedHijo ? <p style={{ fontSize: "8px" }}>SELECCIONADO</p> : null}
                                            </div>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                            <Grid className="addHijo" item>
                                <Card className="CardHijo" elevation={3}>
                                    <CardActionArea className="CardHijo" onClick={this.handleOpenRegisterHijo}>
                                        <div className="ContentCardHijo">
                                            <b>+</b>
                                            <p>Añadir cuenta hijo</p>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Modal className="modal"
                    open={this.state.openModal}
                    onClose={this.handleCloseRegisterHijo}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.openModal}>
                        <div>
                            <RegisterHijo padreRH={this.state.padre} newHijo={this.handleNewHijo} />
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}
export default ListCardHijos;