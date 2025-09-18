import { BadgeDollarSign, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-100 shadow-md justify-between px-4">
      <Link to="/" className="flex items-center hover:text-primary">
        <BadgeDollarSign className="w-5 h-5" />
        <span className="text-xl p-2">مبدل ارز</span>
      </Link>

      <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
        {theme === "light" ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
