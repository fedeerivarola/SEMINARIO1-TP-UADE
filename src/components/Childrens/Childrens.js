import React from 'react'
import './Childrens.css'

import ListCardHijos from './ListCardHijos/ListCardHijos'
import LimitesMenu from './LimitesMenu/LimitesMenu'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AlimentosOpc from './Alimentos/AlimentosOpc/AlimentosOpc';
import AlimentosMenu from './Alimentos/AlimentosMenu/AlimentosMenu';
import LocalesMenu from './LocalesMenu/LocalesMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

class Childrens extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.userCh,
            padre: props.padreCh,
            hijos: props.hijosCh,
            loading: false,
            view: 'ALIMENTOS',
            selectedHijo: null
        }

        this.handleSelectedHijo = this.handleSelectedHijo.bind(this);
    }

    componentDidMount() {

    }


    handleChange = (event, newValue) => {
        this.setState({ view: newValue });
    }

    handleSelectedHijo = (value) => {
        this.setState({ selectedHijo: value });
    }

    renderOpciones() {
        if (this.state.view === 'ALIMENTOS') {
            return (<AlimentosOpc />);
        }
        if (this.state.view === 'LOCALES') {
            return <div>LOCALES</div>
        }
        if (this.state.view === 'LIMITES') {
            return <div><LimitesMenu hijoLM={this.state.selectedHijo} padreLM={this.state.padre} /></div>
        }
        if (this.state.view === 'PERFIL') {
            return null
        }

    }


    renderMenu() {

        if (this.state.view === 'ALIMENTOS') {
            return (<AlimentosMenu />);
        }
        if (this.state.view === 'LOCALES') {
            return (<LocalesMenu />);
        }
        if (this.state.view === 'LIMITES') {
            return null
        }
        if (this.state.view === 'PERFIL') {
            if (this.state.selectedHijo) {
                return (<ProfileMenu selectedHijo={this.state.selectedHijo} />);
            } else {
                return (<div>DEBE SELECCIONAR UN HIJO</div>);
            }
        }
    }

    render() {
        return (
            <div className="childrensContainer">
                <div className="FilaHijos">
                    <ListCardHijos padreLHC={this.state.padre} hijosLCH={this.state.hijos} selectedHijo={this.state.selectedHijo} selectHijo={this.handleSelectedHijo} />
                </div>
                <div className="FilaMenuBotones">
                    <AppBar color="transparent" position="static">
                        <Tabs value={this.state.view} indicatorColor={"white"} onChange={this.handleChange} centered>
                            <Tab value={'ALIMENTOS'} label="ALIMENTOS" id={`simple-tab-${0}`} />
                            <Tab value={'LOCALES'} label="LOCALES" id={`simple-tab-${1}`} />
                            <Tab value={'LIMITES'} label="LIMITES" id={`simple-tab-${2}`} />
                            <Tab value={'PERFIL'} label="PERFIL" id={`simple-tab-${3}`} />
                        </Tabs>
                    </AppBar>
                </div>
                <div className="FilaMenuView">
                    <div className="ColumnOpciones">
                        {this.renderOpciones()}
                    </div>
                    <div className="ColumnMenu">
                        {this.renderMenu()}
                    </div>
                </div>
            </div>
        );
    }

}

export default Childrens;