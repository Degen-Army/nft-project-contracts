// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftContract is ERC721, Ownable {
    string baseURI;

    constructor() ERC721("NftContract", "NFT") {

    }

    function safeMint(address to, uint256 tokenId) public  {
        _safeMint(to, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _baseTokenUri) public onlyOwner {
        _setBaseURI(_baseTokenUri);
    }

    function _setBaseURI(string memory _baseTokenUri) internal {
        baseURI = _baseTokenUri;
    }

    function baseTokenURI() public view returns (string memory) {
        return _baseURI();
    }
}
