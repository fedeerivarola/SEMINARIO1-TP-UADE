import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import SideDrawer from '../SideDrawer/SideDrawer'
import { BrowserRouter as Router } from 'react-router-dom'
import { firebaseAuth } from '../../services/firebase'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            authed: true,
            loading: true,
            user: null
        }
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                    user: {
                        userEmail: user.email,
                        displayName: user.displayName
                    }
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })

                this.props.history.push("/login");
            }
        })
    }

    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
            <Router>
                <div>
                    <Navbar user={this.state.user} />
                    <SideDrawer />
                    <div className="Content">
                        {/* <Route exact path="/home" render={() => <Home user={user}/>} />
                        <Route exact path="/saldo" render={() => <h1>Saldos</h1>}/>
                        <Route exact path="/movimientos" render={() => <h1>Movimientos</h1>} />
                        <Route exact path="/niños" render={() => <h1>Niños</h1>} />
                        <Route exact path="/comercios" render={() => <h1>Comercios</h1>} /> */}

                        <Home userHome={this.state.user} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;