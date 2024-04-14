import { AuthContext, MetamaskConnect, walletConnect } from "lync-wallet-sdk";
import { useContext } from "react";

function App() {
  const { connectedChainId, provider, walletAddress } = useContext(AuthContext);
  console.log(connectedChainId, provider, walletAddress);
  return (
    <>
      {/* Create your custom button and use walletConnect function (pass chain hex in  walletConnect function)*/}
      {/* Example */}
      {/* <button onClick={() => walletConnect("0x13881")}>Connect Wallet</button> */}
      <MetamaskConnect chainId={"0x13881"} />
    </>
  );
}

export default App;
