"use client"

import StatCard from "./StatCard"
import { Users, Ticket, Building2, Home, Layers, Circle, Box, MessageSquare } from "lucide-react"

const Dashboard = () => {
  const stats = [
    { title: "Nombre de Ménages", value: 103, icon: Users, color: "chart-1" },
    { title: "Nombre de Coupons", value: 223, icon: Ticket, color: "chart-2" },
    { title: "Nombre de Latrines", value: 140, icon: Building2, color: "chart-3" },
    { title: "Nombre de Toitures", value: 25, icon: Home, color: "chart-4" },
    { title: "Nombre de Dalles", value: 268, icon: Layers, color: "chart-1" },
    { title: "Nombre de Trous", value: 80, icon: Circle, color: "chart-2" },
    { title: "Nombre de Superstructures", value: 14, icon: Box, color: "chart-3" },
    { title: "Nombre de Feedbacks", value: 14, icon: MessageSquare, color: "chart-4" },
  ]

  return (
       <div className="p-8">
      <div className="mb-3">
        <h2 className="text-3xl font-bold text-foreground">Tableau de bord statistique</h2>
        <p className="mt-1 text-sm text-muted-foreground">Vue d ensemble des données et statistiques en temps réel</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((stat, idx) => (
          <StatCard key={idx} title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
