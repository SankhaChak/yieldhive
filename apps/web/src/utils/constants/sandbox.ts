import { getFormattedBalance } from "../sandbox";

export const SANDBOX_INITIAL_BALANCE = 1000000;

export const SANDBOX_INFO_LIST_ITEMS = [
  `Balance: ${getFormattedBalance(SANDBOX_INITIAL_BALANCE)} USDC`,
  "Risk free environment",
  "Real like experience",
];

export const SANDBOX_REDIRECT_PATH = "/strategies/prime-usdc";
