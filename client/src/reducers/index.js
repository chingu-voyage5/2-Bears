import { combineReducers } from 'redux';
// import Settings from '../components/admin/Settings'
import SettingReducers from './SettingReducers';
import item__reducer from './item__reducer';

export default combineReducers({
  // change child reducers here
  settings: SettingReducers,
  items:item__reducer
  //
});