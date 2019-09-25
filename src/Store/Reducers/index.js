import { combineReducers } from 'redux';
import ToastReducer from './ToastReducer';
import AlertReducer from './AlertReducer';

// 전체 reducer를 합쳐주는 과정 (CombineReducers라는 메서드를 써주는 것)
// 앱 전체에서 key 이름으로 사용해주면 된다.

export default combineReducers({
  toast: ToastReducer,
  alert: AlertReducer,
});
