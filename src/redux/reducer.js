import {initialState} from "./initialState";
import {ADD_PRODUCT_TO_CART, 
        DELETE_PRODUCT_FROM_CART,
        INCREMENT_COUNT_OF_PRODUCT,
        DECREMENT_COUNT_OF_PRODUCT,
        CHANGE_SIZE_OF_PIZZA, 
        CHANGE_SIZE_OF_LEMONADE, 
        CHANGE_SIZE_OF_COFFEE} from "./actionTypes";

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_PRODUCT_TO_CART: {
            return{
                ...state,
                cart: [action.product, ...state.cart]
            }
        }

        case DELETE_PRODUCT_FROM_CART: {
            return{
                ...state,
                cart: state.cart.filter((product) => product !== action.product)
            }
        }

        case INCREMENT_COUNT_OF_PRODUCT: {
            return{
                ...state,
                cart: state.cart.map((product) => {
                    if(product.name === action.product.name && product.size === action.product.size){
                        return{
                            ...product,
                            count: product.count+1
                        }
                    }
                    else return product
                })
            }
        }

        case DECREMENT_COUNT_OF_PRODUCT: {
            return{
                ...state,
                cart: state.cart.map((product) => {
                    if(product.name === action.product.name && product.size === action.product.size && product.count > 1){
                        return{
                            ...product,
                            count: product.count-1
                        }
                    }
                    else return product
                })
            }
        }

        case CHANGE_SIZE_OF_PIZZA:{
            const pizza = state.products.pizza.map((pizza) =>{
                if(pizza.name === action.name){
                    return{
                        ...pizza, 
                        size: action.size
                    }
                }
                else return pizza
                
            })
            return{
                ...state,
                products: {...state.products, pizza}
            }
        }

        case CHANGE_SIZE_OF_LEMONADE:{
            const lemonade = state.products.drinks.lemonade.map((lemonade)=>{
                if(lemonade.name === action.name){
                    return{
                        ...lemonade, 
                        size: action.size
                    }
                }
                else return lemonade
            })
            const coffee = state.products.drinks.coffee
            const drinks = {coffee, lemonade}
            return{
                ...state,
                products: {...state.products, drinks}
            }
        }

        case CHANGE_SIZE_OF_COFFEE:{
            const coffee = state.products.drinks.coffee.map((coffee)=>{
                if(coffee.name === action.name){
                    return{
                        ...coffee, 
                        size: action.size
                    }
                }
                else return coffee
            })
            const lemonade = state.products.drinks.lemonade
            const drinks = {coffee, lemonade}
            return{
                ...state,
                products: {...state.products, drinks}
            }
        }

        default: return state
    }
}

export default reducer;