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
              ({ id, name, circulatingSupply, category, value, marketCap }) => {
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{value}</td>
                    <td>{circulatingSupply}</td>
                    <td>{marketCap}</td>
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
