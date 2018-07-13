import dataArray from '../SeedData/orderItemSeed';
import { GET_CATEGORIES, SET_CATEGORY_ITEMS } from './types';

export const getCategories = () => {
  const uniqueCategoriesArray = [...new Set(dataArray.map(dataArray => dataArray.category))]
  const newCategoriesList = [...new Set(uniqueCategoriesArray.map(uniqueCategoriesArray => ({'category':uniqueCategoriesArray,}) ))]
  return  {
    type: GET_CATEGORIES,
    payload: newCategoriesList,
  }
};


// export const setCategory = (categoryPick) => {
//   // const pickedCategory = '';

//   return {
//     type: types.SET_CATEGORY,
//     payload: categoryPick,
//   }
// };


export const setCategoryItems = (categoryItems) => {
  console.log('accessed setcategoryItems', categoryItems)
  return {
    type: SET_CATEGORY_ITEMS,
    payload: categoryItems,
  };
};
