import { fetchAth, calculateAth } from "@/../task1/allTimeHigh";
import React, { useState, useEffect } from "react";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import { FetchedCurrencyOption } from "../types/types";

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<any>([]);

  useEffect(() => {
    fetch(`https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then(async (data) => {
        const formattedData = data.data.map(async (el: any) => {
          // const getUsers = async ({ ids }) => {
          //     const users = ids.map(async id => {
          //         const { data } = await api.request(`/${id}`);
          //         return data;
          //     });
          //     return Promise.all(users);
          // }

          return { ...el, ath: await fetchAth(el.slug) };
        });
        const res = await Promise.all(formattedData);
        setCurrencies(res);
      });
  }, []);
  return currencies;
};

export default useCurrencies;
