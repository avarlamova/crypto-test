import React, { useState, useEffect } from "react";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(`https://api.cryptorank.io/v1/currencies?api_key=${API_KEY}`).then(
      (response) => response.json().then((data) => setCurrencies(data.data))
    );
  }, []);
  return currencies;
};

export default useCurrencies;
