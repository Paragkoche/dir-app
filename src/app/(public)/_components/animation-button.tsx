"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnimatedButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Button
        variant={"outline"}
        className="bg-transparent hover:bg-transparent shadow-none border-1 border-[rgba(0,0,0)] rounded-3xl cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Login
      </Button>
      <motion.div
        initial={{ borderColor: "rgba(0,0,0,.3)" }}
        whileHover={{ borderColor: "rgba(0,0,0,1)" }}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <ArrowUpRight size={15} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AnimatedButton;
