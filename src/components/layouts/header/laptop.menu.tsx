"use client";
import Link from "next/link";
import { menu, menuButton } from "./menu.data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LaptopMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <nav className="hidden lg:flex gap-10 uppercase">
        {menu.map((v, i) =>
          v.type == "LINK" ? (
            <Link
              className="hover:text-primary-foreground transition-colors cursor-pointer"
              href={v.href}
              key={i}
            >
              {v.title}
            </Link>
          ) : (
            <DropdownMenu
              key={i}
              onOpenChange={(isOpen) => setOpenIndex(isOpen ? i : null)}
            >
              <DropdownMenuTrigger
                className="outline-none data-[state=open]:text-primary-foreground hover:text-primary-foreground  cursor-pointer uppercase"
                asChild
              >
                <span className="flex items-center">
                  {v.title}
                  <motion.div
                    animate={{ rotate: openIndex === i ? -180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown width={16} height={16} />
                  </motion.div>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-[1rem]  bg-background  shadow-none rounded-none border-[rgba(0,0,0,.1)] border-t-transparent flex flex-col gap-1.5 ">
                {v.sub_menu?.map((sub_v, sub_i) => (
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-none"
                    key={sub_i}
                    asChild
                  >
                    <Link
                      href={sub_v.href}
                      className="hover:text-primary-foreground uppercase hover:bg-none"
                    >
                      {" "}
                      {sub_v.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        )}
      </nav>
      <div className="hidden lg:flex gap-2.5 items-center">
        {menuButton.map((v, i) =>
          v.type == "Fill" ? (
            <Button
              className="bg-primary uppercase rounded-4xl text-white cursor-pointer hover:bg-black hover:text-white "
              key={i}
            >
              {v.title}
            </Button>
          ) : (
            <Button
              variant={"outline"}
              className="border-black uppercase hover:text-white  rounded-4xl cursor-pointer hover:bg-black"
              key={i}
            >
              {v.title}
            </Button>
          )
        )}
      </div>
    </>
  );
};

export default LaptopMenu;
