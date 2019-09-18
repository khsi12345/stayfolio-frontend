import {
  SHOW_MODAL,
  CLOSE_MODAL
} from 'Actions/types';

const INITIAL_STATE = {
  showAlert: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showAlert: true,
        options: action.payload.options,
      };

    case CLOSE_MODAL:
      return {
        ...state, showAlert: false
      };

    default:
      return state;
  }

}