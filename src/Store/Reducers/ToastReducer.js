import { SHOW_TOAST, HIDE_TOAST } from 'Store/Actions/types';

const INITIAL_STATE = {
  showToast: false,
};

// 리듀서의 첫 번째 인자는 이전 state가 들어오고 두 번째 인자는 action.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
        options: action.payload.options,
      };
    case HIDE_TOAST:
      return { ...state, showToast: false };
    default:
      return state;
  }
};
