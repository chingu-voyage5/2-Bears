import { combineReducers } from 'redux';
// import Settings from '../components/admin/Settings'
import SettingReducers from './SettingReducers';

export default combineReducers({
  // change child reducers here
  settings: SettingReducers
  //
});