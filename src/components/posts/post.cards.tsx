import { LocateFixedIcon, Star, Tag } from "lucide-react";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-2 justify-center ">
      <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
        <Image
          src="/waiting-room.jpeg"
          alt="images"
          layout="fill" // Ensures the image fills the parent div
          objectFit="cover" // Prevents image distortion
          priority // Loads the image ASAP for performance
          className="w-full h-full overflow-hidden select-none"
        />
      </div>
      <div>
        <h1 className="text-4xl">Title name</h1>
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
  );
};

export default PostCard;
