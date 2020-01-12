import React, { Component } from "react";
import {AddProductToCart, IncrementCountOfProduct} from "../../redux/actions";
import { connect } from "react-redux";

class Burgers extends Component{
    constructor(props){
        super(props);
        this.state = {};
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
                <h2>Burgers!!!</h2>
                {this.props.burgers.map((burger)=>{
                    return(
                        <div className="product-item" key={burger.name}>
                            <h3 className="product-item-name">{burger.name}</h3>
                            <div>
                                <h4 className="ingredients">ingredients:</h4>
                                {burger.ingredients.map((ingredient) =>{
                                    return(
                                        <div className="ingredient-item" key={'ingredient_' + ingredient}>{ingredient}</div>
                                    );
                                })}
                                <p className="price">Price: <span className="price">{burger.price}$</span></p>
                                <button className="btn" type="button" onClick={() => this.AddProductToCart(burger)}>Add to Cart</button>
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
        burgers: state.products.burgers,
        cart: state.cart
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product)),
        ChangeIncrementCountOfProduct: (product) => dispatch(IncrementCountOfProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burgers);