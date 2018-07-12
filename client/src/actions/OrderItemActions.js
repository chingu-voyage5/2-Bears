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


// export const getCategoryItems = (dataArray) => {
//   const categoryName = newCategoriesList
//   function uniqBy (inputArray, callback) {
//     return inputArray.filter(callback)
//   }
//   var inputFunc = function (a) {
//     return ('category', a.category == categoryName)
//   }

//   this.setState({ category: uniqBy(dataArray, inputFunc) }) //
//   console.log(this.state.category)

//   return {
//     type: types.GET_CATEGORY_ITEMS,
//     payload: {
//       categoryItems: categoryItems
//     },
//   };
// };
