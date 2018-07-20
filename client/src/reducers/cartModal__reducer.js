import {OPEN_CART,CLOSE_CART} from '../actions/types';

export default (state=false,action)=>{
 switch(action.type){
 case(OPEN_CART):
     return action.payload
 case(CLOSE_CART):
     return action.payload
default:
return state
 }
}