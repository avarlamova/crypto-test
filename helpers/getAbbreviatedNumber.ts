export const getAbbreviatedNumber = (n: number) => {
  //   const nonZeroPosition = getNonZeroDecimalPosition(n);
  if (n < 1) return n.toFixed(5);

  if (n >= 1 && n <= 1000) return n.toFixed(2);
  if (n >= 1e3 && n < 1e6) return String(Math.round(n));
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
};
