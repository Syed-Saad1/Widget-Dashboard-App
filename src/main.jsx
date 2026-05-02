import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WidgetContextProvider } from "./context/WidgetContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WidgetContextProvider>
      <App />
    </WidgetContextProvider>
  </StrictMode>,
);
