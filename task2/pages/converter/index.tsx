import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSelect from "@/components/UI/CustomSelect";
import useCurrencies from "@/hooks/useCurrencies";
import { CryptoCurrencyOptions, CurrencyOptions } from "../../types/types";

type SelectProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Converter = ({ label, value, onChange }: SelectProps) => {
  const currencyOptions: CurrencyOptions = [{ name: "USD", id: 1 }];
  const cryptocurrencyOptions: CryptoCurrencyOptions = useCurrencies();
  const [amount, setAmount] = useState(1);
  const [baseCurrencyId, setBaseCurrencyId] = useState(1);
  const [baseCurrencySymbol, setBaseCurrencySymbol] = useState("");
  const [targetCurrencyId, setTargetCurrencyId] = useState(1);

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };
  const handleBaseCurrencyChange = (event: any) => {
    setBaseCurrencyId(event.target.value);
  };

  const handleTargetCurrencyChange = (event: any) => {
    setTargetCurrencyId(event.target.value);
  };

  const switchCurrencies = () => {
    const prevBaseCurrencyId = baseCurrencyId;
    setBaseCurrencyId(targetCurrencyId);
    setTargetCurrencyId(prevBaseCurrencyId);
  };
  const [result, setResult] = useState(0);

  useEffect(() => {
    const baseCurrency = cryptocurrencyOptions.find(
      (currency) => currency.id == baseCurrencyId
    );
    const baseCurrencyValue = baseCurrency?.values?.USD.price;
    if (baseCurrencyValue) {
      //TODO bigint issue!
      const result = baseCurrencyValue * amount;
      setResult(Number(result));
      setBaseCurrencySymbol(baseCurrency?.symbol);
    }
  }, [amount, baseCurrencyId]); // add targetCurrencyId when we have more than 1 target currency

  return (
    <div>
      <Link href="/"> Back to homepage</Link>
      Amount
      <input value={amount} type="number" onChange={handleAmountChange}></input>
      <CustomSelect
        options={cryptocurrencyOptions}
        handleChange={handleBaseCurrencyChange}
      />
      <button onClick={switchCurrencies}>Switch</button>
      <CustomSelect
        options={currencyOptions}
        handleChange={handleTargetCurrencyChange}
      />
      <span>
        {amount} {baseCurrencySymbol} = {result} USD
      </span>
    </div>
  );
};

export default Converter;
