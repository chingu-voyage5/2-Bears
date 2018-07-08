import { combineReducers } from 'redux';
// import Settings from '../components/admin/Settings'
//import EmployeeFormReducer from './EmployeeFormReducer';
// import AnimationReducers from './AnimationReducers';

import item__reducer from './item__reducer';

import authReducer from './authReducer'

  const RootReducer = combineReducers({
      auth: authReducer,
      items:item__reducer
      // AnimationReducers,

  })

export default RootReducer;

