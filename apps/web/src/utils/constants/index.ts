import { INavItem } from "../types";

export const navItems: INavItem[] = [
  {
    href: "/",
    children: "Home",
  },
  {
    children: "🔥 Hot",
    cards: [
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/150",
        title: "Card 1",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/300",
        title: "Card 2",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/1200",
        title: "Card 3",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
      {
        href: "/",
        imageUrl: "https://via.placeholder.com/1600",
        title: "Card 4",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat magni impedit consequatur cumque explicabo corporis, labore, repellendus autem nisi repudiandae omnis et ipsum! Dolorum.",
      },
    ],
  },
  {
    href: "/strategies",
    children: "Strategies",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];
