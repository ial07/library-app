import type { ApiResponse } from "@/types"
import type {  ListCategories } from "@/types/Category"
import { getCategories } from "../api/client"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export function useCategories(
) {
  return useQuery<ListCategories, Error>({
    queryKey: ["category"],
    queryFn: async () => {
      const res: ApiResponse<ListCategories> =
        await getCategories()

      return res.data 
    },
    placeholderData: keepPreviousData,
  })
}