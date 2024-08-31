import OptimismIcon from "@yieldhive/ui/components/icons/optimism";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  return (
    <div className="pb-10">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden container mx-auto">
        <Marquee pauseOnHover loop={0} speed={100}>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="px-10 filter grayscale opacity-60">
                <OptimismIcon />
                {/* Should be replaced with all other icons */}
              </div>
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background z-10"></div>
      </div>
    </div>
  );
};

export default BrandMarquee;
