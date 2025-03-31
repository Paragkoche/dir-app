"use server";
import { CSRcreateClient } from "@/lib/csr.supabase";

export const getCategory = async () =>
  CSRcreateClient().from("category").select("*");

export const getSubCategoryByCategoryId = async (id: number) =>
  CSRcreateClient().from("subCategory").select("*").eq("category_id", id);
