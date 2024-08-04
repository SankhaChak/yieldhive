import { prisma } from "./client";

// PS: The seed strategy has been taken from the STRKFarm website
async function main() {
  console.log("===========Start seeding=============");
  const strategy = await prisma.strategy.create({
    data: {
      name: "USDC Sensei",
      description:
        "Deposit your USDC to automatically loop your funds between zkLend and Nostra to create a delta neutral position. This strategy is designed to maximize your yield on USDC. Your position is automatically adjusted periodically to maintain a healthy health factor. You receive a NFT as representation for your stake on STRKFarm. You can withdraw anytime by redeeming your NFT for USDC.",
      apy: "23.54",
      multiplier: "1.85",
      slug: "usdc-sensei",
      image_url: "https://www.strkfarm.xyz/zklend/icons/tokens/usdc.svg",
      price_feeds: [],
      protocols: {
        create: [
          {
            name: "zkLend",
            image_url:
              "https://static-assets-8zct.onrender.com/integrations/zkLend/logo_dark.png",
          },
          {
            name: "Nostra Money Markets",
            image_url:
              "https://static-assets-8zct.onrender.com/integrations/nostra/logo_dark.jpg",
          },
        ],
      },
      tokens: {
        create: [
          {
            name: "USDC",
            logo_url: "https://www.strkfarm.xyz/zklend/icons/tokens/usdc.svg",
          },
          {
            name: "ETH",
            logo_url: "https://www.strkfarm.xyz/zklend/icons/tokens/eth.svg",
          },
          {
            name: "STRK",
            logo_url: "https://www.strkfarm.xyz/zklend/icons/tokens/strk.svg",
          },
        ],
      },
    },
  });
  console.log("🚀 ~ file: seed.ts:46 ~ main ~ strategy:", strategy);
  console.log("===========End seeding=============");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
