export type HeaderMenuType = {
  title: string;
  link?: string;
  type: "Link" | "SubMenu";
  subData?: HeaderMenuType[];
};

export const HeaderMenu: HeaderMenuType[] = [
  {
    link: "/",
    title: "Home",
    type: "Link",
  },
  {
    link: "/",
    title: "Home",
    type: "Link",
  },
];

export type HeaderButtonsType = {
  title: string;
  link: string;
  active: boolean;
}[];
export const HeaderButtons: HeaderButtonsType = [
  {
    link: "/auth/login",
    title: "Login",
    active: true,
  },
  {
    link: "/auth/register?nextUrl=/auth/onboarding",
    title: "Sign-Up",
    active: false,
  },
];
