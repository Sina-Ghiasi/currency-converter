import { useState } from "react";
import { loadExchangeRates, saveExchangeRates } from "../lib/currency";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Settings() {
  const [exchangeRates, setExchangeRates] = useState(loadExchangeRates());
  const navigate = useNavigate();

  const handleChange = (currency: string, value: number) => {
    if (currency !== "USD" && !isNaN(value)) {
      setExchangeRates((prev) => ({ ...prev, [currency]: value }));
    }
  };
  const handleCancel = () => navigate("/");

  const handleSave = () => {
    saveExchangeRates(exchangeRates);
    toast.success("نرخ تبدیل‌ها با موفقیت ذخیره شد!");
    navigate("/");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-6">تنظیمات</h1>
      <h3 className="text-lg font-semibold mb-2">نرخ های تبدیل</h3>
      <p className="text-sm text-gray-500 mb-4">
        تمام محاسبات بر اساس دلار به‌ عنوان نرخ پایه انجام می‌شود؛ بنابراین
        مقدار USD ثابت و برابر ۱ است و برای سایر ارزها باید نرخ‌ ها را نسبت به
        دلار وارد کنید.
      </p>

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
      <div className="flex justify-between mt-4">
        <button className="btn btn-primary" onClick={handleSave}>
          ذخیره
        </button>
        <button className="btn btn-outline" onClick={handleCancel}>
          بازگشت
        </button>
      </div>
    </div>
  );
}
