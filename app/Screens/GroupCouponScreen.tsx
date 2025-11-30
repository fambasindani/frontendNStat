"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu"
import { ChevronDown, Send, Users } from "lucide-react"

const categories = ["Ville", "Quartier", "Zone de santé", "Aire de santé", "Cluster"]

const listesParCategorie: Record<string, string[]> = {
  Ville: ["Kinshasa", "Matadi", "Boma"],
  Quartier: ["Ngaliema", "Lemba", "Bandalungwa"],
  "Zone de santé": ["Binza", "Kikimi"],
  "Aire de santé": ["AS 1", "AS 2"],
  Cluster: ["Cluster A", "Cluster B"]
}

const GroupCouponScreen = () => {
  const [categorie, setCategorie] = useState("")
  const [categorieLiee, setCategorieLiee] = useState("")
  const [sms, setSms] = useState("")
  const maxLength = 200

  // nombre simulé de ménages
  const menages = categorieLiee ? 47 : 0

  const handleSend = () => {
    if (!categorie || !categorieLiee || !sms) {
      alert("Veuillez tout remplir")
      return
    }

    alert("Coupons envoyés avec succès ✅")
    setCategorie("")
    setCategorieLiee("")
    setSms("")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="rounded-md border-2 bg-white shadow-sm" style={{ borderColor: "#14a3b8" }}>

          {/* HEADER */}
          <div className="px-10 pt-6 pb-4">
            <h2 className="text-xl font-bold text-[#14a3b8]">
              Transmission Groupée des coupons
            </h2>
            <hr className="mt-4" />
          </div>

          {/* FORM */}
          <div className="px-10 pb-10">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

              {/* CATEGORIE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Catégorie
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex h-11 w-full items-center justify-between rounded bg-gray-200 px-4 text-sm">
                      {categorie || "Sélectionner"}
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[280px] rounded-md border bg-white shadow-lg">
                    {categories.map((cat) => (
                      <DropdownMenuItem
                        key={cat}
                        onClick={() => {
                          setCategorie(cat)
                          setCategorieLiee("")
                        }}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      >
                        {cat}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* CATEGORIE LIEE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Catégorie liée
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex h-11 w-full items-center justify-between rounded bg-gray-200 px-4 text-sm">
                      {categorieLiee || "Liste de : " + (categorie || "...")}
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-[280px] rounded-md border bg-white shadow-lg">
                    {(listesParCategorie[categorie] || []).map((item) => (
                      <DropdownMenuItem
                        key={item}
                        onClick={() => setCategorieLiee(item)}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* SMS */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contenu SMS
              </label>
              <textarea
                value={sms}
                maxLength={maxLength}
                onChange={(e) => setSms(e.target.value)}
                className="h-40 w-full resize-none rounded-md border border-gray-300 p-4 text-sm focus:border-[#14a3b8] focus:ring-2 focus:ring-[#14a3b8]/30"
              />
              <div className="mt-1 text-right text-xs text-gray-400">
                {sms.length} / {maxLength}
              </div>
            </div>

            {/* FOOTER ZONE */}
            <div className="mt-8 flex items-center justify-between">

              {/* MENAGES */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Users className="h-4 w-4 text-gray-500" />
                Envoyez à
                <span className="font-bold text-red-600">{menages}</span>
                ménages
              </div>

              {/* BUTTON */}
              <Button
                onClick={handleSend}
                className="flex items-center gap-2 rounded-md px-10 py-3 text-white"
                style={{ backgroundColor: "#0d9aa6" }}
              >
                Envoyer
                <Send size={16} />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupCouponScreen
