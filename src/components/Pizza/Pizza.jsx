import React, { Component } from "react";
import {connect} from "react-redux";
import {AddProductToCart} from "../../redux/actions";

class Pizza extends Component{
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
                <h2>Pizzza!!!</h2>
                {this.props.pizza.map((pizza)=>{
                    return(
                        <div key={pizza.name} style={{border: "2px solid red"}}>
                            <h3>{pizza.name}</h3>
                            <div>
                                <h4>ingredients:</h4>
                                {pizza.ingredient.map((ingredient) =>{
                                    return(
                                            <div key={'ingredient' + ingredient}>{ingredient}</div>
                                    );
                                })}
                                <button type="button" onClick={() => this.AddProductToCart(pizza)}>Add to Cart</button>
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
        pizza: state.products.pizza
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);