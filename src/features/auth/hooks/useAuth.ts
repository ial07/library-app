// src/features/auth/hooks/useAuth.ts
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "@/features/auth/authSlice";
import {
  login,
  register
} from "../api/client";
import type { LoginPayload, AuthState, registerPayload } from "@/types/Auth";
import { type ApiResponse } from "@/types";
import type { User } from "@/types/Profile";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginMutation = useMutation<ApiResponse<AuthState>, Error, LoginPayload>({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setCredentials({ token: data.data.token!, user: data.data.user! }));
       navigate("/home");
    },
  });

  const registerMutation = useMutation<ApiResponse<User>, Error, registerPayload>({
    mutationFn: register,
    onSuccess: () => {
      navigate("/");
    },
  });

  const isLoading = loginMutation.isPending || registerMutation.isPending;
  const isError = loginMutation.isError || registerMutation.isError;
  const errorMessage =
    loginMutation.error?.message || registerMutation.error?.message || "";

  return { loginMutation, registerMutation, isLoading, isError, errorMessage };
};
