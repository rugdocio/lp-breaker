// Utility methods to get explorer links

export const explorers = {
      25: "https://cronos.crypto.org/explorer",
      137: "https://polygonscan.com",
      56: "https://bscscan.com",
      321: "https://explorer.kcc.io/en",
      250: "https://ftmscan.com",
      1285: "https://blockscout.moonriver.moonbeam.network",
      4689: "https://v2.iotexscan.io",
      43114: "https://avascan.info/blockchain/c",
      42220: "https://explorer.celo.org",
      1666600000: "https://explorer.harmony.one",
      1284: "https://blockscout.moonbeam.network",
      25: "https://cronoscan.com",
      2000: "https://explorer.dogechain.dog",
      10001: "https://mainnet.ethwscan.com"
  };
export const getAddressLink = (chainId, address) => {
    return explorers[chainId] + "/address/" + address
}
