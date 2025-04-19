import { Info } from "lucide-react";
import Bumper from "../_components/bumper";
import SlideShow from "../_components/id/SlideShow";
import Review from "../_components/id/review_card";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async (props: PageProps) => {
  const { id } = await props.params;
  console.log(id);

  return (
    <main className="w-full h-auto xl:px-[150px] px-[20px] pt-[50px] mb-3.5">
      <Bumper
        ctg={[
          {
            name: "parag",
            url: "/",
          },
          {
            name: "parag",
            url: "/",
          },
        ]}
      />
      <div className="w-full flex gap-9 relative mt-10">
        {/* Scrollable content area */}
        <div className="lg:w-[75%] w-full">
          <div>
            <SlideShow
              images={[
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
              ]}
            />
          </div>
          <div className="w-full">
            <div className="lg:mt-[50px] mt-[25px] ">
              <pre className="text-justify">description</pre>
            </div>
            <div className="lg:mt-[50px] mt-[25px]">
              <Review total_review={150000} data={[]} />
            </div>
            <div className="w-full h-fit  px-5 py-7 border rounded-2xl border-[rgba(0,0,0,0.1)] flex lg:hidden flex-col gap-1.5">
              <h1 className="font-medium text-2xl">Information</h1>
              <div className="grid grid-cols-2 grid-row-2  py-3.5 px-1.5 gap-1 ">
                <div className="w-full flex gap-1.5 items-center py-3.5 px-3 ">
                  <Info className="text-[#333333]" size={16} />{" "}
                  <p className="text-[#333333]">parag</p>
                </div>
                <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
                  <Info className="text-[#333333]" size={16} />{" "}
                  <p className="text-[#333333]">parag</p>
                </div>
                <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
                  <Info className="text-[#333333]" size={16} />{" "}
                  <p className="text-[#333333]">parag</p>
                </div>
                <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
                  <Info className="text-[#333333]" size={16} />{" "}
                  <p className="text-[#333333]">parag</p>
                </div>
              </div>
              <div className="w-full border-y border-[rgba(0,0,0,0.1)] py-2">
                <p className=" flex justify-between text-2xl py-2.5">
                  <span>Price:</span>
                  <span className="font-semibold">$150 USD</span>
                </p>
              </div>
              <button className="w-full bg-primary py-2 text-white rounded-4xl cursor-pointer mt-20">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Sticky sidebar */}
        <div className="w-[25%] h-fit sticky top-12 px-5 py-7 border rounded border-[rgba(0,0,0,0.1)] lg:flex hidden flex-col gap-1.5">
          <h1 className="font-medium text-2xl">Information</h1>
          <div className="grid grid-cols-2 grid-row-2   py-3.5 px-1.5 gap-1 ">
            <div className="w-full flex gap-1.5 items-center py-3.5 px-3 ">
              <Info className="text-[#333333]" size={16} />{" "}
              <p className="text-[#333333]">parag</p>
            </div>
            <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
              <Info className="text-[#333333]" size={16} />{" "}
              <p className="text-[#333333]">parag</p>
            </div>
            <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
              <Info className="text-[#333333]" size={16} />{" "}
              <p className="text-[#333333]">parag</p>
            </div>
            <div className="w-full flex gap-1.5 items-center py-3.5 px-3">
              <Info className="text-[#333333]" size={16} />{" "}
              <p className="text-[#333333]">parag</p>
            </div>
          </div>
          <div className="w-full border-y border-[rgba(0,0,0,0.1)] py-2">
            <p className=" flex justify-between text-2xl py-2.5">
              <span>Price:</span>
              <span className="font-semibold">$150 USD</span>
            </p>
          </div>
          <button className="w-full bg-primary py-2 text-white rounded-4xl cursor-pointer mt-40">
            Apply
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
