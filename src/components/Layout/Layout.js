import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.css'
import Home from '../Home/Home.js'

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="Content">
                    <Home />
                </div>
            </div>
        );
    }
}

export default Layout;