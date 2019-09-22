import { SHOW_TOAST, HIDE_TOAST } from 'Store/Actions/types';

const INITIAL_STATE = {
  showToast: false,
  // title: '',
  // description: '',
};

// 첫 번째 인자는 이전 state가 들어오고 두 번째 인자는 action.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
      };
    case HIDE_TOAST:
      return { ...state, showToast: false };
    default:
      return state;
  }
};
