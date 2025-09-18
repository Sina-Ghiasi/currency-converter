import type { ExchangeRates } from "../types/currency";

const DEFAULT_RATES: Record<string, number> = {
  USD: 1, // base currency
  IRR: 1000000, // 1 USD = 1,000,000 IRR
  EUR: 0.85, // 1 USD = 0.85 EUR
};

export function loadExchangeRates(): ExchangeRates {
  try {
    const stored = localStorage.getItem("ExchangeRates");
    return stored ? JSON.parse(stored) : DEFAULT_RATES;
  } catch {
    // TODO: Needs additional error handling
    return DEFAULT_RATES;
  }
}

export function saveExchangeRates(rates: ExchangeRates) {
  try {
    localStorage.setItem("ExchangeRates", JSON.stringify(rates));
  } catch {
    // TODO: Needs additional error handling
  }
}

export function convert(
  amount: number,
  from: string,
  to: string,
  rates: ExchangeRates
): number {
  if (from === to) return amount;
  const fromRate = rates[from];
  const toRate = rates[to];
  if (fromRate === undefined || toRate === undefined) return NaN;
  return parseFloat(((amount / fromRate) * toRate).toFixed(2));
}
