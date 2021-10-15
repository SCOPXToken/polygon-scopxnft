require("@nomiclabs/hardhat-waffle");
 const privateKey = "";

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
