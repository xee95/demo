"use client";

import { LoginForm } from "../../components/login-form";

export default function LoginPage() {
  const handleToggle = () => {
    // logic to switch to RegisterPage (or open a modal, etc.)
    console.log("Switch to Register Page");
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm onToggle={handleToggle} />
      </div>
    </div>
  );
}
