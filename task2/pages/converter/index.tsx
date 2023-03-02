import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSelect from "@/components/UI/CustomSelect";
import useCurrencies from "@/hooks/useCurrencies";
import { CurrencyOption, CurrencyOptions } from "../../types/types";

type SelectProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Converter = ({ label, value, onChange }: SelectProps) => {
  const currencyOptions: CurrencyOptions = useCurrencies();
  const [amount, setAmount] = useState(1);
  const [baseCurrencyId, setBaseCurrencyId] = useState<number>(1);
  const [baseCurrencySymbol, setBaseCurrencySymbol] = useState<string>("BTC");
  const [targetCurrencyId, setTargetCurrencyId] = useState<number>(3);
  const [targetCurrencySymbol, setTargetCurrencySymbol] =
    useState<string>("ETH");

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
    const baseCurrency = currencyOptions.find(
      (currency: CurrencyOption) => currency.id == baseCurrencyId
    );
    const baseCurrencyValue = baseCurrency?.value;

    const targetCurrency = currencyOptions.find(
      (currency: CurrencyOption) => currency.id == targetCurrencyId
    );

    const targetCurrencyValue = targetCurrency?.value;

    if (baseCurrencyValue && targetCurrencyValue) {
      //TODO bigint issue!
      const result = (baseCurrencyValue / targetCurrencyValue) * amount;
      setBaseCurrencySymbol(baseCurrency?.symbol);
      setTargetCurrencySymbol(targetCurrency?.symbol);
      setResult(Number(result));
    }
  }, [amount, baseCurrencyId, targetCurrencyId, currencyOptions]);

  return (
    <div>
      <Link href="/"> Back to homepage</Link>
      Amount
      <input value={amount} type="number" onChange={handleAmountChange}></input>
      <CustomSelect
        selectedOption={baseCurrencyId}
        options={currencyOptions}
        handleChange={handleBaseCurrencyChange}
      />
      <button onClick={switchCurrencies}>Switch</button>
      <CustomSelect
        options={currencyOptions}
        selectedOption={targetCurrencyId}
        handleChange={handleTargetCurrencyChange}
      />
      <span>
        {amount} {baseCurrencySymbol} = {result} {targetCurrencySymbol}
      </span>
    </div>
  );
};

export default Converter;
