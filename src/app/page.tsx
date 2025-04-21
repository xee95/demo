"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthPage } from "@/components/auth-page"

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isAuthenticated") === "true"
    if (isLoggedIn) {
      router.push("/home")
    }
  }, [router])

  return <AuthPage />
}
