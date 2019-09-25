import { SHOW_TOAST, HIDE_TOAST } from './types';

// Action Creator 정의, action 객체를 리턴한다.
// return body에다가 dispatch 함수 호출해서 인자로 hideToast 액션을 넘겨줌 setTimeout
// dispatch 함수 import 하는 것 찾기
// action creator에서 dispatch 하는 법 -> thunk 미들웨어

export const showToast = (options) => (dispatch) => {
  setTimeout(() => {
    dispatch(hideToast());
  }, 3000);

  dispatch({
    type: SHOW_TOAST,
    payload: { options },
  });
};

export const hideToast = (options) => ({
  type: HIDE_TOAST,
  payload: { options },
});
