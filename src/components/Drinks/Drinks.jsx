import React, { Component } from "react";
import {AddProductToCart,
        ChangeIncrementCountOfProduct,
        ChangeSizeOfLemonade,
        ChangeSizeOfCoffee} from "../../redux/actions";
import { connect } from "react-redux";

class Drinks extends Component{
    constructor(props){
        super(props);
        this.state = {
            sizeOfLemonade:[0.35, 0.5, 1],
            sizeOfCoffe:[0.25, 0.45]
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
            this.props.ChangeIncrementCountOfProduct(product);
        }
        else{
            this.props.AddProductToCart(product);
        }
    }

    render(){
        return(
            <div className="container">
                <div>
                    <h2>Lemonade</h2>
                    {this.props.drinks.lemonade.map((lemonade)=>{
                        return(
                            <div className="product-item" key={lemonade.name}>
                                <h3 className="product-item-name">{lemonade.name}</h3>
                                <form className="size">
                                    {this.state.sizeOfLemonade.map((size) =>{
                                        return(
                                            <button className="size-btn" key={"size "+size} type="button" onClick={() => this.props.ChangeSizeOfLemonade(size, lemonade.name)}>{size}</button>
                                        );
                                    })}
                                </form>
                                <p className="price">Price: <span className="price">{lemonade.size*lemonade.priceIndex}$</span></p>
                                <button className="btn" type="button" onClick={() => this.AddProductToCart(lemonade)}>Add to Cart</button>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <h2>Coffee</h2>
                    {this.props.drinks.coffee.map((coffee)=>{
                        return(
                            <div className="product-item" key={coffee.name}>
                                <h3 className="product-item-name">{coffee.name}</h3>
                                <form className="size">
                                    {this.state.sizeOfCoffe.map((size) =>{
                                        return(
                                            <button className="size-btn" key={"size "+size} type="button" onClick={() => this.props.ChangeSizeOfCoffee(size, coffee.name)}>{size}</button>
                                        );
                                    })}
                                </form>
                                <p className="price">Price: <span className="price">{coffee.size*coffee.priceIndex}$</span></p>
                                <button className="btn" type="button" onClick={() => this.AddProductToCart(coffee)}>Add to Cart</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        drinks: state.products.drinks,
        cart: state.cart
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product)),
        ChangeIncrementCountOfProduct: (product) => dispatch(ChangeIncrementCountOfProduct(product)),
        ChangeSizeOfLemonade: (size, name) => dispatch(ChangeSizeOfLemonade(size, name)),
        ChangeSizeOfCoffee: (size, name) => dispatch(ChangeSizeOfCoffee(size, name))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Drinks);