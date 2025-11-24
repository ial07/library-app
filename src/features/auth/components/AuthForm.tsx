import React from "react";
import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") === "register" ? false : true;

  const [isLogin, setIsLogin] = React.useState(initialType);

  return (
    <div className="w-100 mx-auto">
      <img src="icons/Logo.svg" className="mb-5" />
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default AuthForm;
