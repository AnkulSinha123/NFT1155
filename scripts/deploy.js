
async function main() {
  const NFT1155 = await ethers.getContractFactory("NFT1155");
  const nft1155 = await NFT1155.deploy();
  console.log("NFT1155 address:", nft1155.address);
}

main()
.then (() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
