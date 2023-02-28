import fetch from "node-fetch";

//функция-хелпер, занимающаяся только вычислением
const calculateDifference = (maxPrice, currentPrice, option) => {
  const difference = maxPrice - currentPrice;
  let percentage = 0;
  if (option === "fromAth") {
    percentage = (difference / maxPrice) * 100;
  }
  if (option === "toAth") {
    percentage = (difference / currentPrice) * 100;
  }
  return parseFloat(percentage.toFixed(2));
};

const URL = "https://tstapi.cryptorank.io/v0/coins/";

async function getAllTimeHigh(currency) {
  const response = await fetch(`${URL}${currency}`);
  const data = await response.json();

  const currentPrice = data.data.price.USD;
  const currentAth = data.data.athPrice.USD;

  //  на сколько цена монеты упала в процентном соотношении
  const fromAth = calculateDifference(currentAth, currentPrice, "fromAth");
  // на сколько цене монеты нужно вырасти в процентном соотношении, чтобы догнать ATH
  const toAth = calculateDifference(currentAth, currentPrice, "toAth");
  return { fromAth, toAth };
}
console.log(await getAllTimeHigh("bitcoin"));

// module.exports = { getAllTimeHigh, calculateGrowth, calculateDifference };
