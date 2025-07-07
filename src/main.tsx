import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme.ts";
import "./index.css";
import { LiffProvider } from "./hooks/useLiff";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiffProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LiffProvider>
  </StrictMode>
);
