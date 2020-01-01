import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from "./actionTypes";

export const AddProductToCart = (product) =>{
    return{
        type: ADD_PRODUCT_TO_CART,
        product
    }
}

export const DeleteProductFromCart = (product) =>{
    return{
        type: DELETE_PRODUCT_FROM_CART,
        product
    }
}