import {CREATE_ITEM, UPDATE_ITEM} from '../actions/types';
import intialState from '../SeedData/orderItemSeed';



export default (state = intialState.data, action) => {
  // console.log(action)
  switch (action.type) {
    case CREATE_ITEM:
      return [ ...state, {...action.payload,id:state.reduce((maxId, todo)=> Math.max(todo.id,maxId),-1) +1} ];
    case UPDATE_ITEM:
      return state.map(item=>{
        if(item.id === action.payload.id){
          return action.payload
        }
        return item
      })
    default:
      return state;
  }
};