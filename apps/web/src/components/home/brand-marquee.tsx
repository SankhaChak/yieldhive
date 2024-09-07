import ModeIcon from "@yieldhive/ui/components/icons/mode";
import PythIcon from "@yieldhive/ui/components/icons/pyth";
import SuperformIcon from "@yieldhive/ui/components/icons/superform";
import TenderlyIcon from "@yieldhive/ui/components/icons/tenderly";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  const icons = [
    <TenderlyIcon key="tenderly" className="w-48" />,
    <ModeIcon key="mode" className="w-28" />,
    <SuperformIcon key="superform" className="w-8 h-8 mx-4" />,
    <PythIcon key="pyth" className="w-28" />,
  ];

  return (
    <div className="pb-10">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden container mx-auto">
        <Marquee pauseOnHover loop={0} speed={100}>
          {icons.map((icon) => (
            <div
              key={icon.key}
              className="px-4 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {icon}
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
