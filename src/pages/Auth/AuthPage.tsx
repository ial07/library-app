import AuthForm from "@/features/auth/components/AuthForm";
import React from "react";

const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center background p-4">
      <AuthForm />
    </div>
  );
};

export default AuthPage;
