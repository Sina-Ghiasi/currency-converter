import { useState, useEffect } from "react";
import { ConverterForm } from "../components/ConverterForm";
import { loadExchangeRates, convert } from "../lib/currency";

export default function Home() {
  const rates = useState(loadExchangeRates())[0];
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("IRR");
  const [baseAmount, setBaseAmount] = useState(1);
  const [targetAmount, setTargetAmount] = useState(0);

  const currencies = Array.from(
    new Set(Object.keys(rates).flatMap((key) => key.split("-")))
  );

  useEffect(() => {
    const result = convert(baseAmount, baseCurrency, targetCurrency, rates);
    if (!isNaN(result)) setTargetAmount(result);
  }, [baseAmount, baseCurrency, targetCurrency, rates]);

  const handleAmountToChange = (val: number) => {
    setTargetAmount(val);
    const result = convert(val, targetCurrency, baseCurrency, rates);
    if (!isNaN(result)) setBaseAmount(result);
  };

  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);

    setBaseAmount(targetAmount);
    setTargetAmount(baseAmount);
  };

  return (
    <ConverterForm
      baseCurrency={baseCurrency}
      targetCurrency={targetCurrency}
      baseAmount={baseAmount}
      targetAmount={targetAmount}
      options={currencies}
      onBaseChange={setBaseCurrency}
      onTargetChange={setTargetCurrency}
      onBaseAmountChange={setBaseAmount}
      onTargetAmountChange={handleAmountToChange}
      onSwap={handleSwap}
    />
  );
}
