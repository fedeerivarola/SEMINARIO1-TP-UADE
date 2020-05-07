import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

const layout = (props) => {
    return(
        <div>
            <Navbar/>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}

export default layout;