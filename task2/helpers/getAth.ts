// import fetch from "node-fetch";
import axios from "axios";

export async function fetchAth(currency: string) {
  const URL = "https://tstapi.cryptorank.io/v0/coins/";
  const response = await axios.get(`${URL}${currency}`);
  const data = await response.data;
  const currentPrice = data.data.price.USD;
  const currentAth = data.data.athPrice.USD;

  return { currentPrice, currentAth };
}

//функция расчета
export const calculateAth = (currentPrice: number, currentAth: number) => {
  // const { currentPrice, currentAth } = await fetchAth(currency);

  const difference = +currentAth - +currentPrice;

  //  на сколько цена монеты упала в процентном соотношении
  const fromAth = ((difference / currentAth) * 100).toFixed(2);
  // на сколько цене монеты нужно вырасти в процентном соотношении, чтобы догнать ATH
  const toAth = ((difference / currentPrice) * 100).toFixed(2);

  return { fromAth, toAth };
};
