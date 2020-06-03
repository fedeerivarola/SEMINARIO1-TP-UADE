import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import SideDrawer from '../SideDrawer/SideDrawer'
import { BrowserRouter as Router } from 'react-router-dom'
import { dbPadres, firebaseAuth } from '../../services/firebase'
import sandia from '../../assets/Cargando_sandia.gif'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            authed: true,
            loading: true,
            user: null,
            padre: null
        }
    }


    componentDidMount() {


        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    user: {
                        userEmail: user.email,
                        displayName: user.displayName
                    }
                })

                let docRef = dbPadres.doc(user.email);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        setTimeout(this.setState({ padre: doc.data(), loading: false }), 10000);
                    } else {
                        docRef.set({
                            mail: user.email
                        });
                        this.setState({ padre: { mail: user.email, nombre: user.displayName, saldo: 0 }, loading: false });
                    }
                }).catch((error) => {
                    console.log(`ocurrio error: ${error}`);
                });
            } else {
                setTimeout(this.setState({authed: false, loading: false}), 5000);
                this.props.history.push("/login");
            }
        })
    }

    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        return this.state.loading === true ? <img className="cargando" src={sandia} alt="cargando"></img> : (
            <Router>
                <div>
                    <Navbar user={this.state.user} padre={this.state.padre} />
                    <SideDrawer />
                    <div className="Content">
                        {/* <Route exact path="/home" render={() => <Home user={user}/>} />
                        <Route exact path="/saldo" render={() => <h1>Saldos</h1>}/>
                        <Route exact path="/movimientos" render={() => <h1>Movimientos</h1>} />
                        <Route exact path="/niños" render={() => <h1>Niños</h1>} />
                        <Route exact path="/comercios" render={() => <h1>Comercios</h1>} /> */}

                        <Home userHome={this.state.user} padreHome={this.state.padre} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;