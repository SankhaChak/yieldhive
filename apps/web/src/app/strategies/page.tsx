import BackgroundDots from "@yieldhive/ui/components/ui/background-dots";
import StrategyHeading from "../../components/layout/strategy/heading";
import Strategies from "../../components/layout/strategy/strategies";

export default function StrategiesPage(): JSX.Element {
  return (
    <div>
      <BackgroundDots />
      <StrategyHeading />
      <Strategies />
    </div>
  );
}
