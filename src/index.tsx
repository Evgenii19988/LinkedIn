import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./app/styles/tailwind.css";
import WithProviders from "./app/providers";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <WithProviders>
    <App />
  </WithProviders>
);
