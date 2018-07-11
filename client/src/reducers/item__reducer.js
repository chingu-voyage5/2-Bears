import {CREATE_ITEM, GET_CATEGORIES, GET_CATEGORY_ITEMS} from '../actions/types';
const initialState = { newCategoriesList: [], category: '', categoryItems:[], }

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case CREATE_ITEM:
        return [ ...state, action.payload ];
      case GET_CATEGORIES:
        return {
          ...state,
          newCategoriesList: action.payload,
        };
      // case SET_CATEGORY:
      //   return {
      //     ...state,
      //     category: action.payload,
      //   };
      // case GET_CATEGORY_ITEMS:
      //   return {
      //     ...state,
      //     categoryItems: action.payload,
      //   };
      default:
        return state;
    }
  };