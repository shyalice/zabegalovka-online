import React, { Component } from "react";
import {connect} from "react-redux";
import {AddProductToCart} from "../redux/actions";

class Pizza extends Component{
    render(){
        return(
            <div>
                <h2>Pizzza!!!</h2>
                {/* {this.props.state.map((pizza)=>{
                    return(
                        <div className="pizza">
                            <h3>{pizza.name}</h3>
                            <div className="ingredients">
                                {pizza.ingredient.map(ingredient =>{
                                    return(
                                        <div>{ingredient}</div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })} */}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        pizza: state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddProductToCart: (product) => dispatch(AddProductToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);