export const unitConversion = (minp) => {
  const min = Number(minp)
    .toString()
    .split('');
  let cou = 0;
  for (let i = min.length; i > 0; i--) {
    if (cou === 3) {
      min.splice(i, 0, ',');
      cou = 0;
    }
    cou += 1;
  }
  const result = min.join('');
  return result;
};
