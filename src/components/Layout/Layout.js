import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.css'
import Home from '../Home/Home'
import SideDrawer from '../SideDrawer/SideDrawer'

class Layout extends React.Component {

    render() {
        console.log("layout" + this.state);
        const { user } = this.props;
        return (
            <div>
                <Navbar user={user} />
                <SideDrawer/>
                <div className="Content">
                    <Home user={user}/>
                </div>
            </div>
        );
    }
}

export default Layout;