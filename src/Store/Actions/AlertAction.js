import { SHOW_MODAL, CLOSE_MODAL } from './types';

export const showAlert = (options) => ({ type: SHOW_MODAL, payload: { options } });

export const closeAlert = () => ({ type: CLOSE_MODAL });
