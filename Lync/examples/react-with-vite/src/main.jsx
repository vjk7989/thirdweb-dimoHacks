import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "lync-wallet-sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider chainToConnect={"0x13881"}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
