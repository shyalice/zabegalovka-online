import React, { Component } from "react";
import {Link} from "react-router-dom"

class Navigation extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/pizza"><li>Pizza</li></Link>
                    <Link to="/burgers"><li>Burgers</li></Link>
                    <Link to="/drinks"><li>Drinks</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Navigation;