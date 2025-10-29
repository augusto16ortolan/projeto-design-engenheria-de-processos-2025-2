import Home from "./src/pages/Home";
import { ThemeProvider } from "./src/context/ThemeProvider";
import { CurrencyProvider } from "./src/context/CurrencyProvider";

export default function App() {
  return (
    <CurrencyProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </CurrencyProvider>
  );
}
