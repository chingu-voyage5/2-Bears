import dataArray from '../SeedData/orderItemSeed';
import { GET_CATEGORIES, GET_CATEGORY_ITEMS } from './types';

export const getCategories = () => {
  const uniqueCategoriesArray = [...new Set(dataArray.map(dataArray => dataArray.category))]
  const newCategoriesList = [...new Set(uniqueCategoriesArray.map(uniqueCategoriesArray => ({'category':uniqueCategoriesArray,}) ))]
  // console.log(uniqueCategoriesArray)
  console.log(newCategoriesList)
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


export const getCategoryItems = (categoryPick) => {
  // const categoryName = this.state.category
  console.log('accessed console.og', dataArray)
  console.log(categoryPick)
  function getItemsOfSame (inputArray, callback) {
    return inputArray.filter(callback)
  }
  const hasSameCategory = function (a) {
    return ('category', a.category == categoryPick)
  }

  return {
    type: GET_CATEGORY_ITEMS,
    payload: getItemsOfSame(dataArray, hasSameCategory),
  };



  // console.log(this.state.category)
};
