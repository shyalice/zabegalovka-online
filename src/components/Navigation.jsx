import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/_navigation.scss";
import { connect } from "react-redux";


class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartCount: 0
        };
        this.cartCount = this.cartCount.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
    }

    cartCount = (cart) =>{
        let count = 0;
        cart.map((product)=> count+=product.count)
        return count
    }
    totalPrice = (cart) =>{
        let total = 0;
        cart.map((product) => {
            if(product.type !== "burger"){
                return total+=product.size * product.priceIndex * product.count
            }
            else return total+=product.price * product.count
        });
        return total;
    }

    render(){
        return(
            <nav className="navigation">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/pizza"><li>Pizza</li></Link>
                    <Link to="/burgers"><li>Burgers</li></Link>
                    <Link to="/drinks"><li>Drinks</li></Link>
                    <Link to="/cart"><li>Cart<span>({this.cartCount(this.props.cart)} : {this.totalPrice(this.props.cart)}$)</span></li></Link>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(Navigation);