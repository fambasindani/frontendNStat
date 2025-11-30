"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"


const AjoutEntrepriseScreen = () => {
  const [formData, setFormData] = useState({
    nomEntreprise: "",
    adresse: "",
    telephone: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Entreprise ajoutée:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
          Ajouter une entreprise
        </h1>

        <div className="rounded-lg border-4 bg-white p-12" style={{ borderColor: "#14a3b8" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Nom de l'entreprise */}
              <div>
                <label className="mb-2 block text-base font-medium text-gray-700">Nom de l&apos;entreprise</label>
                <Input
                  type="text"
                  value={formData.nomEntreprise}
                  onChange={(e) => handleChange("nomEntreprise", e.target.value)}
                  className="h-12 border-2 border-gray-300 bg-gray-100"
                />
              </div>

              {/* Adresse */}
              <div>
                <label className="mb-2 block text-base font-medium text-gray-700">Adresse</label>
                <Input
                  type="text"
                  value={formData.adresse}
                  onChange={(e) => handleChange("adresse", e.target.value)}
                  className="h-12 border-2 border-gray-300 bg-gray-100"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="mb-2 block text-base font-medium text-gray-700">Téléphone</label>
                <Input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleChange("telephone", e.target.value)}
                  className="h-12 border-2 border-gray-300 bg-gray-100"
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="mb-2 block text-base font-medium text-gray-700">E-mail</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-12 border-2 border-gray-300 bg-gray-100"
                />
              </div>
            </div>

            {/* Bouton Ajouter */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="flex items-center gap-3 rounded-md px-10 py-3 text-lg font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#14a3b8" }}
              >
                Ajouter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="m8 12 4 4 4-4" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AjoutEntrepriseScreen
