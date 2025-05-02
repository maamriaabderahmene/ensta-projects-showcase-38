
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./hooks/use-theme.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { Toaster as SonnerToaster } from "./components/ui/sonner.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <Toaster />
        <SonnerToaster />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
