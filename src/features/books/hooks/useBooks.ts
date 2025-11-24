import type { BookListResponse } from "@/types/Book";
import { getBooks } from "../api/client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types";

export function useBooks(
  q?: string,
  page: number = 1,
  limit: number = 10,
  categoryId?: number,
  authorId?: number,
) {
  return useQuery<BookListResponse, Error>({
    queryKey: ["books", q, page, limit, categoryId, authorId],
    queryFn: async () => {
      const res: ApiResponse<BookListResponse> =
        await getBooks(q, page, limit, categoryId, authorId)

      return res.data         // hanya respon data yang dibutuhkan
    },
    placeholderData: keepPreviousData,
  })
}
