import { useEffect, useState } from "react";
import { getCategory } from "@/utils/data-fetch";

export type MenuType = {
  title: string;
  href: string;
  type: "LINK" | "DROP-DOWN";
  isNSFW: boolean;
  sub_menu?: MenuType[];
};

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuType[]>([
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
      title: "Listing",
      href: "/all-listing",
      isNSFW: false,
      type: "LINK",
    },
    {
      title: "Category",
      href: "#",
      isNSFW: false,
      type: "DROP-DOWN",
      sub_menu: [],
    },
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setMenu((prevMenu) =>
          prevMenu.map((item) =>
            item.title === "Category"
              ? {
                  ...item,
                  sub_menu: (data.data || [{ name: "DEMO", slug: "demo" }]).map(
                    (v) => ({
                      title: v.name ?? "Untitled",
                      href: `/category/${v.slug}`,
                      type: "LINK",
                      isNSFW: false,
                    })
                  ),
                }
              : item
          )
        );
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return menu;
};

export type ButtonType = {
  title: string;
  link: string;
  type: "Line" | "Fill";
}[];

export const menuButton: ButtonType = [
  {
    link: "/auth/login",
    title: "Login",
    type: "Fill",
  },
  {
    link: "/auth/login",
    title: "Register",
    type: "Line",
  },
];
