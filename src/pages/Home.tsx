import { useReducer } from "react";
import { ConverterForm } from "../components/ConverterForm";
import { loadExchangeRates, convert } from "../lib/currency";

type State = {
  baseCurrency: string;
  targetCurrency: string;
  baseAmount: number;
  targetAmount: number;
};

type Action =
  | { type: "SET_BASE_CURRENCY"; payload: string }
  | { type: "SET_TARGET_CURRENCY"; payload: string }
  | { type: "SET_BASE_AMOUNT"; payload: number }
  | { type: "SET_TARGET_AMOUNT"; payload: number }
  | { type: "SWAP" };

const reducer =
  (rates: Record<string, number>) =>
  (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_BASE_CURRENCY": {
        const newBase = action.payload;
        const targetAmount = convert(
          state.baseAmount,
          newBase,
          state.targetCurrency,
          rates
        );
        return {
          ...state,
          baseCurrency: newBase,
          targetAmount: isNaN(targetAmount) ? 0 : targetAmount,
        };
      }

      case "SET_TARGET_CURRENCY": {
        const newTarget = action.payload;
        const targetAmount = convert(
          state.baseAmount,
          state.baseCurrency,
          newTarget,
          rates
        );
        return {
          ...state,
          targetCurrency: newTarget,
          targetAmount: isNaN(targetAmount) ? 0 : targetAmount,
        };
      }

      case "SET_BASE_AMOUNT": {
        const targetAmount = convert(
          action.payload,
          state.baseCurrency,
          state.targetCurrency,
          rates
        );
        return {
          ...state,
          baseAmount: action.payload,
          targetAmount: isNaN(targetAmount) ? 0 : targetAmount,
        };
      }

      case "SET_TARGET_AMOUNT": {
        const baseAmount = convert(
          action.payload,
          state.targetCurrency,
          state.baseCurrency,
          rates
        );
        return {
          ...state,
          targetAmount: action.payload,
          baseAmount: isNaN(baseAmount) ? 0 : baseAmount,
        };
      }

      case "SWAP": {
        return {
          baseCurrency: state.targetCurrency,
          targetCurrency: state.baseCurrency,
          baseAmount: state.targetAmount,
          targetAmount: state.baseAmount,
        };
      }

      default:
        return state;
    }
  };

export default function Home() {
  const rates = loadExchangeRates();

  const [state, dispatch] = useReducer(reducer(rates), {
    baseCurrency: "USD",
    targetCurrency: "IRR",
    baseAmount: 0,
    targetAmount: 0,
  });

  const currencies = Array.from(
    new Set(Object.keys(rates).flatMap((key) => key.split("-")))
  );

  return (
    <ConverterForm
      baseCurrency={state.baseCurrency}
      targetCurrency={state.targetCurrency}
      baseAmount={state.baseAmount}
      targetAmount={state.targetAmount}
      options={currencies}
      onBaseChange={(v) => dispatch({ type: "SET_BASE_CURRENCY", payload: v })}
      onTargetChange={(v) =>
        dispatch({ type: "SET_TARGET_CURRENCY", payload: v })
      }
      onBaseAmountChange={(v) =>
        dispatch({ type: "SET_BASE_AMOUNT", payload: v })
      }
      onTargetAmountChange={(v) =>
        dispatch({ type: "SET_TARGET_AMOUNT", payload: v })
      }
      onSwap={() => dispatch({ type: "SWAP" })}
    />
  );
}
