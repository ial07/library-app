import type { User } from "./Profile";


export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
}

export interface registerPayload {
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
}

