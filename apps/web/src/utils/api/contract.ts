import axios from "axios";

export const getContractABI = async (contract: string = "strategy-abi") =>
  axios.get(
    `https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/${contract}.json`
  );
