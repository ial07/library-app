// src/features/auth/schema/authSchema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email salah"),
  password: z.string().min(6, "Minimal 6 karakter"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Email salah"),
    nohp: z.string().optional(),
    password: z.string().min(6, "Minimal 6 karakter"),
    confirmPassword: z.string().min(6, "Minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
