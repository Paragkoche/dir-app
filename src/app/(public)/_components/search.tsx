import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";
import SearchFilter from "./search-filter";
const Search = () => {
  return (
    <div className="flex  flex-col items-center justify-center m-auto w-full gap-2.5">
      <div className=" w-[80%]  flex items-center gap-2.5 bg-[rgba(0,0,0,.75)] px-2.5 py-1.5 rounded-[24px]">
        <input
          className="w-full outline-none text-white px-3.5"
          placeholder="Search"
        />
        <Button className="rounded-[50%] cursor-pointer">
          <SearchIcon className="text-white" />
        </Button>
      </div>
      <SearchFilter />
    </div>
  );
};

export default Search;
