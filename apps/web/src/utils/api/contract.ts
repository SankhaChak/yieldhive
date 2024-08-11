import axios from "axios";

export const getContractABI = async (contract: string = "strategy-abi") =>
  axios.get(
    `https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/${contract}.json`
  );

export const getPythContractABI = async () =>
  axios.get(
    `https://hackathons.youprotab.com/hackathons/superhack-2024/contracts/pyth.json`
  );

export const getPricePyth = async (
  pythIds: string[]
): Promise<{
  data: {
    binary: {
      data: string[];
    };
  };
}> => {
  const url = `https://hermes.pyth.network/v2/updates/price/latest?${pythIds.map((id) => `ids[]=${id}`).join("&")}&encoding=hex`;
  return axios.get(url);
};
