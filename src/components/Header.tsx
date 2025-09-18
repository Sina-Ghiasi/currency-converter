import { BadgeDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md justify-center">
      <Link to="/" className="flex items-center hover:text-primary">
        <BadgeDollarSign className="w-5 h-5" />
        <span className="text-xl p-2">مبدل ارز</span>
      </Link>
    </div>
  );
}
