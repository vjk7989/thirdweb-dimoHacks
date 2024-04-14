import { ethers } from "ethers";
import React, { createContext, useEffect, useState } from "react";
import switchNetwork from "./switchNetwork";
export const AuthContext = createContext();
export function AuthContextProvider({ children, chainToConnect }) {
  const [walletAddress, setAddress] = useState(undefined);
  const [provider, setProvider] = useState(null);
  const [connectedChainId, setConnectedChainId] = useState(chainToConnect);
  if (!chainToConnect) {
    console.log("ChainToConnect Is Required In AuthContextProvider");
    return;
  }
  useEffect(() => {
    loadWeb3();
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async function () {
        window.location.reload();
      });
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async function () {
        window.location.reload();
      });
    }
  }, []);

  const loadWeb3 = async () => {
    try {
      const prov = new ethers.BrowserProvider(window.ethereum);
      setProvider(prov);
      const network = await prov.getNetwork();
      const chainId = Number(network.chainId);
      if (chainId) {
        const chainHex = chainId.toString(16);
        const chainIdHex = "0x" + chainHex.toLowerCase();
        if (chainIdHex != connectedChainId) {
          await switchNetwork(window.ethereum, connectedChainId);
          const newProvider = new ethers.BrowserProvider(window.ethereum);
          setProvider(newProvider);
          return;
        }
      }

      let connectedAccounts = window.ethereum._state.accounts;
      if (connectedAccounts.length > 0) {
        const chainHex = chainId.toString(16);
        const chainIdHex = "0x" + chainHex.toLowerCase();
        setAddress(connectedAccounts[0]);
        setConnectedChainId(chainIdHex);
      }
    } catch (err) {
      console.log(err);
      // toast.error(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ connectedChainId, provider, walletAddress }}>
      {children}
    </AuthContext.Provider>
  );
}
