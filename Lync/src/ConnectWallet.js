import constantsValues from "./constantsValues";
import switchNetwork from "./switchNetwork";

export async function walletConnect(chainToConnect) {
  if (!chainToConnect) {
    console.log("ChainId is required to connect wallet");
    return;
  }
  const { ethereum } = window;
  let currentAccount = null;
  let metamaskProvider;
  if (!ethereum) {
    console.log(
      "You must install Metamask into your browser: https://metamask.io/download.htm"
    );

    return;
  }
  if (window.ethereum.providers === undefined) {
    metamaskProvider = window.ethereum;
  } else {
    metamaskProvider = window.ethereum.providers.find(
      (provider) => provider.isMetaMask
    );
  }
  let chainId = await metamaskProvider.request({ method: "eth_chainId" });
  if (chainId !== chainToConnect) {
    console.log(
      `You are not connected to  ${constantsValues[chainToConnect].ChainName}`
    );

    try {
      await switchNetwork(metamaskProvider, chainToConnect);
    } catch (error) {
      console.log("Please switch your chain first!!");
      return;
    }
    ConnectWallet(metamaskProvider, currentAccount);
  } else {
    ConnectWallet(metamaskProvider, currentAccount, chainId);
  }
}

async function ConnectWallet(metamaskProvider, currentAccount, chainId) {
  let accounts;
  try {
    accounts = await metamaskProvider.request({
      method: "eth_requestAccounts",
    });
  } catch (error) {
    console.log(error);
    return;
  }
  currentAccount = accounts[0];
  console.log("Wallet connected successfully ");
  window.location.reload();
  return currentAccount;
}
