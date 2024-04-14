import React, { useContext } from "react";

import { AuthContext } from "../AuthContext";
import { walletConnect } from "../ConnectWallet";
import "./Homepage.css";
import { MetamaskSVG } from "./MetamaskSVG";

function MetamaskConnect({ chainId }) {
  const { walletAddress } = useContext(AuthContext);
  if (!chainId) {
    console.log("ChainId is required to connect wallet");
    return;
  }
  return (
    <>
      <main class="page">
        <span class="page-logo metamask-logo">
          <MetamaskSVG />
        </span>
        <h1 class="page-heading">Welcome to Metamask Wallet SDK</h1>
        <span class="page-msg">
          We are happy to see you here. Time to go to the moon.
        </span>
        {!walletAddress ? (
          <button
            class="connect-action-btn"
            onClick={() => walletConnect(chainId)}
          >
            Connect Metamask
          </button>
        ) : null}
        {walletAddress ? (
          <span class="wallet-address-display">{walletAddress}</span>
        ) : null}
      </main>
      <footer class="page-footer">
        Powered By -
        <a
          href="https://www.lync.world/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lync
        </a>
      </footer>
    </>
  );
}

export default MetamaskConnect;
