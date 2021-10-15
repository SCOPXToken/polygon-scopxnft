require("@nomiclabs/hardhat-waffle");
 const privateKey = "6ced5e6142cd403903a25f4ac26f060354f92677a9ca2e7a9eae9641ca06b390";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mainnet: {
       url: `https://rpc-mainnet.matic.network`,
       accounts: [privateKey]
    }
    
  },
  solidity: {
    version: "0.8.4",
    
      
    }
  
};