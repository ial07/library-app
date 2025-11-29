// useLoan.ts
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { getLoans, postLoans, putReturnLoan } from "../api/client";
import type { LoanPayload, LoansListResponse } from "@/types/Loan";
import type { ApiResponse } from "@/types";

export const useLoan = () => {
  const postLoanMutation = useMutation({
    mutationFn: (payload: LoanPayload) => postLoans(payload),
  });

  const putLoanMutation = useMutation({
    mutationFn: (id: string) => putReturnLoan(id),
  });

  const isLoading = postLoanMutation.isPending || putLoanMutation.isPending;
  const isError = putLoanMutation.isError || putLoanMutation.isError;
  const errorMessage =
    postLoanMutation.error?.message || putLoanMutation.error?.message || "";

  return {
    postLoanMutation,
    putLoanMutation,
    isLoading,
    isError,
    errorMessage,
  };
};

export function useGetLoans() {
  return useQuery<LoansListResponse, Error>({
    queryKey: ["category"],
    queryFn: async () => {
      const res: ApiResponse<LoansListResponse> = await getLoans();

      return res.data;
    },
    placeholderData: keepPreviousData,
  });
}
