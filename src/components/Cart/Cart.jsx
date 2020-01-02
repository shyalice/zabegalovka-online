import React, { Component } from "react";
import {DeleteProductFromCart} from "../../redux/actions";
import { connect } from "react-redux";

class Cart extends Component{
    render(){
        return(
            <div>
                {this.props.cart.map((product) =>{
                    switch(product.type){
                        case "pizza": return(
                            <div key={product.name} style={{border: "2px solid red"}}>
                            <h3>{product.name}</h3>
                            <div>
                                {product.ingredient.map(ingredient =>{
                                    return(
                                        <div key={'ingredient_' + Math.random().toString(36).substr(2, 9)}>{ingredient}</div>
                                    );
                                })}
                                <button type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        </div>
                        );
                        case "burger":return(
                            <div key={product.name} style={{border: "2px solid red"}}>
                                <h3>{product.name}</h3>
                                <div>
                                    {product.ingredient.map(ingredient =>{
                                        return(
                                            <div key={'ingredient' + Math.random().toString(36).substr(2, 9)}>{ingredient}</div>
                                        );
                                    })}
                                    <button type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                                </div>
                            </div>
                        );
                        case "lemonade": return(
                            <div key={product.name} style={{border: "2px solid red"}}>
                                <h3>{product.name}</h3>
                                <button type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );
                        case "coffe": return(
                            <div key={product.name} style={{border: "2px solid red"}}>
                                <h3>{product.name}</h3>
                                <button type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );
                        default: return null
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        DeleteProductFromCart: (product) => dispatch(DeleteProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
