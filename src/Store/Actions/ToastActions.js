import { SHOW_TOAST, HIDE_TOAST } from './types';
// Action 정의

export const showToast = options => {
  return { type: SHOW_TOAST, payload: { options } };
};

export const hideToast = options => {
  return { type: HIDE_TOAST, payload: { options } };
};
