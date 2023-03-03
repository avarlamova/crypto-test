import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateAth } from "../../../task1/allTimeHigh";
import useCurrencies from "@/hooks/useCurrencies";
import { WatchlistCurrency, FetchedCurrencyOption } from "@/types/types";
import { getAbbreviatedNumber } from "@/helpers/getAbbreviatedNumber";
import { Wrapper } from "@/styles/styled";
import CurrenciesTable from "@/components/CurrenciesTable/CurrenciesTable";
import NavBar from "@/components/UI/NavBar/NavBar";

const Watchlist = () => {
  const { currencyOptions, error } = useCurrencies(true);

  //   const Table = () => {
  //     return (
  //       <>
  //         <table>
  //           <thead>
  //             <tr>
  //               <th>Name</th>
  //               <th>Price USD</th>
  //               <th>Circulating Supply</th>
  //               <th>Market Cap</th>
  //               <th>Category</th>
  //               <th>From ATH, %</th>
  //               <th>To ATH,%</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {currencyOptions &&
  //               currencyOptions.map((option: WatchlistCurrency) => {
  //                 const {
  //                   id,
  //                   name,
  //                   circulatingSupply,
  //                   marketCap,
  //                   category,
  //                   value,
  //                   ath = {
  //                     currentAth: 0,
  //                     currentPrice: 0,
  //                   },
  //                 } = option;
  //                 const { currentAth, currentPrice } = ath;
  //                 const { fromAth, toAth } = calculateAth(
  //                   currentPrice,
  //                   currentAth
  //                 );
  //                 const abbreviatedPrice = getAbbreviatedNumber(value);

  //                 return (
  //                   <tr key={id}>
  //                     <td>{name}</td>
  //                     <td>$ {abbreviatedPrice}</td>
  //                     <td>{getAbbreviatedNumber(circulatingSupply)}</td>
  //                     <td>$ {getAbbreviatedNumber(marketCap)}</td>
  //                     <td>{category}</td>
  //                     <td>{fromAth}</td>
  //                     <td>{toAth}</td>
  //                   </tr>
  //                 );
  //               })}
  //           </tbody>
  //         </table>
  //       </>
  //     );
  //   };

  return (
    <Wrapper>
      <NavBar />
      {error ? (
        error.message
      ) : currencyOptions.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        <CurrenciesTable currencyOptions={currencyOptions} />
      )}
    </Wrapper>
  );
};

export default Watchlist;
