async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const InitToken = await ethers.getContractFactory("InitToken");
  const initToken = await InitToken.deploy(
    "INIT Token",
    "INIT", 
    "1000000000000000000000000000" // 1bln tokens in wei
  );

  console.log("INIT Token address:", initToken.address);

  const IdeaToken = await ethers.getContractFactory("IdeaToken");
  const ideaToken = await IdeaToken.deploy(
    "Inite IDEA Token",
    "IDEA", 
    "100000000000000000000000000" // 100mln tokens
  );

  console.log("IDEA Token address:", ideaToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
