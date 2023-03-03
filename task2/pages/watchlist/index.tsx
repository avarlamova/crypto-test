import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateAth } from "../../../task1/allTimeHigh";
import useCurrencies from "@/hooks/useCurrencies";
import { WatchlistCurrency, FetchedCurrencyOption } from "@/types/types";
import { getAbbreviatedNumber } from "@/helpers/getAbbreviatedNumber";

type TableProps = {
  label: string;
  value: string;
};

const CurrenciesTable = ({ label, value }: TableProps) => {
  const { currencyOptions, error } = useCurrencies(true);
  //   const [isLoading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const getData = async () => {
  //       const fileData = await Promise.all(
  //         currencies.map(async (el: FetchedCurrencyOption) => {
  //           const { currentAth, currentPrice } = await fetchAth(el.slug);
  //           return { test: 1, currentAth, currentPrice };
  //         })
  //       );
  //       setTest(fileData);
  //       console.log(test);
  //     };
  //     getData();
  //   }, [currencies]);

  const EditableTable = () => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price USD</th>
              <th>Circulating Supply</th>
              <th>Market Cap</th>
              <th>Category</th>
              <th>From ATH, %</th>
              <th>To ATH,%</th>
            </tr>
          </thead>
          <tbody>
            {currencyOptions &&
              currencyOptions.map((option: WatchlistCurrency) => {
                const {
                  id,
                  name,
                  circulatingSupply,
                  marketCap,
                  category,
                  value,
                  ath = {
                    currentAth: 0,
                    currentPrice: 0,
                  },
                } = option;
                const { currentAth, currentPrice } = ath;
                const { fromAth, toAth } = calculateAth(
                  currentPrice,
                  currentAth
                );
                const abbreviatedPrice = getAbbreviatedNumber(value);
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>${abbreviatedPrice}</td>
                    <td>{circulatingSupply}</td>
                    <td>{marketCap}</td>
                    <td>{category}</td>
                    <td>{fromAth}</td>
                    <td>{toAth}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      <Link href="/"> Back to homepage</Link>
      {error ? (
        error.message
      ) : currencyOptions.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        <EditableTable />
      )}
    </div>
  );
};

export default CurrenciesTable;
