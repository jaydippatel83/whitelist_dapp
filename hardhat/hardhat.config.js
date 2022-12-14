require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
 
const QUICKNODE = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.QUICKNODE_HTTP_URL}` ;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE,
      accounts: [PRIVATE_KEY],
    },
  },
};