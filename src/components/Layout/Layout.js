import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.css'
import Home from '../Home/Home.js'
import { firebaseAuth } from '../../services/firebase/config'

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
            <div>
                <Navbar user={this.state.user} />
                <div className="Content">
                    <Home userHome={this.state.user} />
                </div>
            </div>
        );
    }
}

export default Layout;