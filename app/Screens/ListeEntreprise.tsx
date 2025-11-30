"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Search, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface Coupon {
  id: string;
  entreprise: string;
  email: string;
  telephone: string;
  nombre: string;


}

const ListeEntreprise = () => {
  const [perPage, setPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const coupons: Coupon[] = [
    {
      id: "0024",
      entreprise: "BT Construct",
      email: "infi@btconstruct.cd ",     
      telephone: "0895672120",
      nombre: "5",
      
    },


       {
      id: "0049",
      entreprise: "Construct SARL",
      email: "commercial@construct.org",     
      telephone: "0895672120",
      nombre: "10",
      
    },


     {
      id: "0019",
      entreprise: "MK CONS",
      email: "infi@mkcons.com",     
      telephone: "0818596501",
      nombre: "2",
      
    },


  ];

  return (
    <div className="rounded-lg border-2 bg-white p-6" style={{ borderColor: "#14a3b8" }}>
      {/* Title */}
      <h3 className="mb-6 text-2xl font-bold" style={{ color: "#14a3b8" }}>
        Liste des Entreprises
      </h3>

      {/* Top Controls */}
      <div className="mb-6 flex items-center gap-4">
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
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Recherchez un ménage"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2" style={{ borderColor: "#14a3b8" }}>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Entreprise
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  E-mail
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Téléphone
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                <div className="flex items-center gap-2">
                  Nombre des projets assignés
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
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.entreprise}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.email}</td>
                <td className="px-4 py-4 text-sm" style={{ color: "#14a3b8" }}>
                  {coupon.telephone}
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{coupon.nombre}</td>
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
                    <DropdownMenuContent align="end" className="w-48 rounded-lg border bg-white text-primary shadow-lg">
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                        Assigner un Coupon
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                        Détails Entreprise
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium hover:bg-gray-100 focus:bg-gray-100">
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer px-4 py-2.5 text-sm font-medium  hover:bg-red-50 focus:bg-red-50">
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
  );
};

export default ListeEntreprise;