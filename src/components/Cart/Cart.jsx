import React, { Component } from "react";
import {DeleteProductFromCart,
        ChangeSizeFromCart,
        ChangeIncrementCountOfProduct,
        ChangeDecrementCountOfProduct} from "../../redux/actions";
import { connect } from "react-redux";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state ={
            sizeOfPizza: [25, 30, 35],
            sizeOfLemonade:[0.35, 0.5, 1],
            sizeOfCoffe:[0.25, 0.45]
        }
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
        return total;
    }



    render(){
        return(
            <div className="container">
                {this.props.cart.map((product) =>{
                    switch(product.type){
                        //============================PIZZA========================
                        case "pizza": return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                            <h3 className="product-item-name">{product.name}</h3>
                            <form className="count-change">
                                <button className="count-btn" type="button" onClick={() => this.props.ChangeDecrementCountOfProduct(product)}>-</button>
                                <p className="count">{product.count}</p>
                                <button className="count-btn" type="button" onClick={() => this.props.ChangeIncrementCountOfProduct(product)}>+</button>
                            </form>
                            <h4 className="ingredients">ingredients:</h4>
                            {product.ingredient.map(ingredient =>{
                                return(
                                    <div className="ingredient-item" key={'ingredient_' + Math.random().toString(36).substr(2, 9)}>{ingredient}</div>
                                );
                            })}
                            <br/>
                            <p>size: {product.size}</p>
                            <p className="price">Price: <span className="price">{product.size*product.priceIndex*product.count}$</span></p>
                            <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                        </div>
                        );
                        //============================BIRGER========================
                        case "burger":return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                                <h3 className="product-item-name">{product.name}</h3>
                                <form className="count-change">
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeDecrementCountOfProduct(product)}>-</button>
                                    <p className="count">{product.count}</p>
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeIncrementCountOfProduct(product)}>+</button>
                                </form>
                                <h4 className="ingredients">ingredients:</h4>
                                {product.ingredient.map(ingredient =>{
                                    return(
                                        <div className="ingredient-item" key={'ingredient' + Math.random().toString(36).substr(2, 9)}>{ingredient}</div>
                                    );
                                })}
                                <p className="price">Price: <span className="price">{product.price*product.count}$</span></p>
                                <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );
                        //============================LEMONADE========================
                        case "lemonade": return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                                <h3 className="product-item-name">{product.name}</h3>
                                <form className="count-change">
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeDecrementCountOfProduct(product)}>-</button>
                                    <p className="count">{product.count}</p>
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeIncrementCountOfProduct(product)}>+</button>
                                </form>
                                <br/>
                                <p>size: {product.size}</p>
                                <p className="price">Price: <span className="price">{product.size*product.priceIndex*product.count}$</span></p>
                                <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );
                        //============================COFFEE========================
                        case "coffe": return(
                            <div className="product-item" key={product.name+ Math.random().toString(36).substr(2, 9)}>
                                <h3 className="product-item-name">{product.name}</h3>
                                <form className="count-change">
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeDecrementCountOfProduct(product)}>-</button>
                                    <p className="count">{product.count}</p>
                                    <button className="count-btn" type="button" onClick={() => this.props.ChangeIncrementCountOfProduct(product)}>+</button>
                                </form>
                                <br/>
                                <p>size: {product.size}</p>
                                <p className="price">Price: <span className="price">{product.size*product.priceIndex*product.count}$</span></p>
                                <button className="btn" type="button" onClick={() => this.props.DeleteProductFromCart(product)}>Delete from Cart</button>
                            </div>
                        );

                        default: return null
                    }
                })}

                <div>{this.totalPrice(this.props.cart)}</div>
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
        DeleteProductFromCart: (product) => dispatch(DeleteProductFromCart(product)),
        ChangeIncrementCountOfProduct: (product) => dispatch(ChangeIncrementCountOfProduct(product)),
        ChangeDecrementCountOfProduct: (product) => dispatch(ChangeDecrementCountOfProduct(product)),
        ChangeSizeFromCart: (size, id) => dispatch(ChangeSizeFromCart(size, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
