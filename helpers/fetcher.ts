import { FetchedCurrencyOption } from "./../types/types";
import { fetchAth } from "./getAth";

export const fetcherWithAth = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then(async (data) => {
      const formattedData = data.data.map(async (el: FetchedCurrencyOption) => {
        return {
          id: el.id,
          name: el.name,
          symbol: el.symbol,
          circulatingSupply: el.circulatingSupply,
          category: el.category,
          value: el.values.USD.price,
          marketCap: el.values.USD.marketCap,
          ath: await fetchAth(el.slug),
        };
      });
      return await Promise.all(formattedData);
    });

export const fetcher = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) =>
      data.data.map((el: FetchedCurrencyOption) => {
        return {
          id: el.id,
          name: el.name,
          symbol: el.symbol,
          circulatingSupply: el.circulatingSupply,
          category: el.category,
          value: el.values.USD.price,
          marketCap: el.values.USD.marketCap,
        };
      })
    );
