import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './types';

export const showAlert = (options) => {
  return { type: SHOW_MODAL, payload: {options}}
};

export const closeAlert = () => {
  return { type: CLOSE_MODAL}
};