module.exports = {
  //networks key connected to ganache(talking to the local blockchain)
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

//updated using the following url https://github.com/shingikamwendo/eth-todo-list/blob/master/truffle-config.js