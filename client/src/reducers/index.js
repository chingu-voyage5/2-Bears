import { combineReducers } from 'redux';
import cms__reducer from './cms__reducer';
import item__reducer from './item__reducer';
import authReducer from './authReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  cms: cms__reducer,
  items:item__reducer,
});

export default RootReducer;