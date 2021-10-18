import { useContext, useMemo } from "react";
import Web3Context from "../contexts/web3Context";
import {
  getLpBreaker,
} from "../utils/contractHelper";

export const useLpBreaker = () => {
  const { web3, chainId } = useContext(Web3Context);
  return useMemo(() => getLpBreaker(web3, chainId), [web3, chainId]);
};