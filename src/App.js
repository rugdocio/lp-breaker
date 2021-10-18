import "./App.css";
import { Divider, Spin } from 'antd';
import LPInput from "./components/LPInput";
import useWeb3 from "./hooks/useWeb3";
import Web3Context from "./contexts/web3Context";
import approve from "./actions/approve";
import breakLp from "./actions/breakLp";
import { useState } from "react";
import getName from "./actions/getName";
import { ExperimentOutlined } from '@ant-design/icons';

function App() {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
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
    const doGetName = getName(
      web3,
      chainId,
      lp
    )
    doGetName().then(([res, name])=> {
      if (res) {
        setDescription("Breaking " + name + "...")
        doApprove().then((approved) => {
          if (approved) {
            doBreak().then(() => {
              setDescription("");
              setLoading(false);
            });
          } else {
            setDescription("");
            setLoading(false);
          }
        });
      } else {
        setDescription("");
        setLoading(false);
      }
    });
  };

  return (
    <Web3Context.Provider value={{ web3, chainId }} >
      <div className="App">
        <LPInput onStart={onStart} disabled={loading} />
        <Divider />

        {description === ""? <h2 style={{ color: "rgb(123, 208, 221)" }}>Enter an LP address to break it back into its components</h2>: <h2 style={{ color: "rgb(123, 208, 221)" }}>{description}</h2>}
        {loading ? <div><Spin /></div> : <></>}
        <ExperimentOutlined style={{ fontSize: 70, marginBottom:"40px", color: "#6d84a2" }} />
        <h3 style={{ color: "#6d84a2" }}>The LP breaker is experimental and provided as-is</h3>
        <h3 style={{ color: "#6d84a2" }}>Use it as a last resort</h3>
        <p/>
        <p  style={{ color: "#6d84a2" }}>Make sure that you're connected to the correct network (Supported: BSC, Polygon, Avalanche, Fantom, IOTEX, Moonriver, Celo, Harmony ONE and KCC)</p>
      </div>
    </Web3Context.Provider>
  );
}

export default App;
