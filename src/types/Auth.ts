export type User = {
    id: string;
    name: string;
    email?: string;
    phoneNumber?:string;
    role?:"USER"|"ADMIN"
  }

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

