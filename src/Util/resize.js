export const getBrowserWidth = (set) => {
  window.addEventListener('resize', () => {
    set(window.innerWidth);
  });
  return window.innerWidth;
};
