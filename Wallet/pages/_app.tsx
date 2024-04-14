import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, localWallet, metamaskWallet, smartWallet, walletConnect } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig ={
    factoryAddress : "0xb57849cb4fd1C2033A8E659B0C5795ED40D52AcB",
    gasless:true,
  }
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        embeddedWallet(),
        smartWallet(metamaskWallet(),smartWalletConfig),
        smartWallet(walletConnect(),smartWalletConfig),
        smartWallet(coinbaseWallet(),smartWalletConfig),
        localWallet(),

      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
