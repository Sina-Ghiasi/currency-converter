import { useState } from "react";
import { loadExchangeRates, saveExchangeRates } from "../lib/currency";

export default function Settings() {
  const [exchangeRates, setExchangeRates] = useState(loadExchangeRates());

  const handleChange = (currency: string, value: number) => {
    if (currency !== "USD" && !isNaN(value)) {
      setExchangeRates((prev) => ({ ...prev, [currency]: value }));
    }
  };

  const handleSave = () => {
    saveExchangeRates(exchangeRates);
    alert("نرخ تبدیل ها با موفقیت ذخیره شد!");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">تنظیمات</h1>
      <div className="flex flex-col gap-4">
        {Object.entries(exchangeRates).map(([currency, rate]) => (
          <div key={currency} className="flex items-center gap-2">
            <span className="w-24">{currency}</span>
            <input
              className="input flex-1"
              type="number"
              value={currency === "USD" ? 1 : rate}
              onChange={(e) => handleChange(currency, e.target.valueAsNumber)}
              disabled={currency === "USD"}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-4" onClick={handleSave}>
        ذخیره
      </button>
    </div>
  );
}
