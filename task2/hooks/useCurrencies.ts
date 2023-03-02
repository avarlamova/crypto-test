import React, { useState, useEffect } from "react";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import { FetchedCurrencyOption } from "../types/types";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(`https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}`).then(
      (response) =>
        response.json().then((data) => {
          const formattedData = data.data.map((el: FetchedCurrencyOption) => {
            return {
              //   id: el.id,
              //   name: el.name,
              //   category: el.category,
              //   circulatingSupply: el.circulatingSupply,
              value: el.values.USD.price,
              marketCap: el.values.USD.marketCap,
              ...el,
            };
          });
          setCurrencies(formattedData);
        })
    );
  }, []);
  return currencies;
};

export default useCurrencies;
