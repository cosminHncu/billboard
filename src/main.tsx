import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BillboardCtxProvider } from "./context/BillboardContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BillboardCtxProvider>
      <App />
    </BillboardCtxProvider>
  </React.StrictMode>
);
