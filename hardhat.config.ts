import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

export default {
  // ...rest of the config...
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london"
    }
  },
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io/" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
      apiKey: {
        scrollSepolia: "1HQWHDAUSJ3N9X61AJDE7DECJ51MDVEXY7",
      },
      customChains: [
        {
          network: 'scrollSepolia',
          chainId: 534351,
          urls: {
            apiURL: 'https://api-sepolia.scrollscan.com/api',
            browserURL: 'https://sepolia.scrollscan.com/',
          },
        },
      ],
    },
  paths: {
    sources: "./contracts"
  }
};

export default config;
