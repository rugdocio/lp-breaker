import { notification } from "antd"
import { getDefaultGasPrice, getGasPrice, getTokenContract } from "../utils/contractHelper"
import { getLpBreakerAddress } from "../utils/addressHelper"

const approve = (web3, chainId, tokenAddress) => {
    return async () => {
        try {
           let address = getLpBreakerAddress(chainId, web3);
            let gasPrice = getDefaultGasPrice(web3, chainId);
            try {
                gasPrice = await getGasPrice(web3);
            } catch {}
            let config = {gasPrice: "0"}
            if (chainId === 1285) {
              config = {}
            }
            const tokenContract = getTokenContract(web3, chainId, tokenAddress)
            const amount = await tokenContract.methods.balanceOf(web3.currentProvider.selectedAddress).call(config)
            console.log(amount)
            const tx = await tokenContract.methods.approve(address, new web3.utils.BN(amount)).send({
                from: web3.currentProvider.selectedAddress,
                gasPrice: gasPrice
            })
            console.log("executed " + tx)

            notification.open({
                message: 'Transaction Succeeded'
            })
            return true;
        } catch (e) {
            console.error(e)
            let errormsg = e.data
            notification.open({
                message: 'Transaction failed: Did you provide the LP token?',
                description: errormsg

            })
            return false;
        }
    }
}
export default approve