"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menu, menuButton, MenuType } from "./menu.data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window) {
      document.body.style.overflowY = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);
  return (
    <>
      <div
        className="flex w-[24px] lg:hidden h-[24px] flex-col gap-1 justify-center "
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20, display: "initial" }}
        animate={{
          y: isOpen ? 0 : -20,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "initial" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="absolute z-99999999999 top-[64px] bg-background w-screen left-0 p-5 border-b border-b-[rgba(0,0,0,.1)]"
      >
        <nav className="flex flex-col gap-3 uppercase">
          {menu.map((v, i) => (
            <div key={i}>
              {v.type === "LINK" ? (
                <Link href={v.href}>{v.title}</Link>
              ) : (
                <SubMenu v={v} i={i} />
              )}
            </div>
          ))}
          {menuButton.map((v, i) =>
            v.type == "Fill" ? (
              <Button
                className="uppercase bg-primary rounded-4xl text-white cursor-pointer hover:bg-black hover:text-white "
                key={i}
              >
                {v.title}
              </Button>
            ) : (
              <Button
                variant={"outline"}
                className="uppercase border-black hover:text-white  rounded-4xl cursor-pointer hover:bg-black"
                key={i}
              >
                {v.title}
              </Button>
            )
          )}
        </nav>
      </motion.div>
    </>
  );
};
function SubMenu({ v, i }: { v: MenuType; i: number }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div key={i}>
      <Button
        className={` uppercase flex justify-between w-full items-center hover:bg-transparent cursor-pointer px-0 hover:text-primary ${
          openSubMenu ? "text-primary" : ""
        }`}
        onClick={() => setOpenSubMenu(!openSubMenu)}
        variant="ghost"
      >
        {v.title}
        <motion.span
          animate={{ rotate: openSubMenu ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </Button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: openSubMenu ? "auto" : 0,
          opacity: openSubMenu ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden ml-4 mt-2 flex flex-col gap-2 hover:bg-background"
      >
        {v.sub_menu &&
          v.sub_menu.map((sub, subIndex) => (
            <Link
              href={sub.href}
              key={subIndex}
              className="hover:text-primary-foreground uppercase hover:bg-none"
            >
              {sub.title}
            </Link>
          ))}
      </motion.div>
    </div>
  );
}

export default MobileMenu;
