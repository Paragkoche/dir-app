import { CSRcreateClient } from "@/lib/csr.supabase";

export type MenuType = {
  title: string;
  href: string;
  type: "LINK" | "DROP-DOWN";
  isNSFW: boolean;
  sub_menu?: MenuType[];
};

const data = await CSRcreateClient().from("category").select("name,slug");

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
      ...(data.data || [{ name: "DEMO", slug: "demo" }]).map((v) => ({
        title: v.name ?? "Untitled",
        href: "/category/" + v.slug,
        type: "LINK" as const,
        isNSFW: false,
      })),
    ],
  },
];

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
