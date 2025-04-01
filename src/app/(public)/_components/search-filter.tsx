"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tables } from "@/types/db";
import { getCategory, getSubCategoryByCategoryId } from "@/utils/data-fetch";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [category, setCategory] = useState<Tables<"category">[] | null>(null);
  const [subCategory, setSubCategory] = useState<
    Tables<"subCategory">[] | null
  >([{ name: "Select Category", created_at: "", slug: "", id: -1 }]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // const [isCategoryOpen, setCategoryOpen] = useState(false);
  // const [isSubCategoryOpen, setSubCategoryOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getCategory();
      if (data.data) setCategory(data.data);
    })();
  }, []);

  const handleCategoryChange = async (id: string) => {
    setSelectedCategory(id);
    console.log(selectedCategory);

    setSubCategory([{ name: "Loading...", created_at: "", slug: "", id: 0 }]);
    const data = await getSubCategoryByCategoryId(Number(id));

    setSubCategory(
      data.data?.length
        ? data.data
        : [{ name: "No Subcategory", created_at: "", id: -1, slug: "" }]
    );
  };

  return (
    <div className="flex items-start justify-start lg:w-[80%] gap-1.5">
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="px-1.5 py-1.5 bg-background outline-none rounded-2xl cursor-pointer flex items-center justify-between gap-5 hover:text-primary uppercase">
          <SelectValue
            placeholder="Category"
            className="hover:data-[placeholder]:text-primary"
          />
        </SelectTrigger>
        <SelectContent className="bg-background shadow-none rounded-none border-[rgba(0,0,0,.1)] ">
          {category?.map((v) => (
            <SelectItem
              key={v.id}
              value={String(v.id)}
              className="hover:text-primary uppercase hover:bg-transparent focus:text-primary cursor-pointer "
            >
              {v.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="px-2 py-1.5 bg-background outline-none rounded-2xl cursor-pointer flex items-center justify-between gap-5 hover:text-primary uppercase">
          <SelectValue placeholder="Sub-Category" />
        </SelectTrigger>
        <SelectContent className="bg-background shadow-none rounded-none border-[rgba(0,0,0,.1)]  ">
          {subCategory?.map((v) => (
            <SelectItem
              key={v.id}
              value={String(v.id)}
              className="hover:text-primary uppercase hover:bg-transparent focus:text-primary cursor-pointer "
            >
              {v.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchFilter;
