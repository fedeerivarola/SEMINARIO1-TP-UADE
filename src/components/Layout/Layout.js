import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import SideDrawer from '../SideDrawer/SideDrawer'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

class Layout extends React.Component {

    render() {
        console.log("layout" + this.state);
        const { user } = this.props;
        return (
            <Router>
                <div>
                    <Navbar user={user} />
                    <SideDrawer/>
                    <div className="Content">
                        {/* <Route exact path="/home" render={() => <Home user={user}/>} />
                        <Route exact path="/saldo" render={() => <h1>Saldos</h1>}/>
                        <Route exact path="/movimientos" render={() => <h1>Movimientos</h1>} />
                        <Route exact path="/niños" render={() => <h1>Niños</h1>} />
                        <Route exact path="/comercios" render={() => <h1>Comercios</h1>} /> */}

                        <Home user={user}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;