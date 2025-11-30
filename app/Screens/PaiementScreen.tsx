"use client"

import { useState } from "react"
import { Input } from "../components/ui/input" 
import { Button } from "../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

const PaiementScreen = () => {
  const [activeTab, setActiveTab] = useState<"menages" | "entreprises">("menages")
  const [recordsPerPage, setRecordsPerPage] = useState(10)
  const [showRecordsDropdown, setShowRecordsDropdown] = useState(false)
  const [showStartCalendar, setShowStartCalendar] = useState(false)
  const [showEndCalendar, setShowEndCalendar] = useState(false)
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const paiements = [
    {
      id: 1,
      menage: "NTUMBA MBAY",
      telephone: "0895672120",
      montantPaye: "200 $",
      montantRestant: "0 $",
      dateDernierPaiement: "20-11-2025",
      montantRestantValue: 0,
    },
    {
      id: 2,
      menage: "KALONDA LUMU",
      telephone: "0895672120",
      montantPaye: "50 $",
      montantRestant: "150 $",
      dateDernierPaiement: "19-11-2025",
      montantRestantValue: 150,
    },
    {
      id: 4,
      menage: "KAKULE LENDO",
      telephone: "0895672120",
      montantPaye: "20 $",
      montantRestant: "180 $",
      dateDernierPaiement: "12-11-2025",
      montantRestantValue: 180,
    },
  ]

  const handleDateSelect = (day: number, type: "start" | "end") => {
    const formattedDate = `${day.toString().padStart(2, "0")}/07/2025`
    if (type === "start") {
      setStartDate(formattedDate)
      setShowStartCalendar(false)
    } else {
      setEndDate(formattedDate)
      setShowEndCalendar(false)
    }
  }

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="mb-8 flex gap-0">
        <button
          onClick={() => setActiveTab("menages")}
          className={`flex items-center gap-2 px-8 py-4 font-medium transition-colors ${
            activeTab === "menages" ? "text-white" : "bg-gray-300 text-gray-600 hover:bg-gray-350"
          }`}
          style={{
            backgroundColor: activeTab === "menages" ? "#14a3b8" : undefined,
          }}
        >
          <span className="text-lg">👥</span>
          Paiement des Ménages
        </button>
        <button
          onClick={() => setActiveTab("entreprises")}
          className={`flex items-center gap-2 px-8 py-4 font-medium transition-colors ${
            activeTab === "entreprises" ? "text-white" : "bg-gray-300 text-gray-600 hover:bg-gray-350"
          }`}
          style={{
            backgroundColor: activeTab === "entreprises" ? "#14a3b8" : undefined,
          }}
        >
          <span className="text-lg">🏢</span>
          Paiement des Entreprises
        </button>
      </div>

      {activeTab === "menages" && (
        <>
          <h2 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
            Paiement des Ménages
          </h2>

          {/* Payment Form */}
          <div className="mb-8 rounded-lg border-2 bg-white p-6 shadow-sm" style={{ borderColor: "#14a3b8" }}>
            <div className="mb-4 flex items-center gap-2 text-[#14a3b8]">
              <span className="text-xl">💵</span>
              <span className="font-medium">Effectuer un paiement</span>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">Numéro téléphone du ménage</label>
                <Input type="text" className="w-full" />
              </div>
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">Montant à payer</label>
                <Input type="text" className="w-full" />
              </div>
              <Button
                className="px-8 py-2 text-white shadow-md transition-all hover:shadow-lg"
                style={{ backgroundColor: "#14a3b8" }}
              >
                Payé
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 rounded-lg border-2 bg-white p-4 shadow-sm" style={{ borderColor: "#14a3b8" }}>
            <div className="flex items-center gap-4">
              {/* Search Input - Reduced width */}
              <div className="relative w-80">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <Input type="text" placeholder="Recherchez un ménage" className="w-full pl-10" />
              </div>

              {/* Date Range Filters */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Du</span>
                <div className="relative">
                  <button
                    onClick={() => setShowStartCalendar(!showStartCalendar)}
                    className="flex h-9 w-32 items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm hover:bg-gray-50"
                  >
                    <span>{startDate || "Sélectionner"}</span>
                    <span>📅</span>
                  </button>
                  {showStartCalendar && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white p-4 shadow-lg">
                      <div className="mb-2 text-center font-medium">July</div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        <div className="font-medium text-red-600">M</div>
                        <div className="font-medium">T</div>
                        <div className="font-medium">W</div>
                        <div className="font-medium">T</div>
                        <div className="font-medium">F</div>
                        <div className="font-medium">S</div>
                        <div className="font-medium">S</div>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <button
                            key={day}
                            className="rounded p-1 hover:bg-[#14a3b8] hover:text-white transition-colors"
                            onClick={() => handleDateSelect(day, "start")}
                          >
                            {day.toString().padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Au</span>
                <div className="relative">
                  <button
                    onClick={() => setShowEndCalendar(!showEndCalendar)}
                    className="flex h-9 w-32 items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm hover:bg-gray-50"
                  >
                    <span>{endDate || "Sélectionner"}</span>
                    <span>📅</span>
                  </button>
                  {showEndCalendar && (
                    <div className="absolute left-0 top-full z-10 mt-1 w-64 rounded-md border border-gray-200 bg-white p-4 shadow-lg">
                      <div className="mb-2 text-center font-medium">July</div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs">
                        <div className="font-medium text-red-600">M</div>
                        <div className="font-medium">T</div>
                        <div className="font-medium">W</div>
                        <div className="font-medium">T</div>
                        <div className="font-medium">F</div>
                        <div className="font-medium">S</div>
                        <div className="font-medium">S</div>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <button
                            key={day}
                            className="rounded p-1 hover:bg-[#14a3b8] hover:text-white transition-colors"
                            onClick={() => handleDateSelect(day, "end")}
                          >
                            {day.toString().padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Button className="px-6 text-white" style={{ backgroundColor: "#14a3b8" }}>
                Appliquer
              </Button>

              {/* Dropdown Menu with id and nom filter options */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="px-6 text-white" style={{ backgroundColor: "#5c7a8a" }}>
                    <span className="mr-2">⚙️</span>
                    FILTRE
                    <span className="ml-2">▼</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 border-2" style={{ borderColor: "#14a3b8" }}>
                  <DropdownMenuItem className="cursor-pointer py-2 text-[#14a3b8] hover:bg-gray-100">
                    id
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-2 text-[#14a3b8] hover:bg-gray-100">
                    nom
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Records per page selector */}
          <div className="mb-4 flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowRecordsDropdown(!showRecordsDropdown)}
                className="flex h-9 w-16 items-center justify-between rounded border border-gray-300 bg-white px-2 text-sm hover:bg-gray-50"
              >
                <span>{recordsPerPage}</span>
                <span>▼</span>
              </button>
              {showRecordsDropdown && (
                <div className="absolute z-10 mt-1 w-16 rounded border border-gray-300 bg-white shadow-lg">
                  {[10, 25, 50, 100].map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setRecordsPerPage(num)
                        setShowRecordsDropdown(false)
                      }}
                      className="block w-full px-2 py-1 text-left text-sm hover:bg-gray-100"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-sm text-gray-600">Enregistrement par page</span>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-lg border-2" style={{ borderColor: "#14a3b8" }}>
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="border-b-2" style={{ borderColor: "#14a3b8" }}>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">ID</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Ménage</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Téléphone</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Montant payé</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Montant restant</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Date dernier paiement</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-700">Statut</th>
                </tr>
              </thead>
              <tbody>
                {paiements.map((paiement, index) => (
                  <tr key={paiement.id} className={index !== paiements.length - 1 ? "border-b" : ""}>
                    <td className="p-3 text-sm text-gray-700">{paiement.id}</td>
                    <td className="p-3 text-sm text-gray-700">{paiement.menage}</td>
                    <td className="p-3 text-sm text-gray-700">{paiement.telephone}</td>
                    <td className="p-3">
                      <span className="inline-block rounded bg-gray-400 px-3 py-1 text-sm text-white">
                        {paiement.montantPaye}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className="inline-block rounded px-3 py-1 text-sm text-white"
                        style={{
                          backgroundColor: paiement.montantRestantValue === 0 ? "#9ca3af" : "#fca5a5",
                        }}
                      >
                        {paiement.montantRestant}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700">{paiement.dateDernierPaiement}</td>
                    <td className="p-3">
                      <Button className="px-4 py-1 text-sm text-white" style={{ backgroundColor: "#14a3b8" }}>
                        Informations
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" className="px-4 py-2 text-sm bg-transparent" style={{ color: "#14a3b8" }}>
              Précédent
            </Button>
            <Button className="px-4 py-2 text-sm text-white" style={{ backgroundColor: "#14a3b8" }}>
              1
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm bg-transparent">
              2
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm bg-transparent">
              3
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm bg-transparent" style={{ color: "#14a3b8" }}>
              Suivant
            </Button>
          </div>
        </>
      )}

      {activeTab === "entreprises" && (
        <div className="rounded-lg border-2 bg-white p-8 text-center" style={{ borderColor: "#14a3b8" }}>
          <p className="text-gray-600">Paiement des entreprises à venir...</p>
        </div>
      )}
    </div>
  )
}

export default PaiementScreen
