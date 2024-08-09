import { chains } from "../config/wagmi";

export interface INavCard {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

export interface INavItem {
  href?: string;
  children: React.ReactNode;
  cards?: INavCard[];
}

export enum TRANSACTION_TABS {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

export interface Strategy {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  apy: string;
  multiplier: string;
  price_feeds: string[];
}

export type ChainId = (typeof chains)[number]["id"];
