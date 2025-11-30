"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button" 
import { Lock } from "lucide-react"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Login attempt:", { email, rememberMe })
    // Add login logic here
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Teal background */}
      <div className="hidden w-1/2 lg:block" style={{ backgroundColor: "#14a3b8" }} />

      {/* Right side - Login form */}
      <div className="flex w-full items-center justify-center bg-white px-6 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-bold">
              <span style={{ color: "#14a3b8" }}>N&apos;</span>
              <span className="text-yellow-400">Stat</span>
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-center text-3xl font-semibold" style={{ color: "#14a3b8" }}>
            Se connecter
          </h2>

          {/* Create account link */}
          <p className="text-center text-sm text-gray-600">
            Vous n&apos;avez pas un compte ?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Créer ici
            </a>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium" style={{ color: "#14a3b8" }}>
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium" style={{ color: "#14a3b8" }}>
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300"
                />
                <span className="text-sm text-gray-600">Se souvenir</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Mot de passe oublié
              </a>
            </div>

            {/* Submit button */}
            <Button type="submit" className="w-full text-white" style={{ backgroundColor: "#14a3b8" }}>
              <Lock className="mr-2 h-4 w-4" />
              Connexion
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
