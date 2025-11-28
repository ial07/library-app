import type { ApiResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { review } from "../api/client";
import type { ReviewPayload, ReviewResponse } from "@/types/Review";
import { useNavigate } from "react-router-dom";

export const useReview = () => {
    const navigate = useNavigate();
    const reviewMutation = useMutation<ApiResponse<ReviewResponse>, Error, ReviewPayload>({
        mutationFn: review,
        onSuccess: () => {
        navigate("/settings?type=reviews");
        },
    });
  return { reviewMutation };
}