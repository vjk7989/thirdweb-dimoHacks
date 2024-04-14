import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "lync-wallet-sdk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider chainToConnect={"0x13881"}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
