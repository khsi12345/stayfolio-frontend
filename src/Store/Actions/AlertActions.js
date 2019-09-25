import { SHOW_ALERT, CLOSE_ALERT } from './types';

export const showAlert = (options) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: { options },
  });
};

export const closeAlert = (options) => (dispatch) => {
  dispatch({
    type: CLOSE_ALERT,
    payload: { options },
  });
};
