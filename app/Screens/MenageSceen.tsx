"use client"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { List, Plus, Check } from "lucide-react"
import ListeMenageScreen from "./ListeMenageScreen"

const MenageSceen = () => {
  const [activeTab, setActiveTab] = useState<"list" | "add">("add")

  return (
    <div className="p-6">
      <h2 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
        Gestion des ménages
      </h2>

      {/* Tabs */}
      <div className="mb-8 flex gap-2">
        <button
          onClick={() => setActiveTab("list")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "list" ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
        >
          <List className="h-5 w-5" />
          Liste de ménages
        </button>
        <button
          onClick={() => setActiveTab("add")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "add" ? "text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
          style={{
            backgroundColor: activeTab === "add" ? "#14a3b8" : undefined,
          }}
        >
          <Plus className="h-5 w-5" />
          Ajouter nouveau ménage
        </button>
      </div>

      {/* Form */}
      {activeTab === "add" && (
        <div className="rounded-lg border-2 bg-white p-8 shadow-sm" style={{ borderColor: "#14a3b8" }}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Row 1 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Nom du chef de ménage</label>
              <Input type="text" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Sexe du chef de ménage</label>
              <select className="h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20">
                <option value="">Sélectionner</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Statut matrimonial</label>
              <Input type="text" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Date de naissance</label>
              <Input type="date" className="w-full" />
            </div>

            {/* Row 2 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Numéro de téléphone principal</label>
              <Input type="tel" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Numéro de téléphone secondaire</label>
              <Input type="tel" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Taille du ménage</label>
              <Input type="number" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Adresse</label>
              <Input type="text" className="w-full" />
            </div>

            {/* Row 3 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Province</label>
              <select className="h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20">
                <option value="">Sélectionner</option>
                <option value="kinshasa">Kinshasa</option>
                <option value="katanga">Katanga</option>
                <option value="kasai">Kasaï</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Ville</label>
              <select className="h-9 w-full rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20">
                <option value="">Sélectionner</option>
                <option value="kinshasa">Kinshasa</option>
                <option value="lubumbashi">Lubumbashi</option>
                <option value="mbujimayi">Mbuji-Mayi</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Quartier</label>
              <Input type="text" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Longitude</label>
              <Input type="text" className="w-full" />
            </div>

            {/* Row 4 - Latitude */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Latitude</label>
              <Input type="text" className="w-full" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <Button
              className="flex items-center gap-2 px-8 py-2 text-white shadow-md transition-all hover:shadow-lg"
              style={{ backgroundColor: "#14a3b8" }}
            >
              <Check className="h-5 w-5" />
              Ajouter
            </Button>
          </div>
        </div>
      )}

      {activeTab === "list" && (
        <ListeMenageScreen/>
        
      )}
    </div>
  )
}

export default MenageSceen
