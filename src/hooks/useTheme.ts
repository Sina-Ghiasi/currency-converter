import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("useTheme must be used inside ThemeProvider");
  return themeContext;
}
