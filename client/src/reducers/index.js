import { combineReducers } from 'redux';
// import Settings from '../components/admin/Settings'
// import SettingReducers from './SettingReducers';
import item__reducer from './item__reducer';
import authReducer from './authReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  items:item__reducer
});

export default RootReducer;