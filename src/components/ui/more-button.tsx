"use client";
import { HeaderButtons, HeaderMenu, HeaderMenuType } from "@/data/header-menu";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        className={`flex justify-between w-full`}
        animate={{
          color: openSubMenu ? "var(--primary)" : "var(--body)",
        }}
        onClick={() => setOpenSubMenu(openSubMenu === i ? null : i)}
      >
        {v.title}
        <motion.span
          animate={{ rotate: openSubMenu ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center"
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
          transition={{ duration: 0.6 }}
          className="overflow-hidden ml-4 mt-2 flex flex-col gap-2"
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

export default function HamburgerMenu({
  data,
}: {
  data: { name: string | null; slug: string | null }[] | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div
        className="flex flex-col gap-1.5 w-6 h-5 justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="bg-black w-6 h-[1px] rounded"
          initial={false}
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 7 : 0,
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
            y: isOpen ? -7 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "center" }}
        />
      </div>
      <motion.div
        animate={{
          top: isOpen ? 64 : "-100%",
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "block" : "none",
        }}
        className="absolute  -z-10 top-[64px] bg-[#fffdf5] w-screen  left-0 p-5"
      >
        <nav className="flex flex-col gap-3">
          {(
            [
              ...HeaderMenu,
              {
                title: "Category",
                type: "SubMenu",
                subData:
                  data &&
                  data.map((v) => ({
                    title: v.name,
                    type: "Link",
                    link: `/category/${v.slug}`,
                  })),
              },
            ] as HeaderMenuType[]
          ).map((v, i) => (
            <div key={i}>
              {v.type === "Link" ? (
                <Link
                  href={v.link!}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {v.title}
                </Link>
              ) : (
                <SubMenu
                  v={v}
                  i={i}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              )}
            </div>
          ))}
          {HeaderButtons.map((v, i) => (
            <button
              key={i}
              className={`rounded-3xl py-2.5 px-5 leading-[120%] hover:!bg-[var(--title)] ${
                v.active ? "bg-[var(--primary)]  text-white" : "border"
              }`}
              onClick={() => {
                router.push(v.link);
                setIsOpen(false);
              }}
            >
              {v.title}
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
