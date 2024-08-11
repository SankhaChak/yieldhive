import { INavItem } from "../types";

export const navItems: INavItem[] = [
  {
    href: "/",
    children: "Home",
  },
  // {
  //   children: "🔥 Hot",
  //   cards: [
  //     {
  //       href: "/",
  //       imageUrl: "https://via.placeholder.com/150",
  //       title: "Card 1",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
  //     },
  //     {
  //       href: "/",
  //       imageUrl: "https://via.placeholder.com/300",
  //       title: "Card 2",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
  //     },
  //     {
  //       href: "/",
  //       imageUrl: "https://via.placeholder.com/1200",
  //       title: "Card 3",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
  //     },
  //     {
  //       href: "/",
  //       imageUrl: "https://via.placeholder.com/1600",
  //       title: "Card 4",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
  //     },
  //   ],
  // },
  {
    href: "/strategies",
    children: "Strategies",
  },
  // {
  //   href: "/about",
  //   children: "About",
  // },
  // {
  //   href: "/contact",
  //   children: "Contact",
  // },
];

export const LOCALSTORAGE_IS_AUTHENTICATED = "is-authenticated";

export const CONTRACT_ADDRESS: Record<string, `0x${string}`> = {
  // TODO: Rename this to the actual strategy name
  STRATEGY_ABI: "0x862DAD7C52EdbD3a8D9C45307E0e1e87fC9786B2",
  PYTH: "0x4896bb51d19a7c7a69e48732580fb628903086ef",
};

export const TOKEN_ADDRESS: Record<string, `0x${string}`> = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
};
