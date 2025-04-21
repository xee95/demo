"use client"

import { useState } from "react"
import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        {isLogin ? <LoginForm onToggle={() => setIsLogin(false)} /> : <SignupForm onToggle={() => setIsLogin(true)} />}
      </div>
    </div>
  )
}
