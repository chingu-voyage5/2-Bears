import {ADD_TO_CART,DELETE_CART_ITEM} from '../actions/types';



export default (state = [],action)=>{
switch(action.type){
 case ADD_TO_CART:
 const cartItem = state.filter(item=> item.id === action.payload.id);
 if(cartItem.length > 0){
   return state.map(item=>{
      if(item.id ===  action.payload.id){
    return  {...item,quantity:item.quantity+1}
  }
  return item
   })}
    return [...state,action.payload];


case DELETE_CART_ITEM:
   const deleteItem = state.map((item)=>{
    if(item.id === action.payload.id){
      return {...item,quantity:item.quantity - 1}
    }
    return item
  });
  return deleteItem.filter(item => item.quantity != 0 )
 default:
 return state
}
}