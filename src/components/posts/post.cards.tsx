"use client";
import { cn } from "@/lib/utils";
import { ArrowRight, LocateFixedIcon, Star, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const PostCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={"#"}>
      <div className="flex flex-col gap-2 justify-center ">
        <div className="relative w-full h-[480px] rounded-2xl overflow-hidden ">
          <motion.div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            animate={{
              opacity: hover ? 1 : 0,
            }}
            className={cn(
              "cursor-pointer absolute z-20 w-full h-full flex justify-center items-center bg-[rgba(230,83,14,0.75)] text-white gap-3   transition-opacity"
            )}
          >
            <span>Know more</span>
            <ArrowRight />
          </motion.div>
          <Image
            src="/waiting-room.jpeg"
            alt="images"
            layout="fill" // Ensures the image fills the parent div
            objectFit="cover" // Prevents image distortion
            priority // Loads the image ASAP for performance
            className={cn(
              "w-full h-full overflow-hidden select-none z-10 transition-all",
              hover && "scale-110"
            )}
          />
        </div>
        <div>
          <h1 className="text-4xl text-nowrap break-words truncate">
            Title name
          </h1>
        </div>
        <div className="flex items-center gap-2 text-[rgba(0,0,0,.75)]">
          <div className="flex items-center justify-between gap-2">
            <Star size={16} /> 5.5
          </div>
          <div className="flex items-center justify-between gap-2">
            <Tag size={16} /> Restorenet
          </div>
          <div className="flex items-center justify-between gap-2">
            <LocateFixedIcon size={16} /> Nagpur
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
