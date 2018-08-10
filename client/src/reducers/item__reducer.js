import {GET_CATEGORIES,SET_CATEGORY_ITEMS} from '../actions/types';
// const initialState =[
//   {
//     image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
//     name:'soup',
//     desc:'best soup in the world',
//     price:5.88,
//     type:'soup',
//     id:0
// },
// {
//   image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
//   name:'Chicken soup',
//   desc:'best soup in the world',
//   price:5.88,
//   type:'soup',
//   id:1
// },
// {
//   image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
//   name:'small soup',
//   desc:'best soup in the world',
//   price:5.88,
//   type:'soup',
//   id:2
// },
// {
//   image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
//   name:'big soup',
//   desc:'best soup in the world',
//   price:5.88,
//   type:'soup',
//   id:3
// },
// ];


// export default (state = initialState, action) => {
//     console.log(action)
//     switch (action.type) {
//       case CREATE_ITEM:
//         return [...state, action.payload ];
//       case UPDATE_ITEM:
//       console.log(action.payload,state)
//         return state.map((item)=>{
//           if(item.id === action.payload.id){
//             return action.payload;
//           }
//           return item
//         });
//       default:
//         return state;
//     }
//   };
// import { GET_CATEGORIES, SET_CATEGORY_ITEMS } from '../actions/types';
// const initialState = {
//   newCategoriesList: [],
//   category: '',
//   categoryItems:[],
// }

export default (state = {}, action) => {

  switch (action.type) {
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
    case SET_CATEGORY_ITEMS:
      return {
        ...state,
        categoryItems: action.payload,
      };
    default:
      return state;
  }
};
