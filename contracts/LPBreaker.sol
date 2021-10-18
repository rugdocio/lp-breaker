// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

interface IUniswapV2Pair {
    function transferFrom(address from, address to, uint value) external returns (bool);
    function burn(address to) external returns (uint amount0, uint amount1);
    function balanceOf(address owner) external view returns (uint);
}

contract LPBreaker {
    function breakLP(IUniswapV2Pair pair) external {
        pair.transferFrom(msg.sender, address(pair), pair.balanceOf(msg.sender));
        pair.burn(msg.sender);
    }
}