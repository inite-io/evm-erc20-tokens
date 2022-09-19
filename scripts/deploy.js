async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const InitToken = await ethers.getContractFactory("InitToken");
  const initToken = await InitToken.deploy(
    "INIT Token",
    "INIT", 
    // "0" // 0 tokens - how it should be
    "1000000000" // 1B tokens - to be able to send to other people for testing
  );

  console.log("INIT Token address:", initToken.address);

  const IdeaToken = await ethers.getContractFactory("IdeaToken");
  const ideaToken = await IdeaToken.deploy(
    "IDEA Token",
    "IDEA", 
    // "0" // 0 tokens
    "100000000" // 100m tokens - to be able to send to other people for testing
);

  console.log("IDEA Token address:", ideaToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
