export const getAbbreviatedNumber = (n: number) => {
  if (n < 1) {
    return n.toFixed(5);
  }
  if (n < 1e3) return Math.round(n);
  if (n >= 1e3 && n < 1e6) return Math.round(n).toFixed(2);
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};
