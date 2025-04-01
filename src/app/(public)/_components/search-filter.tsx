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
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
    setSubCategory([
      {
        name: "Loading...",
        created_at: "",
        slug: "",
        id: 0,
      },
    ]);
    const data = await getSubCategoryByCategoryId(id);

    if (data.data?.length == 0)
      setSubCategory([
        {
          name: "No Subcategory",
          created_at: "",
          id: -1,
          slug: "",
        },
      ]);
    else setSubCategory(data.data);
  };
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isSubCategoryOpen, setSubCategoryOpen] = useState(false);
  return (
    <div className="flex items-start justify-start lg:w-[80%] gap-1.5">
      <DropdownMenu onOpenChange={(isOpen) => setCategoryOpen(isOpen)}>
        <DropdownMenuTrigger className="px-1.5 py-1.5 bg-background outline-none rounded-2xl cursor-pointer">
          <span
            className={`flex items-center justify-between gap-5 ${
              isCategoryOpen ? "text-primary" : ""
            } hover:text-primary uppercase`}
          >
            Category
            <motion.div
              animate={{ rotate: isCategoryOpen ? -180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown width={16} height={16} />
            </motion.div>
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background  shadow-none rounded-none border-[rgba(0,0,0,.1)]">
          {category?.map((v, i) => (
            <DropdownMenuItem
              key={i}
              onClick={async () => await handleCategory(v.id)}
              className="hover:text-primary-foreground uppercase hover:bg-none cursor-pointer"
            >
              {v.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu onOpenChange={(isOpen) => setSubCategoryOpen(isOpen)}>
        <DropdownMenuTrigger className="px-2 py-1.5 bg-background outline-none rounded-2xl cursor-pointer">
          <span
            className={`flex items-center justify-between gap-5 ${
              isSubCategoryOpen ? "text-primary" : ""
            } hover:text-primary uppercase`}
          >
            Sub-Category
            <motion.div
              animate={{ rotate: isSubCategoryOpen ? -180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown width={16} height={16} />
            </motion.div>
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background   shadow-none rounded-none border-[rgba(0,0,0,.1)]">
          {subCategory?.map((v, i) => (
            <DropdownMenuItem
              key={i}
              className="hover:text-primary-foreground uppercase hover:bg-none cursor-pointer"
            >
              {v.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchFilter;
