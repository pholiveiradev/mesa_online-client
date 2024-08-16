import { App } from "./App.tsx";
import "./styles/global.css";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
