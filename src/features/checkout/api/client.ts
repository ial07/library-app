import { apiInstance } from "@/api/client"
import type { ApiResponse } from "@/types"
import type { LoanPayload, LoansResponse } from "@/types/Loan"
import type { AxiosError } from "axios"

// POST Loans
export async function postLoans(
  payload: LoanPayload
): Promise<ApiResponse<LoansResponse>> {
  try {
    const res = await apiInstance.post<ApiResponse<LoansResponse>>(
      '/loans',
      payload
    )
    return res.data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}

// Get Loans
export async function getLoans(
): Promise<ApiResponse<LoansResponse>> {
  try {

    const { data } = await apiInstance.get<ApiResponse<LoansResponse>>("/loans/my");

    return data
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>
    throw err.response?.data
  }
}