import BackgroundDots from "@yieldhive/ui/components/ui/background-dots";
import StrategyHeading from "../../components/layout/strategy/heading";
import Strategies from "../../components/layout/strategy/strategies";
import { getAllStrategies } from "../../utils/api/strategy";

export default async function StrategiesPage() {
  const { data } = await getAllStrategies();

  return (
    <div>
      <BackgroundDots />
      <StrategyHeading />
      <Strategies strategies={data.data.strategies} />
    </div>
  );
}

export const revalidate = 60 * 60 * 24;
