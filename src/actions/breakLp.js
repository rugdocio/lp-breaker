import { notification } from "antd"
import { getDefaultGasPrice, getGasPrice, getLpBreaker } from "../utils/contractHelper"

const breakLp = (web3, chainId, lp) => {
    return async () => {
        try {
            let gasPrice = getDefaultGasPrice(web3, chainId);
            try {
                gasPrice = await getGasPrice(web3);
            } catch {}
            const lpBreaker = getLpBreaker(web3, chainId)
            const tx = await lpBreaker.methods.breakLP(lp).send({
                from: web3.currentProvider.selectedAddress,
                gasPrice: gasPrice,
            })
            console.log("executed " + tx)

            notification.open({
                message: 'Transaction Succeeded'
            })
            return tx
        } catch (e) {
            console.error(e)
            let errormsg = e.data
            notification.open({
                message: 'Transaction failed',
                description: errormsg

            })
        }
    }
}
export default breakLp