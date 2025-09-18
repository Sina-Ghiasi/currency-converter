import { ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ConverterForm({
  baseCurrency,
  targetCurrency,
  baseAmount,
  targetAmount,
  options,
  onBaseChange,
  onTargetChange,
  onBaseAmountChange,
  onTargetAmountChange,
  onSwap,
}: {
  baseCurrency: string;
  targetCurrency: string;
  baseAmount: number;
  targetAmount: number;
  options: string[];
  onBaseChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onBaseAmountChange: (value: number) => void;
  onTargetAmountChange: (value: number) => void;
  onSwap: () => void;
}) {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-3">
          <select
            className="select w-full"
            value={baseCurrency}
            onChange={(e) => onBaseChange(e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <input
            className="input w-full"
            type="number"
            value={baseAmount}
            onChange={(e) => onBaseAmountChange(e.target.valueAsNumber)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <select
            className="select w-full"
            value={targetCurrency}
            onChange={(e) => onTargetChange(e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <input
            className="input w-full"
            type="number"
            value={targetAmount}
            onChange={(e) => onTargetAmountChange(e.target.valueAsNumber)}
          />
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button className="btn" onClick={onSwap}>
          <ArrowLeftRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <Link to="/settings" className="link link-primary link-hover">
          رفتن به تنظیمات
        </Link>
      </div>
    </div>
  );
}
