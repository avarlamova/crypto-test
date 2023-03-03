import { getAbbreviatedNumber } from "@/helpers/getAbbreviatedNumber";
import { calculateAth } from "@/helpers/getAth";
import { WatchlistCurrency, WatchlistCurrencyOptions } from "@/types/types";
import React, { FC } from "react";
import { StyledTable } from "./styled";

type TableProps = {
  currencyOptions: WatchlistCurrencyOptions;
};

const CurrenciesTable: FC<TableProps> = ({ currencyOptions }) => {
  return (
    <StyledTable>
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
            const { fromAth, toAth } = calculateAth(currentPrice, currentAth);
            const abbreviatedPrice = getAbbreviatedNumber(value);

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>$ {abbreviatedPrice}</td>
                <td>{getAbbreviatedNumber(circulatingSupply)}</td>
                <td>$ {getAbbreviatedNumber(marketCap)}</td>
                <td>{category}</td>
                <td>{fromAth}</td>
                <td>{toAth}</td>
              </tr>
            );
          })}
      </tbody>
    </StyledTable>
  );
};

export default CurrenciesTable;
