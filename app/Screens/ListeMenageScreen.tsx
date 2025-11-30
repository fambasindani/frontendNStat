"use client"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Search, SlidersHorizontal, ChevronDown, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from  "@radix-ui/react-dropdown-menu"





interface Menage {
  id: string
  nom: string
  province: string
  ville: string
  telephone: string
  taille: number
}

const ListeMenageScreen = () => {
  const [perPage, setPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Sample data
  const menages: Menage[] = [
    {
      id: "0024",
      nom: "Malanda Nkoy",
      province: "Kongo Central",
      ville: "kinshasa",
      telephone: "888888852",
      taille: 12,
    },
    { id: "0049", nom: "KIOKA MBALA", province: "Mayi ndombe", ville: "kinshasa", telephone: "888888852", taille: 2 },
    { id: "0031", nom: "TASA EKANGA", province: "Tshopo", ville: "Matadi", telephone: "888888852", taille: 7 },
  ]

  return (
    <div className="rounded-lg border-2 bg-white p-6" style={{ borderColor: "#14a3b8" }}>
      {/* Top Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Per Page Selector */}
        <div className="flex items-center gap-3">
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-sm text-gray-600">Enregistrement par page</span>
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Recherchez un ménage"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 rounded-md border-2 bg-white px-6 py-2.5 text-sm font-semibold transition-all hover:bg-[#14a3b8]/5 focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/30"
              style={{ borderColor: "#14a3b8", color: "#14a3b8" }}
            >
              <SlidersHorizontal className="h-5 w-5" />
              FILTRE
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 rounded-lg border-2 bg-white p-2 shadow-lg"
            style={{ borderColor: "#14a3b8" }}
          >
            <DropdownMenuItem
              className="cursor-pointer rounded-md px-4 py-3 text-base font-medium hover:bg-[#14a3b8]/10 focus:bg-[#14a3b8]/10"
              style={{ color: "#14a3b8" }}
            >
              Province
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-md px-4 py-3 text-base font-medium hover:bg-[#14a3b8]/10 focus:bg-[#14a3b8]/10"
              style={{ color: "#14a3b8" }}
            >
              Ville
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-md px-4 py-3 text-base font-medium hover:bg-[#14a3b8]/10 focus:bg-[#14a3b8]/10"
              style={{ color: "#14a3b8" }}
            >
              Quartier
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-md px-4 py-3 text-base font-medium hover:bg-[#14a3b8]/10 focus:bg-[#14a3b8]/10"
              style={{ color: "#14a3b8" }}
            >
              Zone de santé
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer rounded-md px-4 py-3 text-base font-medium hover:bg-[#14a3b8]/10 focus:bg-[#14a3b8]/10"
              style={{ color: "#14a3b8" }}
            >
              Air de santé
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2" style={{ borderColor: "#14a3b8" }}>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Ménage
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Province
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Ville
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Numéro de téléphone
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Taille du ménage
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {menages.map((menage, index) => (
              <tr
                key={menage.id}
                className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-4 py-4 text-sm text-gray-700">{menage.id}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{menage.nom}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{menage.province}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{menage.ville}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{menage.telephone}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{menage.taille}</td>
                <td className="px-4 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/30"
                        style={{ backgroundColor: "#a8d5e2" }}
                      >
                        ACTIONS
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 rounded-lg border bg-white shadow-lg">
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                       
                        Détails
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                      
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                     
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-end">
        <div className="flex items-center gap-2">
          <button
            className="rounded border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            style={{ color: "#14a3b8" }}
          >
            Précédent
          </button>
          <button
            className="rounded border px-3 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: "#14a3b8", borderColor: "#14a3b8" }}
          >
            1
          </button>
          <button
            className="rounded border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            style={{ color: "#14a3b8" }}
          >
            2
          </button>
          <button
            className="rounded border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            style={{ color: "#14a3b8" }}
          >
            3
          </button>
          <button
            className="rounded border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            style={{ color: "#14a3b8" }}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListeMenageScreen
