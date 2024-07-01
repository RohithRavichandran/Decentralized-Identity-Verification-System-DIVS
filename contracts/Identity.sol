// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct User {
        string name;
        uint age;
        string email;
        string ipfsHash; // IPFS hash of the user's additional data
    }

    mapping(address => User) private users;

    function setUser(string memory _name, uint _age, string memory _email, string memory _ipfsHash) public {
        users[msg.sender] = User(_name, _age, _email, _ipfsHash);
    }

    function getUser(address _user) public view returns (string memory, uint, string memory, string memory) {
        User memory user = users[_user];
        return (user.name, user.age, user.email, user.ipfsHash);
    }
}
