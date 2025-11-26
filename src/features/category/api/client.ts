import { apiInstance } from "@/api/client";
import type { ApiResponse } from "@/types";
import type {  ListCategories } from "@/types/Category";
import type { AxiosError } from "axios";

// Get Categories
export async function getCategories(
): Promise<ApiResponse<ListCategories>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<ListCategories>>("/categories");

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}