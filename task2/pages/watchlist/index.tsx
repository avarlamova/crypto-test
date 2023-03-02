import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchAth } from "../../../task1/allTimeHigh";
import useCurrencies from "@/hooks/useCurrencies";

type TableProps = {
  label: string;
  value: string;
};

type CurrencyProps = {
  id: number;
  name: string;
  circulatingSupply: number;
  marketCap: number;
  category: string;
};

const CurrenciesTable = ({ label, value }: TableProps) => {
  //   const data = [
  //     {
  //       id: 1,
  //       rank: 1,

  //       name: "Bitcoin",
  //       symbol: "BTC",
  //       category: "Currency",

  //       volume24hBase: 520339.3602,
  //       circulatingSupply: 19305068,
  //       totalSupply: 21000000,
  //       maxSupply: 21000000,
  //       values: {
  //         USD: {
  //           price: 23706.87753728186,
  //           volume24h: 12335621490,
  //           high24h: 23876.70233050708,
  //           low24h: 23054.16336020719,
  //           marketCap: 457662882924.89886,
  //           percentChange24h: 1.2131,
  //           percentChange7d: -1.7847,
  //           percentChange30d: 1.946,
  //           percentChange3m: 37.5376,
  //           percentChange6m: 17.8697,
  //         },
  //         BTC: {
  //           price: 1,
  //           volume24h: 520339,
  //           high24h: 1,
  //           low24h: 1,
  //           marketCap: 19305068,
  //           percentChange24h: 0,
  //           percentChange7d: 0,
  //           percentChange30d: 0,
  //           percentChange3m: 0,
  //           percentChange6m: 0,
  //         },
  //       },
  //       lastUpdated: "2023-03-01T14:43:01.366Z",
  //     },
  //   ];

  //   useEffect(() => {

  //     fetchAth().catch(console.error);
  //   }, []);

  const currencies = useCurrencies();
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
              ({ id, name, circulatingSupply, category, values }) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{values.USD.price}</td>
                    <td>{circulatingSupply}</td>
                    <td>{values.USD.marketCap}</td>
                    <td>{category}</td>
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
