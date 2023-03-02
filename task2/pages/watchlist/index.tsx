import React, { useState, useEffect } from "react";
import Link from "next/link";
import { calculateAth } from "../../../task1/allTimeHigh";
import useCurrencies from "@/hooks/useCurrencies";
import { CurrencyOption, FetchedCurrencyOption } from "@/types/types";

type TableProps = {
  label: string;
  value: string;
};

const CurrenciesTable = ({ label, value }: TableProps) => {
  const currencies = useCurrencies();

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
              <th>From ATH</th>
              <th>To ATH</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(
              ({
                id,
                name,
                circulatingSupply,
                category,
                value,
                marketCap,
                ath,
              }) => {
                const { currentAth, currentPrice } = ath;
                const { fromAth, toAth } = calculateAth(
                  currentPrice,
                  currentAth
                );
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{value}</td>
                    <td>{circulatingSupply}</td>
                    <td>{marketCap}</td>
                    <td>{category}</td>
                    <td>{fromAth}</td>
                    <td>{toAth}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      <Link href="/"> Back to homepage</Link>
      <EditableTable />
    </div>
  );
};

export default CurrenciesTable;
