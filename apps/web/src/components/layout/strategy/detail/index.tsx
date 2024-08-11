import { Strategy } from "@yieldhive/database";
import StrategyDetailBTS from "./bts";
import StrategyDetailDescription from "./description";
import StrategyDetailTransactionHistory from "./history";
import StrategyDetailRisks from "./risks";
import StrategyDetailStats from "./stats";
import StrategyDetailTitle from "./title";
import StrategyDetailTransaction from "./transaction";

interface Props {
  strategy: NonNullable<Strategy>;
}

const StrategyDetail = (props: Props) => {
  const { strategy } = props;

  return (
    <div className="container mx-auto relative pt-24 lg:pt-28 text-primary">
      <StrategyDetailTitle title={strategy.name} />
      <div className="space-y-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-5">
            <StrategyDetailDescription description={strategy.description} />
          </div>
          <div className="col-span-1 lg:col-span-3">
            <StrategyDetailStats
              apy={strategy.apy}
              protocols={strategy.protocols}
            />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <StrategyDetailTransaction />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-7">
            <StrategyDetailBTS bts={strategy.steps} chain={strategy.chain} />
          </div>
          <div className="col-span-1 lg:col-span-5">
            <StrategyDetailRisks risks={strategy.risks} />
          </div>
        </div>
        <div className="pb-10">
          <StrategyDetailTransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default StrategyDetail;
