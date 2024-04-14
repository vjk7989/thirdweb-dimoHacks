import { AuthContext, MetamaskConnect, walletConnect } from "lync-wallet-sdk";
import { useContext } from "react";

function App() {
  const { connectedChainId, provider, walletAddress } = useContext(AuthContext);
  console.log(connectedChainId, provider, walletAddress);
  return (
    <>
      {/* Uncomment the below line of code to use the walletConnect on any component */}
      {/* <button onClick={() => walletConnect("0x13881")}>Connect Wallet</button> */}
      <MetamaskConnect chainId={"0x13881"} /> {/* LYNC Wallet Template */}
    </>
  );
}

export default App;
