import BackgroundDots from "@yieldhive/ui/components/ui/background-dots";
import StrategyDetail from "../../../components/layout/strategy/detail";

const strategy = {
  name: "USDC Sensei",
  description:
    "Deposit your USDC to automatically loop your funds between zkLend and Nostra to create a delta neutral position. This strategy is designed to maximize your yield on USDC. Your position is automatically adjusted periodically to maintain a healthy health factor. You receive a NFT as representation for your stake on STRKFarm. You can withdraw anytime by redeeming your NFT for USDC.",
  apy: "26.45",
  multiplier: "1.87",
};

export default function StrategyDetailPage(): JSX.Element {
  return (
    <div>
      <BackgroundDots />
      <StrategyDetail />
    </div>
  );
}
