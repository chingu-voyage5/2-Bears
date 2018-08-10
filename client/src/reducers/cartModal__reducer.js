import {TOGGLE_CART} from '../actions/types';

export default (state=false,action)=>{
 switch(action.type){
 case(TOGGLE_CART):
     return !state
default:
return state
 }
}