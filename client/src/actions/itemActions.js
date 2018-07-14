import * as types from './types';

export const createItem = (name,desc,image,price,type) =>{
    return{
      type: types.CREATE_ITEM,
      payload:{
                name,
                desc,
                image,
                price,
                type
       }
    }
}
export const updateItem = (name,desc,image,price,type,id) =>{
    return{
      type: types.UPDATE_ITEM,
      payload:{
                name,
                desc,
                image,
                price,
                type,
                id
       }
    }
}