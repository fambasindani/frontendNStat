"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "../components/ui/input" 
import { Button } from "../components/ui/button"

const AssignationScreen = () => {
  const [codeCoupon, setCodeCoupon] = useState("")
  const [selectedEntreprise, setSelectedEntreprise] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)

  const entreprises = ["BT Construct", "MK immo"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Assignation:", { codeCoupon, entreprise: selectedEntreprise })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
          Assignation des coupons
        </h1>

        <div className="rounded-lg border-4 bg-white p-12" style={{ borderColor: "#14a3b8" }}>
          <form onSubmit={handleSubmit}>
            <div className="flex items-end gap-6">
              {/* Code coupon électronique */}
              <div className="flex-1">
                <label className="mb-2 block text-base font-medium text-gray-700">Code coupon électronique</label>
                <Input
                  type="text"
                  value={codeCoupon}
                  onChange={(e) => setCodeCoupon(e.target.value)}
                  className="h-12 border-2 border-gray-300 bg-gray-100"
                />
              </div>

              {/* Entreprise dropdown */}
              <div className="relative flex-1">
                <label className="mb-2 block text-base font-medium text-gray-700">Entreprise</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex h-12 w-full items-center justify-between rounded-md border-2 border-gray-300 bg-gray-100 px-3 text-left text-base transition-colors hover:bg-gray-200"
                  >
                    <span className={selectedEntreprise ? "text-gray-900" : "text-gray-500"}>
                      {selectedEntreprise || "Sélectionner"}
                    </span>
                    <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showDropdown && (
                    <div className="absolute z-10 mt-1 w-full rounded-md border-2 border-gray-300 bg-white shadow-lg">
                      {entreprises.map((entreprise) => (
                        <button
                          key={entreprise}
                          type="button"
                          onClick={() => {
                            setSelectedEntreprise(entreprise)
                            setShowDropdown(false)
                          }}
                          className="block w-full px-4 py-3 text-left text-base transition-colors hover:bg-gray-100"
                        >
                          {entreprise}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bouton Envoyer le code */}
              <Button
                type="submit"
                className="h-12 rounded-md px-8 text-base font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#14a3b8" }}
              >
                Envoyer le code
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AssignationScreen
