# Decentralized Identity Verification System (DIVS)

This project is a basic implementation of a decentralized identity verification system using Ethereum smart contracts, IPFS for decentralized storage, and a front-end built with React.js. It demonstrates how to store and retrieve user information in a decentralized manner.

## Project Outline

1. **Blockchain Platform**: Ethereum
2. **Smart Contracts**: Written in Solidity
3. **Front-End**: Built using React.js
4. **Back-End**: Node.js with Express
5. **Storage**: IPFS for decentralized storage
6. **Cryptographic Tools**: Libraries for handling cryptographic operations

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Truffle](https://www.trufflesuite.com/)
- [Ganache](https://www.trufflesuite.com/ganache)
- [IPFS](https://ipfs.io/)

## Setup

### 1. Blockchain Platform and Smart Contracts

#### Install Dependencies
```bash
npm install -g truffle
npm install -g ganache-cli

2. Back-End Setup
Initialize Node.js Project

mkdir backend
cd backend
npm init -y
npm install express web3

3. Front-End Setup
Initialize React Project

npx create-react-app frontend
cd frontend
npm install 

Final Steps
1.Run Ganache: ganache-cli
2.Deploy Smart Contracts: truffle migrate
3.Start IPFS: ipfs daemon
4.Start Backend: node server.js
5.Start Frontend: npm start (from the frontend directory)

Future Enhancements
1.Implement more advanced security and privacy features.
2.Add user authentication and access control.
3.Enhance the UI for better user experience.
4.Optimize IPFS usage and data retrieval.

Contributing
Contributions are welcome! Please fork the repository and submit pull requests.

License
This project is licensed under the MIT License.
