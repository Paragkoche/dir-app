"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tables } from "@/types/db";
import {
  getCategory,
  getSubCategoryByCategoryId,
  getSubSubCategoryByCategoryId,
} from "@/utils/data-fetch";
import { useEffect, useState } from "react";

const SubCategory = (props: { data: Tables<"subCategory">[] }) => {
  const [subCategory, setSubCategory] = useState<
    Tables<"subCategory">[] | null
  >([]);

  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null
  );
  const handleSubCategoryChange = async (id: string) => {
    setSelectedSubCategory(id);
    console.log(selectedSubCategory);

    setSubCategory([
      {
        name: "Loading...",
        slug: "",
        id: 0,
        category_id: 0,
        sub_category: null,
      },
    ]);
    const data = await getSubSubCategoryByCategoryId(Number(id));
    console.log(
      data.data?.length && data.data.some((item) => item.sub_category),
      data.data
    );

    setSubCategory(
      data.data?.length && data.data.some((item) => item.sub_category)
        ? [data.data[0].sub_category as Tables<"subCategory">]
        : null
    );
  };
  console.log(subCategory);

  return (
    <>
      <Select onValueChange={handleSubCategoryChange}>
        <SelectTrigger className="px-2 py-1.5 bg-background outline-none rounded-2xl cursor-pointer flex items-center justify-between gap-5 hover:text-primary uppercase">
          <SelectValue placeholder="Sub-Category" />
        </SelectTrigger>
        <SelectContent className="bg-background shadow-none rounded-none border-[rgba(0,0,0,.1)]  ">
          {props.data?.map((v) => (
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
      {subCategory && subCategory.length !== 0 && (
        <SubCategory data={subCategory} />
      )}
    </>
  );
};

const SearchFilter = () => {
  const [category, setCategory] = useState<Tables<"category">[] | null>([
    {
      name: "Loading...",
      slug: "",
      id: -1,
    },
  ]);
  const [subCategory, setSubCategory] = useState<Tables<"subCategory">[]>([
    {
      name: "Loading...",
      slug: "",
      id: 0,
      category_id: 0,
      sub_category: null,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // const [isCategoryOpen, setCategoryOpen] = useState(false);
  // const [isSubCategoryOpen, setSubCategoryOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getCategory();
      if (data.data?.length === 0) {
        setCategory([
          {
            name: "No Category",
            slug: "",
            id: -1,
          },
        ]);
      } else if (data.data) setCategory(data.data);
    })();
  }, []);

  const handleCategoryChange = async (id: string) => {
    setSelectedCategory(id);
    console.log(selectedCategory);

    setSubCategory([
      {
        name: "Loading...",
        slug: "",
        id: 0,
        category_id: 0,
        sub_category: null,
      },
    ]);
    const data = await getSubCategoryByCategoryId(Number(id));

    setSubCategory(
      data.data?.length
        ? data.data
        : [
            {
              id: -1,
              name: "No Sub-Category",
              slug: "",
              category_id: -1,
              sub_category: null,
            },
          ]
    );
  };

  return (
    <div className="flex items-start justify-start lg:w-[80%] gap-1.5 flex-wrap">
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
      <SubCategory data={subCategory} />
    </div>
  );
};

export default SearchFilter;
