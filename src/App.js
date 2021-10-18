import "./App.css";
import { Divider, Spin } from 'antd';
import LPInput from "./components/LPInput";
import useWeb3 from "./hooks/useWeb3";
import Web3Context from "./contexts/web3Context";
import approve from "./actions/approve";
import breakLp from "./actions/breakLp";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const { web3, chainId } = useWeb3();

  const onStart = async (lp) => {
    setLoading(true);
    const doApprove = approve(
      web3,
      chainId,
      lp
    );
    const doBreak = breakLp(
      web3,
      chainId,
      lp
    );
    doApprove().then((approved) => {
      if(approved){
      doBreak().then(() => {
        setLoading(false);
      });
    }else {
      setLoading(false);
    }
    });
  };

  return (
    <Web3Context.Provider value={{ web3, chainId }} >
      <div className="App">
        <LPInput onStart={onStart} disabled={loading}/>
        <Divider/>
        {loading ? <div><Spin /></div> : <></>}

        <h2>The LP breaker is experimental and provided as-is</h2>
        <h2>Use it as a last resort</h2>
      </div>
    </Web3Context.Provider>
  );
}

export default App;
