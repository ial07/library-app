// src/features/auth/schema/authSchema.ts
import { z } from "zod";

export const authSchema = z.object({
  name: z.string().min(3),
  email: z.string().email("Email salah"),
  password: z.string().min(6, "Minimal 6 karakter"),
  nohp: z.string().optional(),
  confirmPassword: z.string().optional(),
}).refine((data) => {
  if (!data.name && !data.nohp) return true;
  return data.password === data.confirmPassword;
}, { message: "Password tidak sama", path: ["confirmPassword"] });

export type AuthFormValues = z.infer<typeof authSchema>;
