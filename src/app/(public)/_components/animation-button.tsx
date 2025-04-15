"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AnimatedButton = (props: {
  text: string;
  className: string;
  borderColor?: string;
  borderColorHover?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Button
        variant={"outline"}
        className={cn(
          "bg-transparent hover:bg-transparent shadow-none border-1 border-[rgba(0,0,0)] rounded-3xl cursor-pointer",
          props.className
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {props.text}
      </Button>
      <motion.div
        initial={{
          borderColor: props.borderColor ? props.borderColor : "rgba(0,0,0,.3)",
        }}
        animate={{
          borderColor: !hovered
            ? props.borderColor
              ? props.borderColor
              : "rgba(0,0,0,.3)"
            : props.borderColorHover
            ? props.borderColorHover
            : "rgba(0,0,0,1)",
        }}
        whileHover={{
          borderColor: props.borderColorHover
            ? props.borderColorHover
            : "rgba(0,0,0,1)",
        }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border bg-transparent relative overflow-hidden flex justify-center items-center w-[37px] h-[37px] rounded-[50%] cursor-pointer"
      >
        <motion.div
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: !hovered ? 0 : 180,
            y: !hovered ? 0 : -180,
            opacity: !hovered ? 1 : 0,
            rotate: !hovered ? 0 : 45,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            `text-[${props.borderColorHover}]`
          )}
        >
          <ArrowUpRight size={15} />
        </motion.div>
        <motion.div
          initial={{ x: -180, y: 180, opacity: 0 }}
          animate={{
            x: hovered ? 0 : -180,
            y: hovered ? 0 : 180,
            opacity: hovered ? 1 : 0,
            rotate: hovered ? 0 : -45,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            `text-[${props.borderColorHover}]`
          )}
        >
          <ArrowUpRight size={15} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimatedButton;
