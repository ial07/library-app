import type { ApiResponse } from "@/types"
import type { ProfileResponse } from "@/types/Profile"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getMe, getMeLoans, getMeReview } from "../api/client"
import type { LoansResponse } from "@/types/Loan"
import type { ReviewListResponse } from "@/types/Review"

export function useMe(
) {
  return useQuery<ProfileResponse, Error>({
    queryKey: ["me"],
    queryFn: async () => {
      const res: ApiResponse<ProfileResponse> =
        await getMe()

      return res.data
    },
  })
}


export function useMeLoans(
    status: "--" | "BORROWED" | "LATE" | "RETURNED" = "--",
    page: number = 1,
    limit: number = 10,
) {
  return useQuery<LoansResponse, Error>({
    queryKey: ["books", status, page, limit],
    queryFn: async () => {
      const res: ApiResponse<LoansResponse> =
        await getMeLoans(status, page, limit)

      return res.data   
    },
    placeholderData: keepPreviousData,
  })
}

export function useMeReview(
    page: number = 1,
    limit: number = 10,
) {
  return useQuery<ReviewListResponse, Error>({
    queryKey: ["books",  page, limit],
    queryFn: async () => {
      const res: ApiResponse<ReviewListResponse> =
        await getMeReview( page, limit)

      return res.data   
    },
    placeholderData: keepPreviousData,
  })
}