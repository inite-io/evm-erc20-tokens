// contracts/InitToken.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IdeaToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
