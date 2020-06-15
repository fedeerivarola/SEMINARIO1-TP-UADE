import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Comercios from '../Comercios/Comercios'
import Home from '../Home/Home'
import SideDrawer from '../SideDrawer/SideDrawer'
import Childrens from '../Childrens/Childrens'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { avatar, dbPadres, firebaseAuth } from '../../services/firebase'
import sandia from '../../assets/Cargando_sandia.gif'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            authed: true,
            loading: true,
            user: null,
            padre: null,
            hijos: null,
            profile: null
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
                let hijosRef = docRef.collection("hijos");
                let docs = [];

                docRef.get().then((doc) => {

                    if (doc.exists) {
                        this.setState({ padre: doc.data() });
                        this.setState({profile: doc.data().profilePic})
                        hijosRef.get()
                            .then(querySnapshot => {
                                if (querySnapshot.docs.length === 0) {
                                    this.setState({ loading: false, hijos:[] });
                                } else {
                                    querySnapshot.forEach(doc => {
                                        docs.push(doc.data());
                                    });
                                    this.setState({ hijos: docs });
                                    setTimeout(this.setState({  loading: false }), 5000);
                                }
                            })
                            .catch((error) => {
                                console.log(`ocurrio error: ${error.message}`);
                                this.setState({ loading: false });
                            });

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
                setTimeout(this.setState({ authed: false, loading: false }), 5000);
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
                    <Navbar user={this.state.user} padre={this.state.padre} profile={this.state.profile}/>
                    <SideDrawer />
                    <div className="Content">
                        <Route exact path="/home" render={() => <Home userHome={this.state.user} padreHome={this.state.padre} hijosHome={this.state.hijos} profileHome={this.state.profile}/>} />
                        <Route exact path="/childrens" render={() => <Childrens userCh={this.state.user} padreCh={this.state.padre} hijosCh={this.state.hijos}/>} />
                        <Route exact path="/saldo" render={() => <h1>Saldos</h1>} />
                        <Route exact path="/movimientos" render={() => <h1>Movimientos</h1>} />
                        <Route exact path="/comercios" render={() => <Comercios/>} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;