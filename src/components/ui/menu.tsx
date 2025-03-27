"use client";
import { HeaderButtons, HeaderMenu, HeaderMenuType } from "@/data/header-menu";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
export function SubMenu({
  v,
  i,
  onClick,
}: {
  v: HeaderMenuType;
  i: number;
  onClick: () => void;
}) {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  return (
    <div>
      <motion.div
        className={`flex justify-between w-full  cursor-pointer gap-1.5`}
        animate={{
          color: openSubMenu ? "var(--primary)" : "var(--body)",
        }}
        onClick={() => setOpenSubMenu(openSubMenu === i ? null : i)}
      >
        {v.title}
        <motion.span
          animate={{ rotate: openSubMenu ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center relative"
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.div>
      {openSubMenu === i && v.subData && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: openSubMenu ? "auto" : 0,
            opacity: openSubMenu ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden absolute top-16 flex flex-col  py-5 px-8 border-[rgba(0,0,0,.1)] border-r border-l border-b  gap-y-3.5"
        >
          {v.subData &&
            v.subData.map((sub, subIndex) => (
              <Link href={sub.link!} onClick={onClick} key={subIndex}>
                {sub.title}
              </Link>
            ))}
        </motion.div>
      )}
    </div>
  );
}
const Menu = () => {
  return HeaderMenu.map((v, i) => (
    <div key={i}>
      {v.type === "Link" ? (
        <Link
          className="hover:text-[var(--primary)]"
          href={v.link!}
          onClick={() => {
            // setIsOpen(false);
          }}
        >
          {v.title}
        </Link>
      ) : (
        <SubMenu
          v={v}
          i={i}
          onClick={() => {
            // setIsOpen(false);
          }}
        />
      )}
    </div>
  ));
};
export const ButtonMenu = () => {
  const router = useRouter();

  return HeaderButtons.map((v, i) => (
    <button
      key={i}
      className={`rounded-3xl py-2 px-4 transition-colors cursor-pointer leading-[120%] hover:!bg-[var(--title)] hover:text-white ${
        v.active ? "bg-[var(--primary)]  text-white" : "border"
      }`}
      onClick={() => {
        router.push(v.link);
        // setIsOpen(false);
      }}
    >
      {v.title}
    </button>
  ));
};
export default Menu;
