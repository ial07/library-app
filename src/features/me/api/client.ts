import { apiInstance } from "@/api/client";
import type { ApiResponse } from "@/types";
import type { LoansResponse } from "@/types/Loan";
import type { ProfileResponse } from "@/types/Profile";
import type { ReviewListResponse } from "@/types/Review";
import type { AxiosError } from "axios";

// Get Me
export async function getMe(
): Promise<ApiResponse<ProfileResponse>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<ProfileResponse>>("/me");

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}

// Get Me Loan
export async function getMeLoans(
    status?: "--" | "BORROWED" | "LATE" | "RETURNED",
     page: number = 1,
    limit: number = 10,
): Promise<ApiResponse<LoansResponse>> {
  try {
    const params: Record<string, string | number|undefined> = { page, limit };
   if (status && status !== "--") params.status = status;
    const { data } = await apiInstance.get<ApiResponse<LoansResponse>>("/me/loans", {
      params,
    });

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}

// Get Me Loan
export async function getMeReview(
     page: number = 1,
    limit: number = 10,
): Promise<ApiResponse<ReviewListResponse>> {
  try {
    const params: Record<string, string | number|undefined> = { page, limit };
    const { data } = await apiInstance.get<ApiResponse<ReviewListResponse>>("/me/reviews", {
      params,
    });

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}