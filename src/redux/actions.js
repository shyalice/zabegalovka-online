import {ADD_PRODUCT_TO_CART, 
        DELETE_PRODUCT_FROM_CART,
        CHANGE_INCREMENT_COUNT_OF_PRODUCT,
        CHANGE_DECREMENT_COUNT_OF_PRODUCT,
        CHANGE_SIZE_OF_PIZZA,
        CHANGE_SIZE_OF_LEMONADE, 
        CHANGE_SIZE_OF_COFFEE,
        CHANGE_SIZE_FROM_CART} from "./actionTypes";

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

export const ChangeIncrementCountOfProduct = (product)=>{
    return{
        type: CHANGE_INCREMENT_COUNT_OF_PRODUCT,
        product
    }
}

export const ChangeDecrementCountOfProduct = (product)=>{
    return{
        type: CHANGE_DECREMENT_COUNT_OF_PRODUCT,
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

export const ChangeSizeFromCart = (size, id) =>{
    return{
        type: CHANGE_SIZE_FROM_CART,
        size,
        id
    }
}