// Replace these values with your deployed contract address and ABI
const contractAddress = "0x..."; 
const contractABI = [...];

// Connect to Ethereum using web3.js
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Create a new poll
document.getElementById("createPollForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const ipfsHash = document.getElementById("ipfsHash").value;
    const optionCount = document.getElementById("optionCount").value;

    const accounts = await web3.eth.getAccounts();
    const creator = accounts[0];

    await contract.methods.createPoll(title, ipfsHash, optionCount).send({ from: creator });
});

// Vote in a poll
document.getElementById("voteForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const pollId = document.getElementById("pollId").value;
    const optionIndex = document.getElementById("optionIndex").value;

    const accounts = await web3.eth.getAccounts();
    const voter = accounts[0];

    await contract.methods.vote(pollId, optionIndex).send({ from: voter });
});
