import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";
import Image from "next/image";
import SearchFilter from "./_components/search-filter";

const page = () => {
  return (
    <>
      <section className="w-full h-[80vh] px-6 pt-2.5 mb-14">
        <div className="w-full h-full overflow-hidden relative rounded-xl">
          <Image
            src="/hero-img.jpg"
            alt="hero image"
            layout="fill" // Ensures the image fills the parent div
            objectFit="cover" // Prevents image distortion
            priority // Loads the image ASAP for performance
            className="w-full h-full overflow-hidden select-none"
          />
          <div className="w-full h-full flex absolute top-0 left-0 justify-center items-center m-auto">
            <div className="flex  flex-col items-center justify-center m-auto w-full gap-2.5">
              <div className=" w-[80%]  flex items-center gap-2.5 bg-black px-2.5 py-1.5 rounded-[24px]">
                <input
                  className="w-full outline-none text-white px-3.5"
                  placeholder="Search"
                />
                <Button className="rounded-[50%] cursor-pointer">
                  <Search className="text-white" />
                </Button>
              </div>
              <SearchFilter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
