// src/features/auth/components/AuthForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authSchema, type AuthFormValues } from "../schema/authSchema";
import { useAuth } from "../hooks/useAuth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { loginMutation, registerMutation, isLoading, isError, errorMessage } =
    useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (values: AuthFormValues) => {
    if (isLogin) {
      loginMutation.mutate(values);
    } else {
      registerMutation.mutate(values);
    }
  };

  return (
    <div className="w-100 mx-auto">
      <img src="icons/Logo.svg" className="mb-5" />
      <h1 className="display-xs-bold md:display-sm-bold mb-2">
        {isLogin ? "Login" : "Register"}
      </h1>
      <p className="text-sm-semibold md:text-md-semibold mb-5 text-neutral-700">
        Create your account to start borrowing books.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <>
            <Input
              label="Nama"
              id="name"
              type="text"
              {...register("name")}
              error={errors.name?.message}
            />
          </>
        )}

        <Input
          label="Email"
          id="email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        {!isLogin && (
          <Input
            label="Nomor Handphone"
            id="nohp"
            type="number"
            {...register("nohp")}
            error={errors.nohp?.message}
          />
        )}
        <Input
          label="Password"
          id="password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        {!isLogin && (
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        )}

        {isError && <p className="text-sm text-red-500 mb-3">{errorMessage}</p>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : isLogin ? "Masuk" : "Daftar"}
        </Button>
      </form>

      <Button
        variant="link"
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        disabled={isLoading}
      >
        {isLogin ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
      </Button>
    </div>

    // <Card className="w-100 mx-auto">
    //   <CardHeader>
    //     <CardTitle>{isLogin ? "Masuk" : "Daftar"}</CardTitle>
    //     <CardDescription>
    //       {isLogin ? "Gunakan email dan password." : "Isi data registrasi."}
    //     </CardDescription>
    //   </CardHeader>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <CardContent className="space-y-4">
    //       {!isLogin && (
    //         <>
    //           <Input
    //             label="Nama"
    //             id="name"
    //             type="text"
    //             {...register("name")}
    //             error={errors.name?.message}
    //           />
    //         </>
    //       )}

    //       <Input
    //         label="Email"
    //         id="email"
    //         type="email"
    //         {...register("email")}
    //         error={errors.email?.message}
    //       />
    //       {!isLogin && (
    //         <Input
    //           label="Nomor Handphone"
    //           id="nohp"
    //           type="number"
    //           {...register("nohp")}
    //           error={errors.nohp?.message}
    //         />
    //       )}
    //       <Input
    //         label="Password"
    //         id="password"
    //         type="password"
    //         {...register("password")}
    //         error={errors.password?.message}
    //       />

    //       {!isLogin && (
    //         <Input
    //           label="Confirm Password"
    //           id="confirmPassword"
    //           type="confirmPassword"
    //           {...register("confirmPassword")}
    //           error={errors.confirmPassword?.message}
    //         />
    //       )}

    //       {isError && (
    //         <p className="text-sm text-red-500 mb-3">{errorMessage}</p>
    //       )}
    //     </CardContent>

    //     <CardFooter className="flex flex-col space-y-3">
    //       <Button type="submit" className="w-full" disabled={isLoading}>
    //         {isLoading ? "Loading..." : isLogin ? "Masuk" : "Daftar"}
    //       </Button>

    //       <Button
    //         variant="link"
    //         type="button"
    //         onClick={() => setIsLogin(!isLogin)}
    //         disabled={isLoading}
    //       >
    //         {isLogin ? "Belum punya akun? Daftar" : "Sudah punya akun? Masuk"}
    //       </Button>
    //     </CardFooter>
    //   </form>
    // </Card>
  );
};

export default AuthForm;
