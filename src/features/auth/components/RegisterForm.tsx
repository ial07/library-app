import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type RegisterFormValues, registerSchema } from "../schema/authSchema";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { useEffect } from "react";

type Props = { onSwitch: () => void };

const RegisterForm: React.FC<Props> = ({ onSwitch }) => {
  const { registerMutation, isLoading, isError, errorMessage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (values: RegisterFormValues) => {
    registerMutation.mutate(values);
  };

  useEffect(() => {
    if (isError) toast.error(errorMessage);
  }, [errorMessage]);

  return (
    <>
      <h1 className="display-xs-bold md:display-sm-bold mb-2">Register</h1>
      <p className="text-sm-semibold md:text-md-semibold mb-5 text-neutral-700">
        Create your account.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nama"
          id="name"
          type="text"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Nomor Handphone"
          id="nohp"
          type="number"
          {...register("nohp")}
          error={errors.nohp?.message}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Daftar"}
        </Button>
      </form>

      <Button variant="link" type="button" onClick={onSwitch}>
        Sudah punya akun? Masuk
      </Button>
    </>
  );
};

export default RegisterForm;
