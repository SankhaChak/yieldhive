import StrategyDetailBTS from "./bts";
import StrategyDetailDescription from "./description";
import StrategyDetailTransactionHistory from "./history";
import StrategyDetailRisks from "./risks";
import StrategyDetailStats from "./stats";
import StrategyDetailTitle from "./title";
import StrategyDetailTransaction from "./transaction";

type Props = {};

const StrategyDetail = (props: Props) => {
  return (
    <div className="container mx-auto relative pt-12 md:pt-16 lg:pt-28 text-primary">
      <StrategyDetailTitle title="USDC Sensei" />
      <div className="space-y-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-5">
            <StrategyDetailDescription
              description="Deposit your USDC to automatically loop your funds between zkLend
              and Nostra to create a delta neutral position. This strategy is
              designed to maximize your yield on USDC. Your position is
              automatically adjusted periodically to maintain a healthy health
              factor. You receive a NFT as representation for your stake on
              STRKFarm. You can withdraw anytime by redeeming your NFT for USDC."
            />
          </div>
          <div className="col-span-1 lg:col-span-3">
            <StrategyDetailStats apy="26.45" multiplier="1.87" />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <StrategyDetailTransaction />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-7">
            <StrategyDetailBTS />
          </div>
          <div className="col-span-1 lg:col-span-5">
            <StrategyDetailRisks />
          </div>
        </div>
        <div className="pb-10">
          <StrategyDetailTransactionHistory />
        </div>
        {/* <Card className="p-4">
          <h2>Transaction History</h2>
          <p>
            No transactions recorded since this feature was added. We use
            your browser's storage to save your transaction history. Make a
            deposit or withdrawal to see your transactions here. Clearning
            browser cache will remove this data.
          </p>
        </Card> */}
      </div>
    </div>
  );
};

export default StrategyDetail;
