require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/_oBEYHeva_zhfSrg7PZw006K-Td0erH4',
      accounts:['d26902435e59dba493803ced7e20f4c85de052154e33e663eca09d743f06467b']
    }

  }
};
