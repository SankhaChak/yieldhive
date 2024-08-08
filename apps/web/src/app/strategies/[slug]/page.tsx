import BackgroundDots from "@yieldhive/ui/components/ui/background-dots";
import StrategyDetail from "../../../components/layout/strategy/detail";
import {
  getAllStrategies,
  getStrategyDetail,
} from "../../../utils/api/strategy";

export async function generateStaticParams() {
  const { data } = await getAllStrategies();

  const strategies = data.data.strategies;

  return strategies.map((strategy) => ({
    slug: strategy.slug,
  }));
}

export default async function StrategyDetailPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const slug = params.slug;
  const { data } = await getStrategyDetail(slug);

  return (
    <div>
      <BackgroundDots />
      <StrategyDetail strategy={data.data.strategy} />
    </div>
  );
}

export const revalidate = 60 * 60 * 24;
