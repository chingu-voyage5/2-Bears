import * as types from './types';

export const createItem = (title,description,image,price,category) =>{
    return{
      type: types.CREATE_ITEM,
      payload:{
                title,
                category,
                description,
                image,
                price,
                
       }
    }
}
export const updateItem = (title,description,image,price,category,id) =>{
    return{
      type: types.UPDATE_ITEM,
      payload:{
                title,
                description,
                image,
                price,
                category,
                id
       }
    }
}