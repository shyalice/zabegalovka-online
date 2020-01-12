import {ADD_PRODUCT_TO_CART, 
        DELETE_PRODUCT_FROM_CART,
        INCREMENT_COUNT_OF_PRODUCT,
        DECREMENT_COUNT_OF_PRODUCT,
        CHANGE_SIZE_OF_PIZZA,
        CHANGE_SIZE_OF_LEMONADE, 
        CHANGE_SIZE_OF_COFFEE} from "./actionTypes";

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

export const IncrementCountOfProduct = (product)=>{
    return{
        type: INCREMENT_COUNT_OF_PRODUCT,
        product
    }
}

export const DecrementCountOfProduct = (product)=>{
    return{
        type: DECREMENT_COUNT_OF_PRODUCT,
        product
    }
}

export const ChangeSizeOfPizza = (size, name) =>{
    return{
        type: CHANGE_SIZE_OF_PIZZA,
        size,
        name
    }
}

export const ChangeSizeOfLemonade = (size, name) =>{
    return{
        type: CHANGE_SIZE_OF_LEMONADE,
        size,
        name
    }
}

export const ChangeSizeOfCoffee = (size, name) =>{
    return{
        type: CHANGE_SIZE_OF_COFFEE,
        size,
        name
    }
}