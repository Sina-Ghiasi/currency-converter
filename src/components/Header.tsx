import { BadgeDollarSign } from "lucide-react";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md justify-center">
      <BadgeDollarSign className="w-5 h-5" />
      <span className="text-xl p-2">مبدل ارز</span>
    </div>
  );
}
