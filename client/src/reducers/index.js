import { combineReducers } from 'redux';
//import EmployeeFormReducer from './EmployeeFormReducer';
// import AnimationReducers from './AnimationReducers';
import authReducer from './authReducer'

  const RootReducer = combineReducers({
      auth: authReducer,
      // AnimationReducers,

  })

export default RootReducer;

