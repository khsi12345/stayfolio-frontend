import { SHOW_TOAST, HIDE_TOAST } from './types';
// Action 정의

export const showToast = (options) => ({ type: SHOW_TOAST, payload: { options } });

export const hideToast = (options) => ({ type: HIDE_TOAST, payload: { options } });
