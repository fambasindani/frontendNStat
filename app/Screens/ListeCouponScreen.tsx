"use client"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Search, SlidersHorizontal, ChevronDown} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

interface Coupon {
  id: string
  menage: string
  province: string
  typeProduit: string
  quotepart: string
  statut:
    | "Généré"
    | "Envoyé"
    | "En attente d'utilisation"
    | "En cours de construction"
    | "En attente de paiement"
    | "Payé"
    | "Annulé"
    | "Expiré"
}

const ListeCouponScreen = () => {
  const [perPage, setPerPage] = useState(10)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Sample data
  const coupons: Coupon[] = [
    {
      id: "12",
      menage: "Malanda Nkoy",
      province: "Kongo Central",
      typeProduit: "Model 1",
      quotepart: "55 $",
      statut: "Généré",
    },
    {
      id: "29",
      menage: "Malanda Nkoy",
      province: "Kongo Central",
      typeProduit: "Model 1",
      quotepart: "65 $",
      statut: "Envoyé",
    },
    {
      id: "11",
      menage: "Kalola mutamba",
      province: "kinshas",
      typeProduit: "Model 3",
      quotepart: "155 $",
      statut: "En attente d'utilisation",
    },
  ]

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Généré":
        return "bg-gray-400 text-white"
      case "Envoyé":
        return "bg-green-500 text-white"
      case "En attente d'utilisation":
        return "bg-cyan-400 text-white"
      case "En cours de construction":
        return "bg-blue-500 text-white"
      case "En attente de paiement":
        return "bg-yellow-500 text-white"
      case "Payé":
        return "bg-green-600 text-white"
      case "Annulé":
        return "bg-red-500 text-white"
      case "Expiré":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-400 text-white"
    }
  }

  return (
    <div className="rounded-lg border-2 bg-white p-6" style={{ borderColor: "#14a3b8" }}>
      {/* Title */}
      <h3 className="mb-6 text-2xl font-bold" style={{ color: "#14a3b8" }}>
        Liste des coupons électroniques
      </h3>

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
            className="w-full pl-10"
          />
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 rounded-md border-2 bg-white px-6 py-2.5 text-sm font-semibold transition-all hover:bg-[#14a3b8]/5 focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/30"
              style={{ borderColor: "#14a3b8", color: "#14a3b8" }}
            >
              <SlidersHorizontal className="h-5 w-5" />
              FILTRE STATUT
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-64 rounded-lg border-2 bg-white p-2 shadow-lg"
            style={{ borderColor: "#14a3b8" }}
          >
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              Généré
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              Envoyé
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              En attente d&apos;utilisation
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              En cours de construction
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              En attente de paiement
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              Payé
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              Annulé
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-md px-4 py-3 text-base hover:bg-gray-100 focus:bg-gray-100">
              Expiré
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
                  Type de produit
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Quotepart
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Statuts du coupon
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr
                key={coupon.id}
                className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.id}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.menage}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.province}</td>
                <td className="px-4 py-4 text-sm" style={{ color: "#14a3b8" }}>
                  {coupon.typeProduit}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.quotepart}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block rounded px-4 py-1.5 text-sm font-medium ${getStatusColor(coupon.statut)}`}
                  >
                    {coupon.statut}
                  </span>
                </td>
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
                       
                        Envoyer SMS
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                       
                        Détails
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                      
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 focus:bg-red-50">
                     
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

export default ListeCouponScreen
