"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button"; 
import { List, Send, ChevronRight, Plus } from "lucide-react";
import ListeCouponScreen from "./ListeCouponScreen";
import TransmissionScreen from "./TransmissionScreen";
import GroupCouponScreen from "./GroupCouponScreen";
import ListeEntreprise from "./ListeEntreprise";
import AjoutEntrepriseScreen from "./AjoutEntrepriseScreen";
import AssignationScreen from "./AssignationScreen";

const EntrepriseScreen = () => {
  // L'état initial de activeTab est maintenant "list"
  const [activeTab, setActiveTab] = useState<"list" | "create" | "send" | "sendGrouped">("list");
  const [isMemberOfCluster, setIsMemberOfCluster] = useState<"oui" | "non" | null>(null);
  const [productTypes, setProductTypes] = useState({
    latrineComplete: false,
    trou: false,
    superstructure: false,
    toiture: false,
  });
  const [showProductModelDropdown, setShowProductModelDropdown] = useState(false);
  const [showClusterDropdown, setShowClusterDropdown] = useState(false);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-3xl font-bold" style={{ color: "#14a3b8" }}>
        Gestion des Entreprises
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
          Listes des Entreprises
        </button>

        <button
          onClick={() => setActiveTab("send")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "send" ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
        >
          <Plus className="h-5 w-5" />
          Ajouter Entreprise
        </button>
        
        <button
          onClick={() => setActiveTab("sendGrouped")}
          className={`flex items-center gap-2 rounded-t-lg px-6 py-3 font-medium transition-colors ${
            activeTab === "sendGrouped" ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-250"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
          <ChevronRight className="-ml-3 h-5 w-5" />
          Assignation des Coupons
        </button>
      </div>

      {/* List of Companies */}
      {activeTab === "list" && <ListeEntreprise />}

      {/* Other tabs */}
      {activeTab === "send" && <AjoutEntrepriseScreen />}
      {activeTab === "sendGrouped" && <AssignationScreen />}
    </div>
  );
};

export default EntrepriseScreen;