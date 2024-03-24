// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

contract FreelanceContract {
    address public freelancer;
    address public client;
    uint256 public deadline;
    uint256 public compensation;
    string public projectDescription;
    bool public projectCompleted;

    constructor(
        address _client,
        uint256 _deadline,
        uint256 _compensation,
        string memory _projectDescription
    ) {
        freelancer = msg.sender;
        client = _client;
        deadline = _deadline;
        compensation = _compensation;
        projectDescription = _projectDescription;
        projectCompleted = false;
    }

    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only freelancer can call this function");
        _;
    }

    modifier onlyClient() {
        require(msg.sender == client, "Only client can call this function");
        _;
    }

    function completeProject() external onlyFreelancer {
        require(block.timestamp <= deadline, "Deadline has passed");
        projectCompleted = true;
    }

    function withdrawCompensation() external onlyClient {
        require(projectCompleted, "Project not completed yet");
        payable(client).transfer(compensation);
    }
}
