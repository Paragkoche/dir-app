"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tables } from "@/types/db";
import { getCategory, getSubCategoryByCategoryId } from "@/utils/data-fetch";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [category, setCategory] = useState<Tables<"category">[] | null>();
  const [subCategory, setSubCategory] = useState<
    Tables<"subCategory">[] | null
  >();
  useEffect(() => {
    (async () => {
      const data = await getCategory();
      if (data.data) setCategory(data.data);
    })();
  }, []);

  const handleCategory = async (id: number) => {
    const data = await getSubCategoryByCategoryId(id);
    setSubCategory(data.data);
  };
  return (
    <div className="flex items-start justify-start lg:w-[80%] gap-1.5">
      <DropdownMenu>
        <DropdownMenuTrigger>Category</DropdownMenuTrigger>
        <DropdownMenuContent>
          {category?.map((v, i) => (
            <DropdownMenuItem
              key={i}
              onClick={async () => await handleCategory(v.id)}
            >
              {v.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>Sub-Category</DropdownMenuTrigger>
        <DropdownMenuContent>
          {subCategory?.map((v, i) => (
            <DropdownMenuItem key={i}>{v.name}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchFilter;
