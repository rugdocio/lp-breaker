import { notification } from "antd"
import { getTokenContract } from "../utils/contractHelper"

const getName = (web3, chainId, tokenAddress) => {
    return async () => {
        try {
            let config = {gasPrice: "0"}
            if (chainId === 1285) {
              config = {}
            }
            const tokenContract = getTokenContract(web3, chainId, tokenAddress)
            const token0 = await tokenContract.methods.token0().call(config)
            const token1 = await tokenContract.methods.token1().call(config)
            try {
                const token0Contract = getTokenContract(web3, chainId, token0)
                const token1Contract = getTokenContract(web3, chainId, token1) 
                const symbol0 = await token0Contract.methods.symbol().call(config)
                const symbol1 = await token1Contract.methods.symbol().call(config)
                return [true, symbol0 + "/" + symbol1]
            } catch (error) {
                return [true, "Unknown LP"]
            }
        } catch (e) {
            console.error(e)
            let errormsg = e.data
            notification.open({
                message: 'Transaction failed: Did you provide the LP token?',
                description: errormsg

            })
            return [false, ""];
        }
    }
}
export default getName