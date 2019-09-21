import { combineReducers } from 'redux';
import alertReducer from './AlertReducer';

export default combineReducers({
  // form,
  alert: alertReducer,
});
