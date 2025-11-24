import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormValues, loginSchema } from "../schema/authSchema";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = { onSwitch: () => void };

const LoginForm: React.FC<Props> = ({ onSwitch }) => {
  const { loginMutation, isLoading, isError, errorMessage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <>
      <h1 className="display-xs-bold md:display-sm-bold mb-2">Login</h1>
      <p className="text-sm-semibold md:text-md-semibold mb-5 text-neutral-700">
        Login to continue.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          id="email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        {isError && <p className="text-sm text-red-500 mb-3">{errorMessage}</p>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Masuk"}
        </Button>
      </form>

      <Button variant="link" type="button" onClick={onSwitch}>
        Belum punya akun? Daftar
      </Button>
    </>
  );
};

export default LoginForm;
