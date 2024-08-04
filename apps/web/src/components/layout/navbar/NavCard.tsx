import { AspectRatio } from "@yieldhive/ui/components/ui/aspect-ratio";
import truncate from "lodash/truncate";
import Image from "next/image";
import Link from "next/link";
import { INavCard } from "../../../utils/types";

type Props = INavCard;

const NavCard = (props: Props) => {
  const { imageUrl, title, description, href } = props;

  return (
    <Link
      href={href}
      className="bg-contrast hover:bg-primary/5 transition-colors duration-300 p-4 rounded-lg group"
    >
      <AspectRatio ratio={5 / 3} className="rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={250}
          height={150}
          className="w-full h-full object-cover"
        />
      </AspectRatio>

      <div className="mt-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm" title={description}>
          {truncate(description, { length: 80 })}
        </p>
      </div>
    </Link>
  );
};

export default NavCard;
