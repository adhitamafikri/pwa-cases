import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import "./index.css";
import App from "./App.tsx";

registerSW({
  onNeedRefresh() {
    console.log("Service Worker needs to be refreshed.");
  },
  onOfflineReady() {
    console.log("Service Worker is offline ready.");
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
