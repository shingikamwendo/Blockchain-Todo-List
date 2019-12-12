//changing the blockchain state
//files are numbered in order to tell truffle what order to run in
var TodoList = artifacts.require("./TodoList.sol");

module.exports = function(deployer) {
    deployer.deploy(TodoList);
};
