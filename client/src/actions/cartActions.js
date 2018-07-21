import * as types from './types';

export const toggleCart = ()=>{
    return{
        type:types.TOGGLE_CART
    }
}

export const addToCart = (title,description,image,price,category,id)=>{
    return{
        type:types.ADD_TO_CART,
        payload:{
             title,
             price,
             image,
             description,
             category,
             id
        }
    }
}
