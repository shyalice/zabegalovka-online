import React, { Component } from "react";
import {AddProductToCart} from "../../redux/actions";
import { connect } from "react-redux";

class Burgers extends Component{
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
                <h2>Burgers!!!</h2>
                {this.props.burgers.map((burger)=>{
                    return(
                        <div key={burger.name} style={{border: "2px solid red"}}>
                            <h3>{burger.name}</h3>
                            <div>
                                <h4>ingredients:</h4>
                                {burger.ingredient.map((ingredient) =>{
                                    return(
                                        <div key={'ingredient_' + ingredient}>{ingredient}</div>
                                    );
                                })}
                                <button type="button" onClick={() => this.AddProductToCart(burger)}>Add to Cart</button>
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
        burgers: state.products.burgers
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burgers);