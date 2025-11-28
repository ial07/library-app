import { apiInstance } from "@/api/client"
import type { ApiResponse } from "@/types"
import type { ReviewPayload, ReviewResponse } from "@/types/Review"
import type { AxiosError } from "axios"

// POST Review
export async function review(
  payload: ReviewPayload
): Promise<ApiResponse<ReviewResponse>> {
  try {
    const res = await apiInstance.post<ApiResponse<ReviewResponse>>(
      '/reviews',
      payload
    )
    return res.data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}