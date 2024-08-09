import { base, baseSepolia, modeTestnet } from "wagmi/chains";
import { ChainId, INavItem } from "../types";

export const navItems: INavItem[] = [
  {
    href: "/",
    children: "Home",
  },
  {
    children: "🔥 Hot",
    cards: [
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/150",
        title: "Card 1",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/300",
        title: "Card 2",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/1200",
        title: "Card 3",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/1600",
        title: "Card 4",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
    ],
  },
  {
    href: "/strategies",
    children: "Strategies",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

export const LOCALSTORAGE_IS_AUTHENTICATED = "is-authenticated";

export const CONTRACT_ADDRESS: Record<string, `0x${string}`> = {
  // TODO: Rename this to the actual strategy name
  STRATEGY_ABI: "0x862DAD7C52EdbD3a8D9C45307E0e1e87fC9786B2",
};

export const TOKEN_ADDRESS: Record<string, `0x${string}`> = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
};

export const USDC_CONTRACT_ADDRESS: Record<ChainId, `0x${string}`> = {
  [base.id]: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  [baseSepolia.id]: "0x5deac602762362fe5f135fa5904351916053cf70",
  // [baseSepolia.id]: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  [modeTestnet.id]: "0xd988097fb8612cc24eeC14542bC03424c656005f",
  // [mainnet.id]: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  // [mainnet.id]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  // [mainnet.id]: "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
  // [sepolia.id]: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
};
