import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function alterTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, alterTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
