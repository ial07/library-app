import { apiInstance } from "@/api/client";
import type { ApiResponse } from "@/types";
import type {
  LoanPayload,
  LoanResponse,
  LoansListResponse,
} from "@/types/Loan";
import type { AxiosError } from "axios";

// POST Loans
export async function postLoans(
  payload: LoanPayload
): Promise<ApiResponse<LoansListResponse>> {
  try {
    const res = await apiInstance.post<ApiResponse<LoansListResponse>>(
      "/loans",
      payload
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>;
    throw err.response?.data;
  }
}

// Get Loans
export async function getLoans(): Promise<ApiResponse<LoansListResponse>> {
  try {
    const { data } = await apiInstance.get<ApiResponse<LoansListResponse>>(
      "/loans/my"
    );

    return data;
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>;
    throw err.response?.data;
  }
}

// PUT return Loans
export async function putReturnLoan(
  id: string
): Promise<ApiResponse<LoanResponse>> {
  try {
    const res = await apiInstance.patch<ApiResponse<LoanResponse>>(
      `/loans/${id}/return`
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError<ApiResponse<null>>;
    throw err.response?.data;
  }
}
