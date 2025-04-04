import { Button } from "@/components/ui/button";

import { ListPlusIcon, Search } from "lucide-react";
import Image from "next/image";
import SearchFilter from "./_components/search-filter";
import AnimatedButton from "./_components/animation-button";
import PostCard from "@/components/posts/post.cards";

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
      <section className="w-full lg:px-[150px] px-[20px] flex flex-col lg:flex-row justify-center lg:h-[50vh] h-auto gap-12 mb-14">
        <div className="lg:w-[20vw] w-full h-[50vh] lg:h-auto relative overflow-hidden rounded-3xl">
          <Image
            src="/waiting-room.jpeg"
            alt="images"
            layout="fill" // Ensures the image fills the parent div
            objectFit="cover" // Prevents image distortion
            priority // Loads the image ASAP for performance
            className="w-full h-full overflow-hidden select-none"
          />
        </div>
        <div className="flex h-full flex-col p-2.5 justify-center">
          <div className="flex flex-col gap-y-7">
            <h1 className="text-3xl font-light">
              List your business and bring joy & delight to your
              <br /> customers!
            </h1>
            <p className="font-light">
              Join our platform to showcase your services, reach a wider
              audience, and grow your <br /> business effortlessly.
            </p>
            <div className="flex">
              <AnimatedButton />
            </div>
          </div>
          <div className="flex gap-14 p-2.5 mt-3">
            <div className="w-1/2 border-t border-t-[rgba(0,0,0,.1)] flex flex-col justify-between gap-5">
              <div className="text-4xl mt-3">
                <h1 className="font-light">700+</h1>
              </div>
              <div className="flex justify-between ">
                <p className="font-light">Our listing</p>
                <ListPlusIcon />
              </div>
            </div>
            <div className="w-1/2 border-t border-t-[rgba(0,0,0,.1)] flex flex-col justify-between gap-5">
              <div className="text-4xl mt-3">
                <h1 className="font-light">700+</h1>
              </div>
              <div className="flex justify-between">
                <p className="font-light">Our listing</p>
                <ListPlusIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full sm:px-[150px] px-[20px] flex flex-col gap-3.5 mb-11">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-primary">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_52_202)">
                <g clipPath="url(#clip1_52_202)">
                  <path d="M9 17L12.8971 10.25H5.10289L9 17Z" fill="#143AA2" />
                  <path
                    d="M13.5 10L17.3971 3.25H9.60289L13.5 10Z"
                    fill="#143AA2"
                  />
                  <path
                    d="M4.5 10L8.39711 3.25H0.60289L4.5 10Z"
                    fill="#143AA2"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_52_202">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
                <clipPath id="clip1_52_202">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-[#143AA2]">Sponsors</p>
          </div>
          <h1 className=" text-3xl uppercase">Popular Listing</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-7 gap-x-16 ">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default page;
