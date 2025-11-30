"use client"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Send } from "lucide-react"

const TransmissionScreen = () => {
  const [idMenage, setIdMenage] = useState("")
  const [nomChef, setNomChef] = useState("")
  const [sms, setSms] = useState("")
  const maxLength = 200

  const handleSubmit = () => {
    if (!idMenage || !nomChef || !sms) {
      alert("Veuillez remplir tous les champs.")
      return
    }

    alert("Coupon transmis avec succès ✅")
    setIdMenage("")
    setNomChef("")
    setSms("")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* WRAPPER PRINCIPAL → gère les marges */}
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12">

        {/* CONTENEUR BLANC */}
        <div
          className="rounded-md border-2 bg-white shadow-sm"
          style={{ borderColor: "#14a3b8" }}
        >

          {/* TITRE */}
          <div className="px-10 pt-6 pb-4">
            <h2 className="text-xl font-bold" style={{ color: "#14a3b8" }}>
              Transmission de coupon
            </h2>
            <hr className="mt-4" />
          </div>

          {/* FORMULAIRE */}
          <div className="px-10 pb-10">

            {/* LIGNE 1 */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  ID du Ménage
                </label>
                <Input
                  value={idMenage}
                  onChange={(e) => setIdMenage(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Nom du chef de ménage
                </label>
                <Input
                  value={nomChef}
                  onChange={(e) => setNomChef(e.target.value)}
                />
              </div>
            </div>

            {/* SMS */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contenu SMS
              </label>
              <textarea
                value={sms}
                onChange={(e) => setSms(e.target.value.slice(0, maxLength))}
                className="h-48 w-full resize-none rounded-md border border-gray-300 p-4 text-sm shadow-sm focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/30"
              />
              <div className="mt-1 text-right text-xs text-gray-400">
                {sms.length} / {maxLength}
              </div>
            </div>

            {/* BOUTON */}
            <div className="mt-10 flex justify-center">
              <Button
                onClick={handleSubmit}
                className="flex items-center gap-2 rounded-md px-10 py-3 text-white"
                style={{ backgroundColor: "#14a3b8" }}
              >
                Envoyer
                <Send className="h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TransmissionScreen
