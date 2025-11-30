"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface Feedback {
  id: number
  nom: string
  email: string
  telephone: string
  statut: string
  scores: string
}

const Maliste = () => {
  const [feedbacks] = useState<Feedback[]>([
    {
      id: 1,
      nom: "malundama",
      email: "infi@btconstruct.cd",
      telephone: "0895672120",
      statut: "Ouvert",
      scores: "Urgent",
    },
    {
      id: 2,
      nom: "kitoko mukwa",
      email: "commercial@construct.org",
      telephone: "0895672120",
      statut: "En cours de traitement",
      scores: "Pertinent",
    },
    {
      id: 4,
      nom: "lelo lola",
      email: "infi@mkcons.com",
      telephone: "0895672120",
      statut: "Clôturé",
      scores: "Sans objet",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold" style={{ color: "#14a3b8" }}>
          Feedbacks et Réponses
        </h2>
      </div>

      <div className="rounded-lg bg-white shadow">
        <div className="flex items-center border-b" style={{ backgroundColor: "#14a3b8" }}>
          <button className="flex items-center gap-2 px-6 py-3 text-white font-medium">
            Liste des Feedbacks
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <select className="rounded border border-gray-300 px-3 py-2 text-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-sm text-gray-600">Enregistrement par page</span>
            </div>

            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Recherchez un ménage"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: "#14a3b8" }}>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    ID
                    <ChevronDown className="ml-1 inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Nom
                    <ChevronDown className="ml-1 inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    E-mail
                    <ChevronDown className="ml-1 inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Téléphone
                    <ChevronDown className="ml-1 inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Statut
                    <ChevronDown className="ml-1 inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">scores</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {feedbacks.map((feedback, index) => (
                  <tr key={feedback.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border-t px-4 py-4 text-sm">{feedback.id}</td>
                    <td className="border-t px-4 py-4 text-sm">{feedback.nom}</td>
                    <td className="border-t px-4 py-4 text-sm">{feedback.email}</td>
                    <td className="border-t px-4 py-4 text-sm">{feedback.telephone}</td>
                    <td className="border-t px-4 py-4 text-sm">{feedback.statut}</td>
                    <td className="border-t px-4 py-4 text-sm">{feedback.scores}</td>
                    <td className="border-t px-4 py-4">
                      <div className="relative">
                        <Button
                          onClick={() => setActiveDropdown(activeDropdown === feedback.id ? null : feedback.id)}
                          className="w-32 justify-between font-semibold"
                          style={{ backgroundColor: "#a8d5e2", color: "#333" }}
                        >
                          ACTIONS
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        {activeDropdown === feedback.id && (
                          <div className="absolute right-0 z-10 mt-1 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
                            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Lire</button>
                            <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                              Supprimer
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              className="text-sm bg-transparent"
              style={{ color: "#14a3b8", borderColor: "#14a3b8" }}
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              className="text-sm bg-transparent"
              style={{ color: "#14a3b8", borderColor: "#14a3b8" }}
            >
              1
            </Button>
            <Button
              variant="outline"
              className="text-sm bg-transparent"
              style={{ color: "#14a3b8", borderColor: "#14a3b8" }}
            >
              2
            </Button>
            <Button
              variant="outline"
              className="text-sm bg-transparent"
              style={{ color: "#14a3b8", borderColor: "#14a3b8" }}
            >
              3
            </Button>
            <Button
              variant="outline"
              className="text-sm bg-transparent"
              style={{ color: "#14a3b8", borderColor: "#14a3b8" }}
            >
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maliste
