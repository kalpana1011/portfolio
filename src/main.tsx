import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import i18n from "./i18n";
import { ThemeProvider } from "./theme/ThemeProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const updateLang = (language: string) => {
  document.documentElement.lang = language;
};

updateLang(i18n.language);
i18n.on("languageChanged", updateLang);

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
