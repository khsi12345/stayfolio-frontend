import { SHOW_ALERT, CLOSE_ALERT } from 'Store/Actions/types';

// const INITIAL_STATE = {
//   showAlert: false,
// };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        options: action.payload.options,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        showAlert: false,
      };
    default:
      return state;
  }
}
