import { CREATE_ITEM } from '../actions/types';

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case CREATE_ITEM:
      return [ ...state, action.payload ];
    default:
      return state;
  }
};