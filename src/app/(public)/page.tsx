import { ListPlusIcon } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "./_components/animation-button";
import PostCard from "@/components/posts/post.cards";
import Search from "./_components/search";

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
            <Search />
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
              <AnimatedButton text="Login" className="" />
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

      <section className="w-full  sm:py-[100px] py-[50px] bg-black text-white">
        <div className="flex w-full justify-between items-center  border-b-1 border-b-[rgba(225,225,225,.1)] sm:px-[150px] px-[20px] py-[20px]">
          <div className="flex flex-col gap-2.5 ">
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
                    <path
                      d="M9 17L12.8971 10.25H5.10289L9 17Z"
                      fill="#143AA2"
                    />
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
              <p className="text-[#143AA2] uppercase">Popular</p>
            </div>
            <h1 className=" text-3xl uppercase">Catagory&apos;s</h1>
          </div>
          <div className="sm:flex hidden">
            <AnimatedButton
              text="Login"
              className="bg-primary border-none hover:bg-primary text-white hover:text-white"
              borderColorHover="rgba(225,225,225,1)"
              borderColor="rgba(225,225,225,.3)"
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center  border-b-1 border-b-[rgba(225,225,225,.1)] sm:px-[150px] px-[20px] py-[20px] ">
          <div className="w-full flex justify-between items-center">
            <h2 className="flex flex-col text-6xl font-light lg:flex-row lg:gap-2 lg:w-1/3">
              41K{" "}
              <span className="text-[rgba(225,225,225,.5)] text-2xl lg:text-[10px] text-center ">
                Listing
              </span>
            </h2>
            <div className="relative h-[300px] w-1/3 overflow-hidden rounded-2xl lg:block hidden lg:w-1/3">
              <Image
                src="/hero-img.jpg"
                alt="hero image"
                layout="fill" // Ensures the image fills the parent div
                objectFit="cover" // Prevents image distortion
                priority // Loads the image ASAP for performance
                className="w-full h-full overflow-hidden select-none"
              />
            </div>
            <h2 className="text-start w-1/2 text-3xl text-[rgba(225,225,225,.5)] lg:w-1/3 sm:text-center">
              Corn star
            </h2>
          </div>
        </div>
        <div className="flex w-full justify-between items-center  border-b-1 border-b-[rgba(225,225,225,.1)] sm:px-[150px] px-[20px] py-[20px] ">
          <div className="w-full flex justify-between items-center">
            <h2 className="flex flex-col text-6xl font-light lg:flex-row lg:gap-2 lg:w-1/3">
              41K{" "}
              {/* <sup className="text-[rgba(225,225,225,.5)] text-2xl">
                Listing
              </sup> */}
              <span className="text-[rgba(225,225,225,.5)] text-2xl sups lg:text-[10px] text-center ">
                Listing
              </span>
            </h2>

            <h2 className="text-start sm:text-center w-1/2 lg:w-1/3 text-3xl text-[rgba(225,225,225,.5)]">
              Corn star
            </h2>
            <div className="relative h-[300px] w-1/3 overflow-hidden rounded-2xl lg:block hidden ">
              <Image
                src="/hero-img.jpg"
                alt="hero image"
                layout="fill" // Ensures the image fills the parent div
                objectFit="cover" // Prevents image distortion
                priority // Loads the image ASAP for performance
                className="w-full h-full overflow-hidden select-none"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between items-center  border-b-1 border-b-[rgba(225,225,225,.1)] sm:px-[150px] px-[20px] py-[20px] ">
          <div className="relative h-[300px]  overflow-hidden rounded-2xl lg:block hidden lg:w-1/3">
            <Image
              src="/hero-img.jpg"
              alt="hero image"
              layout="fill" // Ensures the image fills the parent div
              objectFit="cover" // Prevents image distortion
              priority // Loads the image ASAP for performance
              className="w-full h-full overflow-hidden select-none"
            />
          </div>
          <h2 className="flex flex-col text-6xl font-light lg:flex-row lg:gap-2 lg:w-1/3 lg:justify-center">
            41K{" "}
            {/* <sup className="text-[rgba(225,225,225,.5)] text-2xl">
                Listing
              </sup> */}
            <span className="text-[rgba(225,225,225,.5)] text-2xl sups lg:text-[10px] text-center ">
              Listing
            </span>
          </h2>
          <h2 className="text-start sm:text-center w-1/2 lg:w-1/3 text-3xl text-[rgba(225,225,225,.5)]">
            Corn star
          </h2>
        </div>

        <div className="sm:hidden flex justify-end my-3 px-[20px]">
          <AnimatedButton
            text="Login"
            className="bg-primary border-none hover:bg-primary text-white hover:text-white"
            borderColorHover="rgba(225,225,225,1)"
            borderColor="rgba(225,225,225,.3)"
          />
        </div>
      </section>
    </>
  );
};

export default page;
