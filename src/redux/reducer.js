import {initialState} from "./initialState";
import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from "./actionTypes";

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_PRODUCT_TO_CART: return{
            ...state.products,
            cart: [action.product, ...state.cart]
        }
        case DELETE_PRODUCT_FROM_CART: return{
            ...state.products,
            cart: state.cart.filter((product) => product !== action.product)
        }
        default: return{
            state
        }
    }
}

export default reducer;