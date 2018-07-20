import * as types from './types';

export const openCart = ()=>{
    return {
        type:types.OPEN_CART,
        payload:true
    }
}
export const closeCart = ()=>{
    return{
        type:types.CLOSE_CART,
        payload:false
    }
}

export const addToCart = ({ title,description,image,price,category,id})=>{
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
