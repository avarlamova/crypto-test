import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateAth } from "../../../task1/allTimeHigh";
import useCurrenciesWithAth from "@/hooks/useCurrencies";
import { WatchlistCurrency, FetchedCurrencyOption } from "@/types/types";
import { getAbbreviatedNumber } from "@/helpers/getAbbreviatedNumber";
import { Wrapper } from "@/styles/styled";
import CurrenciesTable from "@/components/CurrenciesTable/CurrenciesTable";
import NavBar from "@/components/UI/NavBar/NavBar";
import { fetchAth } from "@/helpers/getAth";

const Watchlist = () => {
  const { currencyOptions, error } = useCurrenciesWithAth(true);
  const hasAthData = currencyOptions.every((el: WatchlistCurrency) => el.ath);
  return (
    <Wrapper>
      <NavBar />
      {error ? (
        error.message
      ) : currencyOptions.length > 0 && hasAthData ? (
        <CurrenciesTable currencyOptions={currencyOptions} />
      ) : (
        <h1>Loading...</h1>
      )}
    </Wrapper>
  );
};

export default Watchlist;
