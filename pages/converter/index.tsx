import React, { useState, useEffect } from "react";
import CustomSelect from "@/components/UI/CustomSelect/CustomSelect";
import useCurrencies from "@/hooks/useCurrencies";
import { CurrencyOption } from "../../types/types";
import { Wrapper } from "@/styles/styled";
import {
  ConverterWrapper,
  SwitchButton,
  CurrenciesWrapper,
  OutputWrapper,
} from "./styled";
import NavBar from "@/components/UI/NavBar/NavBar";
import CustomInput from "@/components/UI/CustomInput/CustomInput";

const Converter = () => {
  const { currencyOptions } = useCurrencies(false);
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
    if (currencyOptions) {
      const baseCurrency = currencyOptions.find(
        (currency: CurrencyOption) => currency.id == baseCurrencyId
      );
      const baseCurrencyValue = baseCurrency?.value;

      const targetCurrency = currencyOptions.find(
        (currency: CurrencyOption) => currency.id == targetCurrencyId
      );

      const targetCurrencyValue = targetCurrency?.value;

      if (baseCurrencyValue && targetCurrencyValue && amount) {
        let result = (+baseCurrencyValue / +targetCurrencyValue) * amount;
        setBaseCurrencySymbol(baseCurrency?.symbol);
        setTargetCurrencySymbol(targetCurrency?.symbol);
        if (result < 1) {
          result = +result.toFixed(5);
        } else if (result < 1000) {
          result = +result.toFixed(2);
        } else {
          result = Math.floor(result);
        }

        setResult(result);
      }
    }
  }, [amount, baseCurrencyId, targetCurrencyId, currencyOptions]);

  return (
    <Wrapper>
      <NavBar />
      <ConverterWrapper>
        <CustomInput amount={amount} handleAmountChange={handleAmountChange} />

        <CurrenciesWrapper>
          <CustomSelect
            selectedOption={baseCurrencyId}
            options={currencyOptions}
            handleChange={handleBaseCurrencyChange}
          />
          <SwitchButton onClick={switchCurrencies}>Switch</SwitchButton>
          <CustomSelect
            options={currencyOptions}
            selectedOption={targetCurrencyId}
            handleChange={handleTargetCurrencyChange}
          />
        </CurrenciesWrapper>

        {amount > 0 && (
          <OutputWrapper>
            <span>
              {amount} {baseCurrencySymbol}
              {" = "}
              {result} {targetCurrencySymbol}
            </span>
          </OutputWrapper>
        )}
      </ConverterWrapper>
    </Wrapper>
  );
};

export default Converter;
