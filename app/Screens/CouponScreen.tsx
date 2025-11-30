"use client"

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button" 
import { List, Plus, Send, ChevronRight, ChevronDown } from "lucide-react"
import ListeCouponScreen from "./ListeCouponScreen"
import TransmissionScreen from "./TransmissionScreen"
import GroupCouponScreen from "./GroupCouponScreen"
//d&apos;

const CouponScreen = () => {
  const [activeTab, setActiveTab] = useState<"list" | "create" | "send" | "sendGrouped">("create")
  const [isMemberOfCluster, setIsMemberOfCluster] = useState<"oui" | "non" | null>(null)
  const [productTypes, setProductTypes] = useState({
    latrineComplete: false,
    trou: false,
    superstructure: false,
    toiture: false,
  })
  const [showProductModelDropdown, setShowProductModelDropdown] = useState(false)
  const [showClusterDropdown, setShowClusterDropdown] = useState(false)

  return (
    <div className="p-6">
        
      <h2 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
        Gestion des coupons électroniques
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
          Listes des coupons
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === 
            "create" ? "text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
          style={{
            backgroundColor: activeTab === "create" ? "#14a3b8" : undefined,
          }}
        >
          <Plus className="h-5 w-5" />
          Créer un coupon
        </button>
        <button
          onClick={() => setActiveTab("send")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "send" ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
        >
          <Send className="h-5 w-5" />
          Envoie coupon
        </button>
        <button
          onClick={() => setActiveTab("sendGrouped")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "sendGrouped" ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
          <ChevronRight className="-ml-3 h-5 w-5" />
          Envoie coupons groupés
        </button>
      </div>

      {/* Create Coupon Form */}
      {activeTab === "create" && (
        <div className="rounded-lg border-2 bg-white p-8 shadow-sm" style={{ borderColor: "#14a3b8" }}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            {/* Row 1 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">ID du ménage</label>
              <Input type="text" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Nom du chef de ménage</label>
              <Input type="text" className="w-full" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Membre d&apos;un cluster ?</label>
              <div className="mt-3 flex gap-6">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="cluster"
                    checked={isMemberOfCluster === "oui"}
                    onChange={() => setIsMemberOfCluster("oui")}
                    className="h-4 w-4 cursor-pointer border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Oui</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="cluster"
                    checked={isMemberOfCluster === "non"}
                    onChange={() => setIsMemberOfCluster("non")}
                    className="h-4 w-4 cursor-pointer border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Non</span>
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Type de produit</label>
              <div className="mt-3 space-y-3">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productTypes.latrineComplete}
                    onChange={(e) => setProductTypes({ ...productTypes, latrineComplete: e.target.checked })}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Latrine complète</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productTypes.trou}
                    onChange={(e) => setProductTypes({ ...productTypes, trou: e.target.checked })}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Trou</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productTypes.superstructure}
                    onChange={(e) => setProductTypes({ ...productTypes, superstructure: e.target.checked })}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Superstructure</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={productTypes.toiture}
                    onChange={(e) => setProductTypes({ ...productTypes, toiture: e.target.checked })}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 text-[#14a3b8] focus:ring-[#14a3b8]"
                  />
                  <span className="text-sm text-gray-700">Toiture</span>
                </label>
              </div>
            </div>

            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-700">Modèle du produit</label>
              <button
                onClick={() => setShowProductModelDropdown(!showProductModelDropdown)}
                className="flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm hover:bg-gray-50 focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20"
              >
                <span className="text-gray-500">Sélectionner</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {showProductModelDropdown && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                  <div className="py-1">
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 1
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 2
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 3
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-700">Nom du cluster</label>
              <button
                onClick={() => setShowClusterDropdown(!showClusterDropdown)}
                className="flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 text-sm shadow-sm hover:bg-gray-50 focus:border-[#14a3b8] focus:outline-none focus:ring-2 focus:ring-[#14a3b8]/20"
              >
                <span className="text-gray-500">Sélectionner</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {showClusterDropdown && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                  <div className="py-1">
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 1
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 2
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Modèle 3
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <Button
              className="flex items-center gap-2 px-8 py-2 text-white shadow-md transition-all hover:shadow-lg"
              style={{ backgroundColor: "#14a3b8" }}
            >
              Créer
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Other tabs placeholder */}
      {activeTab === "list" && (
        <ListeCouponScreen/>
         
      )}

         {activeTab === "send" && (
        <TransmissionScreen/>
         
      )}

            {activeTab === "sendGrouped" && (
        <GroupCouponScreen/>
         
      )}



      



      
    </div>
  )
}

export default CouponScreen
