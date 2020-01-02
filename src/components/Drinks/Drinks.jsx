import React, { Component } from "react";
import {AddProductToCart} from "../../redux/actions";
import { connect } from "react-redux";

class Drinks extends Component{
    constructor(props){
        super(props);
        this.state = {};
        this.AddProductToCart = this.AddProductToCart.bind(this);
    }

    AddProductToCart = (product) =>{
        const productWitchId = {...product, id: "product_"+Math.random().toString(36).substr(2, 9)}
        this.props.AddProductToCart(productWitchId);
    }

    render(){
        return(
            <div>
                <div>
                    <h2>Lemonade</h2>
                    {this.props.drinks.lemonade.map((lemonade)=>{
                        return(
                            <div key={lemonade.name} style={{border: "2px solid red"}}>
                                <h3>{lemonade.name}</h3>
                                <button type="button" onClick={() => this.AddProductToCart(lemonade)}>Add to Cart</button>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <h2>Coffee</h2>
                    {this.props.drinks.coffee.map((coffee)=>{
                        return(
                            <div key={coffee.name} style={{border: "2px solid red"}}>
                                <h3>{coffee.name}</h3>
                                <button type="button" onClick={() => this.AddProductToCart(coffee)}>Add to Cart</button>
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
        drinks: state.products.drinks
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);