import {CREATE_ITEM, UPDATE_ITEM} from '../actions/types';
import intialState from '../SeedData/cmsData';



export default (state = intialState, action) => {
  console.log(action)
  switch (action.type) {
    case CREATE_ITEM:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};