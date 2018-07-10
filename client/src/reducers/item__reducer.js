import {CREATE_ITEM} from '../actions/types';
const initialState =[
  {
    image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
    name:'soup',
    desc:'best soup in the world',
    price:5.88,
    type:'soup'
},
{
  image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
  name:'Chicken soup',
  desc:'best soup in the world',
  price:5.88,
  type:'soup'
},
{
  image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
  name:'small soup',
  desc:'best soup in the world',
  price:5.88,
  type:'soup'
},
{
  image:"https://img.taste.com.au/9W7uMD8-/w720-h480-cfill-q80/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg",
  name:'big soup',
  desc:'best soup in the world',
  price:5.88,
  type:'soup'
},
];


export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case CREATE_ITEM:
        return [...state, action.payload ];
      default:
        return state;
    }
  };