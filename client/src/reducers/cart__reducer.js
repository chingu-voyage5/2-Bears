import {ADD_TO_CART,DELETE_CART_ITEM} from '../actions/types';



export default (state = [],action)=>{
switch(action.type){
 case ADD_TO_CART:
 console.log(action.payload)
   return [...state,action.payload]
case DELETE_CART_ITEM:
  return state.filter((item)=>{return item.id != action.payload.id})
 default:
 return state
}
}