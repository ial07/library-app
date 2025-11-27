// useLoan.ts
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { getLoans, postLoans } from "../api/client";
import type { LoanPayload, LoansResponse } from "@/types/Loan";
import type { ApiResponse } from "@/types";

export const useLoan = () => {
  const loanMutation = useMutation({
    mutationFn: (payload: LoanPayload) => postLoans(payload),
  });

return { loanMutation };
};


export function useGetLoans(
) {
  return useQuery<LoansResponse, Error>({
    queryKey: ["category"],
    queryFn: async () => {
      const res: ApiResponse<LoansResponse> =
        await getLoans()

      return res.data 
    },
    placeholderData: keepPreviousData,
  })
}