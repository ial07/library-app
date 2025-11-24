import { apiInstance } from "@/api/client";
import type { ApiResponse } from "@/types";
import type {ListAuthorResponse, ListBooksAuthorResponse } from "@/types/Author";
import type { AxiosError } from "axios";

// Get Author
export async function getAuthor(
): Promise<ApiResponse<ListAuthorResponse>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<ListAuthorResponse>>("/authors");

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}

// List Book By Author
export async function getListBooksAuthor(
    id:number
): Promise<ApiResponse<ListBooksAuthorResponse>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<ListBooksAuthorResponse>>(`/authors/${id}/books`);

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}