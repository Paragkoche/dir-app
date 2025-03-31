export type MenuType = {
  title: string;
  href: string;
  type: "LINK" | "DROP-DOWN";
  isNSFW: boolean;
  sub_menu?: MenuType[];
};

export const menu: MenuType[] = [
  {
    title: "Home",
    href: "/",
    isNSFW: false,
    type: "LINK",
  },
  {
    title: "About",
    href: "/about-us",
    isNSFW: false,
    type: "LINK",
  },
  {
    title: "listing",
    href: "/all-listing",
    isNSFW: false,
    type: "LINK",
  },
  {
    title: "Category",
    href: "#",
    isNSFW: false,
    type: "DROP-DOWN",
    sub_menu: [
      {
        href: "/category/events",
        title: "Events",
        type: "LINK",
        isNSFW: false,
      },
      {
        href: "/category/events",
        title: "Events",
        type: "LINK",
        isNSFW: false,
      },
    ],
  },
];
