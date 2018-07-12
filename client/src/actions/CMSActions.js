import { CREATE_ITEM } from './types';

export const createItem = (name,desc,image,price,type) =>{
    return{
      type: CREATE_ITEM,
      payload: {
      name,
      desc,
      image,
      price,
      type
      }
    }
}