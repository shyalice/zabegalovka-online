import React, { Component } from "react";
import { connect } from "react-redux";
import {IncrementCountOfProduct, DecrementCountOfProduct} from "../../redux/actions";


class ChangeCount extends Component{
    render(){
        return(
            <form>
                <button type="button" onClick={() => this.props.ChangeDecrementCountOfProduct(this.props.product)}>-</button>
                <p>{this.props.product.count}</p>
                <button type="button" onClick={() => this.props.ChangeIncrementCountOfProduct(this.props.product)}>+</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        ChangeIncrementCountOfProduct: (product) => dispatch(IncrementCountOfProduct(product)),
        ChangeDecrementCountOfProduct: (product) => dispatch(DecrementCountOfProduct(product)),
    }
}

export default connect(null, mapDispatchToProps)(ChangeCount);