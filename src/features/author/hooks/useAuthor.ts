import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types";
import type { ListAuthorResponse, ListBooksAuthorResponse } from "@/types/Author";
import { getAuthor, getListBooksAuthor } from "../api/client";

export function useAuthor(
) {
  return useQuery<ListAuthorResponse, Error>({
    queryKey: ["author"],
    queryFn: async () => {
      const res: ApiResponse<ListAuthorResponse> =
        await getAuthor()

      return res.data         // hanya respon data yang dibutuhkan
    },
    placeholderData: keepPreviousData,
  })
}

export function useListBooksAuthor(
  id:number
) {
  return useQuery<ListBooksAuthorResponse, Error>({
    queryKey: ["listBooksAuthor",id],
    queryFn: async () => {
      const res: ApiResponse<ListBooksAuthorResponse> =
        await getListBooksAuthor(id)

      return res.data 
    },
    placeholderData: keepPreviousData,
  })
}
