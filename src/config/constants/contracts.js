// list of contracts
// Fetcher: Helper contract that is essential for a chain to work. It fetches all the pool data and returns it in a single call
const contracts = {
  lpBreaker: {
    25: "0xa4c0d8eEed7928b61B1eC3Be42E5Caf0B8E3aC5C", // CRO
    321: "0x43bEa134Ce66fC4cf90d3afA4c2eBCD0aC2a1D43", // KCC
    137: "0x9ad44b90415E2e1f4A37c7f7e2554ADeB2bad001", // Polygon
    56: "0xC4833E1392966Df2E00d9e3Db8949749AEe6fB26", // BSC
    250: "0x79533174aaD5bc99a34C583107cEC821bCF3B792", // FTM
    1285: "0x43bEa134Ce66fC4cf90d3afA4c2eBCD0aC2a1D43", // MOONRIVER
    4689: "0x0b7161d5dd0C85e8f072b7de076012CC9355F82C", // IOTEX
    43114: "0x058Fb4e1cC479cCf4D9575d067880096BaC9bb97", // AVAX
    42220: "0xC03B5b8F0A3969BbA580D5c6B939109451E66F4d", // CELO
    1666600000: "0x17c01Db12958bADe0f0E2767df6f4127c12D6990", // HARMONY shard zero
  },
};

export default contracts
