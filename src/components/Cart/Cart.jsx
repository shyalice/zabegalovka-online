import React, { Component } from "react";
import { connect } from "react-redux";

import {DeleteProductFromCart} from "../../redux/actions";
import ChangeCount from "./ChangeCount";
import Ingredients from "./Ingredients";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state ={}
        this.totalPrice = this.totalPrice.bind(this);
    }

    totalPrice = (cart) =>{
        let total = 0;
        cart.map((product) => {
            if(product.type !== "burger"){
                return total+=product.size * product.priceIndex * product.count
            }
            else return total+=product.price * product.count
        });
        return total.toFixed(2);
    }

    render(){
        if(this.props.cart.length > 0){
        return(
            <div className="container">
                {this.props.cart.map((product) =>{
                    switch(product.type){
                        //============================PIZZA========================
                        case "pizza": return(
                        <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                            <h3 className="product-item-name">{product.name}</h3>
                            <ChangeCount product={product}/>
                            <Ingredients ingredients={product.ingredients} />
                            <p>size: {product.size}</p>
                            <p className="price">Price: <span className="price">{(product.size*product.priceIndex*product.count).toFixed(2)}$</span></p>
                            <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                        </div>
                        );
                        //============================BIRGER========================
                        case "burger":return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                                <h3 className="product-item-name">{product.name}</h3>
                                <ChangeCount product={product}/>
                                <Ingredients ingredients={product.ingredients} />
                                <p className="price">Price: <span className="price">{(product.price*product.count).toFixed(2)}$</span></p>
                                <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );
                        //============================DRINKS========================
                        case "lemonade" :
                        case "coffee": return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                                <h3 className="product-item-name">{product.name}</h3>
                                <ChangeCount product={product}/>
                                <p>size: {product.size}</p>
                                <p className="price">Price: <span className="price">{(product.size*product.priceIndex*product.count).toFixed(2)}$</span></p>
                                <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );

                        default: return null
                    }
                })}

                <div>{this.totalPrice(this.props.cart)}$</div>
            </div>
        );
        }
        else{
            return(
                <div className="container">
                    <p>Cart is empty...</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        DeleteProductFromCart: (product) => dispatch(DeleteProductFromCart(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
