import {ADD_TO_CART} from '../actions/types';



export default (state = [],action)=>{
switch(action.type){
 case ADD_TO_CART:
 console.log(action.payload)
   return [...state,action.payload]
 default:
 return state
}
}