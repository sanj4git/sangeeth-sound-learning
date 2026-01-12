import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { SettingsProvider, useSettings } from "./context/SettingsContext.jsx";

function Root() {
  const { brightness } = useSettings();

  return (
    <div
      style={{
        filter: `brightness(${brightness})`,
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <App />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsProvider>
      <Root />
    </SettingsProvider>
  </StrictMode>
);
