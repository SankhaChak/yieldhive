import { prisma } from "./client";

// PS: The seed strategy has been taken from the STRKFarm website
async function main() {
  console.log("===========Start seeding=============");
  // await prisma.strategy.createMany({})

  // await prisma.strategy.deleteMany({});
  // await prisma.protocol.deleteMany({});
  // await prisma.token.deleteMany({});
  // await prisma.chain.deleteMany({});

  // const baseChain = await prisma.chain.create({
  //   data: {
  //     name: "Base",
  //     network: "Mainnet",
  //     pyth_contract_address: "0x4896bb51d19a7c7a69e48732580fb628903086ef",
  //     pyth_contract_abi_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/base-pyth.json",
  //   },
  // });

  // const optimismChain = await prisma.chain.create({
  //   data: {
  //     name: "Optimism",
  //     network: "Mainnet",
  //     pyth_contract_abi_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/optimism-pyth.json",
  //     pyth_contract_address: "0xe632d545cbd3a26733f5e90a367660883ebaa09d",
  //   },
  // });

  const modeChain = await prisma.chain.create({
    data: {
      name: "Mode",
      network: "Mainnet",
      pyth_contract_abi_url:
        "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/mode-pyth.json",
      pyth_contract_address: "0x3a3f8f3dabf4f0c9e6f6b7d5d6c3b5f3f2f6c5b3",
    },
  });

  // const aaveProtocol = await prisma.protocol.create({
  //   data: {
  //     name: "Aave",
  //     image_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/aave.svg",
  //   },
  // });
  // const uniswapProtocol = await prisma.protocol.create({
  //   data: {
  //     name: "Uniswap",
  //     image_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/uniswap.svg",
  //   },
  // });
  // const aerodromeProtocol = await prisma.protocol.create({
  //   data: {
  //     name: "Aerodrome",
  //     image_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/aerodrome.svg",
  //   },
  // });

  // const usdcToken = await prisma.token.create({
  //   data: {
  //     name: "USDC",
  //     logo_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/usdc.svg",
  //   },
  // });
  // const cbEthToken = await prisma.token.create({
  //   data: {
  //     name: "cbETH",
  //     logo_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/cbeth.svg",
  //   },
  // });
  // const aeroToken = await prisma.token.create({
  //   data: {
  //     name: "AERO",
  //     logo_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/aerodrome.svg",
  //   },
  // });
  // const wbtcToken = await prisma.token.create({
  //   data: {
  //     name: "wBTC",
  //     logo_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/wbtc.svg",
  //   },
  // });

  // const primeUsdcStrategy = await prisma.strategy.create({
  //   data: {
  //     name: "Prime USDC",
  //     description:
  //       "Deposit USDC into ‘Prime USDC’ for optimized yield across multiple DeFi protocols. This smart contract leverages Aave for lending and borrowing, Aerodrome for liquidity provision, and Uniswap for swaps, using Pyth Network for price feeds. It supplies USDC to Aave, borrows cbETH, then provides USDC-AERO liquidity on Aerodrome. Your stake is represented by ERC4626 shares for easy deposits and withdrawals. The contract periodically harvests gains, reinvests rewards, and rebalances positions. This strategy aims to maximize USDC yield through lending-borrowing differentials, liquidity fees, and market inefficiencies, while managing risks across diversified DeFi positions.",
  //     apy: "58.06",
  //     multiplier: "1.85",
  //     slug: "prime-usdc",
  //     contract_address: "0x452a15dc698440efdf0328d76e306b7d5d4e2027",
  //     abi_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/prime-usdc.json",
  //     price_feeds: [
  //       "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
  //       "0x15ecddd26d49e1a8f1de9376ebebc03916ede873447c1255d2d5891b92ce5717",
  //       "0x9db37f4d5654aad3e37e2e14ffd8d53265fb3026d1d8f91146539eebaa2ef45f",
  //     ],
  //     protocols: {
  //       connect: [
  //         { id: aaveProtocol.id },
  //         { id: uniswapProtocol.id },
  //         { id: aerodromeProtocol.id },
  //       ],
  //     },
  //     tokens: {
  //       connect: [
  //         { id: usdcToken.id },
  //         { id: cbEthToken.id },
  //         { id: aeroToken.id },
  //       ],
  //     },
  //     chain: {
  //       connect: {
  //         id: baseChain.id,
  //       },
  //     },
  //   },
  // });

  // await prisma.step.createMany({
  //   data: [
  //     {
  //       name: "Supply USDC to Aave",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "$100",
  //       protocol_id: aaveProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "5.14",
  //     },
  //     {
  //       name: "Borrow cbETH from Aave",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$70",
  //       protocol_id: aaveProtocol.id,
  //       token_id: cbEthToken.id,
  //       yield: "-2.72",
  //     },
  //     {
  //       name: "Swap half cbETH for USDC on Uniswap",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$35",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: cbEthToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Swap half cbETH for USDC on Uniswap",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$35",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Swap half cbETH for AERO on Uniswap",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$35",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: cbEthToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Swap half cbETH for AERO on Uniswap",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$35",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Deposit USDC and AERO to Aerdrome Pool",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$69",
  //       protocol_id: aerodromeProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "78.32",
  //     },
  //     {
  //       name: "Deposit USDC and AERO to Aerdrome Pool",
  //       strategy_id: primeUsdcStrategy.id,
  //       amount: "~$69",
  //       protocol_id: aerodromeProtocol.id,
  //       token_id: aeroToken.id,
  //       yield: "78.32",
  //     },
  //   ],
  // });

  // await prisma.risk.createMany({
  //   data: [
  //     {
  //       name: "APYs are not promised returns, they may vary due to market conditions",
  //       strategy_id: primeUsdcStrategy.id,
  //     },
  //     {
  //       name: "You will be affected by price fluctuations of cbETH tokens",
  //       strategy_id: primeUsdcStrategy.id,
  //     },
  //   ],
  // });

  // const looptimismStrategy = await prisma.strategy.create({
  //   data: {
  //     name: "Looptimism",
  //     description:
  //       "Deposit your USDC into Looptimism to leverage automated yield optimization across multiple DeFi protocols. This smart contract strategy supplies your USDC to Aave, borrows WBTC against it, then swaps the WBTC back to USDC via Uniswap, repeating this process to increase leverage. It uses Pyth for real-time price feeds to maintain a safe loan-to-value ratio. Your stake is represented by ERC4626 standard shares, allowing for easy deposits and withdrawals. The contract owner can periodically harvest gains to realize yields. This approach aims to maximize your USDC returns by capitalizing on lending-borrowing differentials and potential market inefficiencies, all while managing associated risks through automated processes.",
  //     apy: "8.73",
  //     multiplier: "1.02",
  //     slug: "looptimism",
  //     contract_address: "0x862dad7c52edbd3a8d9c45307e0e1e87fc9786b2",
  //     abi_url:
  //       "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/looptimism.json",
  //     price_feeds: [
  //       "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
  //       "0xc9d8b075a5c69303365ae23633d4e085199bf5c520a3b90fed1322a0342ffc33",
  //     ],
  //     protocols: {
  //       connect: [
  //         {
  //           id: aaveProtocol.id,
  //         },
  //         {
  //           id: uniswapProtocol.id,
  //         },
  //       ],
  //     },
  //     tokens: {
  //       connect: [
  //         {
  //           id: usdcToken.id,
  //         },
  //         {
  //           id: wbtcToken.id,
  //         },
  //       ],
  //     },
  //     chain: {
  //       connect: {
  //         id: optimismChain.id,
  //       },
  //     },
  //   },
  // });

  // await prisma.step.createMany({
  //   data: [
  //     {
  //       name: "Supply USDC to Aave",
  //       strategy_id: looptimismStrategy.id,
  //       amount: "$100",
  //       protocol_id: aaveProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "3.69",
  //     },
  //     {
  //       name: "Borrow wBTC from Aave",
  //       strategy_id: looptimismStrategy.id,
  //       amount: "~$70",
  //       protocol_id: aaveProtocol.id,
  //       token_id: wbtcToken.id,
  //       yield: "-0.50",
  //     },
  //     {
  //       name: "Swap wBTC for USDC on Uniswap",
  //       strategy_id: looptimismStrategy.id,
  //       amount: "~$70",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: cbEthToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Swap wBTC for USDC on Uniswap",
  //       strategy_id: looptimismStrategy.id,
  //       amount: "~$70",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "0.00",
  //     },
  //     {
  //       name: "Loop back to first step, repeat 3 more times",
  //       strategy_id: looptimismStrategy.id,
  //       amount: "~$51",
  //       protocol_id: uniswapProtocol.id,
  //       token_id: usdcToken.id,
  //       yield: "5.39",
  //     },
  //   ],
  // });

  // await prisma.risk.createMany({
  //   data: [
  //     {
  //       name: "APYs are not promised returns, they may vary due to market conditions",
  //       strategy_id: looptimismStrategy.id,
  //     },
  //     {
  //       name: "You will be affected by price fluctuations of wBTC tokens",
  //       strategy_id: looptimismStrategy.id,
  //     },
  //   ],
  // });

  const bridgeProtocol = await prisma.protocol.create({
    data: {
      name: "Bridge",
      image_url:
        "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/bridge.svg",
    },
  });

  const transferProtocol = await prisma.protocol.create({
    data: {
      name: "Transfer",
      image_url:
        "https://hackathons.youprotab.com/hackathons/superhack-2024/assets/transfer.svg",
    },
  });

  const modeLooptimismStrategy = await prisma.strategy.create({
    data: {
      name: "Mode Looptimism",
      description:
        "Deposit your USDC into Looptimism from Mode to leverage automated yield optimization across multiple DeFi protocols. This smart contract strategy supplies your USDC to Optimism where it invests in Aave, borrows WBTC against it, then swaps the WBTC back to USDC via Uniswap, repeating this process to increase leverage. It uses Pyth for real-time price feeds to maintain a safe loan-to-value ratio. Your stake is represented by ERC4626 standard shares, allowing for easy deposits and withdrawals. The contract owner can periodically harvest gains to realize yields. This approach aims to maximize your USDC returns by capitalizing on lending-borrowing differentials and potential market inefficiencies, all while managing associated risks through automated processes.",
      apy: "8.73",
      multiplier: "1.02",
      slug: "mode-looptimism",
      contract_address: "0x862dad7c52edbd3a8d9c45307e0e1e87fc9786b2",
      abi_url:
        "https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/looptimism.json",
      price_feeds: [
        "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        "0xc9d8b075a5c69303365ae23633d4e085199bf5c520a3b90fed1322a0342ffc33",
      ],
      protocols: {
        connect: [
          {
            id: "clzpd94r00002rjnkk0qebb6u",
          },
          {
            id: "clzpd95520003rjnkpu8i8wd7",
          },
        ],
      },
      tokens: {
        connect: [
          {
            id: "clzpd95jk0005rjnkhyd8dxgu",
          },
          {
            id: "clzpd96c00008rjnkx07u5sl2",
          },
        ],
      },
      chain: {
        connect: {
          id: modeChain.id,
        },
      },
    },
  });

  await prisma.step.createMany({
    data: [
      {
        name: "Supply USDC to Optimism via bridge",
        strategy_id: modeLooptimismStrategy.id,
        amount: "$100",
        protocol_id: bridgeProtocol.id,
        token_id: "clzpd95jk0005rjnkhyd8dxgu",
        yield: "3.69",
      },
      {
        name: "Use Looptimism",
        strategy_id: modeLooptimismStrategy.id,
        amount: "~$51",
        protocol_id: transferProtocol.id,
        token_id: "clzpd95jk0005rjnkhyd8dxgu",
        yield: "5.39",
      },
    ],
  });

  await prisma.risk.createMany({
    data: [
      {
        name: "APYs are not promised returns, they may vary due to market conditions",
        strategy_id: modeLooptimismStrategy.id,
      },
      {
        name: "You will be affected by price fluctuations of wBTC tokens",
        strategy_id: modeLooptimismStrategy.id,
      },
      {
        name: "Fund’s may get time to move between chains, leading to lesser yield than expected",
        strategy_id: modeLooptimismStrategy.id,
      },
    ],
  });

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
