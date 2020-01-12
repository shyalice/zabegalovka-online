import React, { Component } from "react";
import {connect} from "react-redux";
import {AddProductToCart,
        IncrementCountOfProduct,
        ChangeSizeOfPizza} from "../../redux/actions";

class Pizza extends Component{
    constructor(props){
        super(props);
        this.state = {
            sizeOfPizza: [25, 30, 35],
        };
        this.AddProductToCart = this.AddProductToCart.bind(this);
    }

    AddProductToCart = (product) =>{
        let count = 0;
        for(let productInCart of this.props.cart){
            if(productInCart.name === product.name && productInCart.size === product.size){
                count += 1;
            }
        };
        if(count > 0){
            this.props.IncrementCountOfProduct(product);
        }
        else{
            this.props.AddProductToCart(product);
        }
    }

    render(){
        return(
            <div className="container">
                <h2>Pizzza!!!</h2>
                {this.props.pizza.map((pizza)=>{
                    return(
                        <div className="product-item" key={"pizza "+pizza.name}>
                            <h3 className="product-item-name">{pizza.name}</h3>
                            <div>
                                <h4 className="ingredients">ingredients:</h4>
                                {pizza.ingredients.map((ingredient) =>{
                                    return(
                                        <div className="ingredient-item" key={'ingredient '+ingredient}>{ingredient}</div>
                                    );
                                })}
                                <form className="size">
                                    {this.state.sizeOfPizza.map((size) =>{
                                        return(
                                            <button className="size-btn" key={"size "+size} type="button" onClick={() => this.props.ChangeSizeOfPizza(size, pizza.name)}>{size}</button>
                                        );
                                    })}
                                </form>
                                <p className="price">Price: <span className="price">{pizza.size*pizza.priceIndex}$</span></p>
                                <button className="btn" type="button" onClick={() => this.AddProductToCart(pizza)}>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        pizza: state.products.pizza,
        cart: state.cart
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product)),
        IncrementCountOfProduct: (product) => dispatch(IncrementCountOfProduct(product)),
        ChangeSizeOfPizza: (size, name) => dispatch(ChangeSizeOfPizza(size, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);