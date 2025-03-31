import { CSRcreateClient } from "@/lib/csr.supabase";

export const getCategory = () =>
  CSRcreateClient().from("category").select("name,slug");

export const getSubCategoryByCategoryId = (id: number) =>
  CSRcreateClient()
    .from("subCategory")
    .select("name,slub")
    .eq("category_id", id);
