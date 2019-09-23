import { combineReducers } from 'redux';
import ToastReducer from './ToastReducer';

export default combineReducers({
  toast: ToastReducer,
});
