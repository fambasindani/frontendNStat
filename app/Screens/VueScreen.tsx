"use client"

import type React from "react"

import { Users, Ticket, Building2, MessageSquare, BarChart3, Banknote } from "lucide-react"

interface MenuItem {
  id: number
  title: string
  icon: React.ReactNode
  link?: string
}

const VueScreen = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: "Ménages",
      icon: <Users className="h-12 w-12 text-gray-400" />,
    },
    {
      id: 2,
      title: "Coupons électroniques",
      icon: <Ticket className="h-12 w-12 text-gray-400" />,
    },
    {
      id: 3,
      title: "Entreprises",
      icon: <Building2 className="h-12 w-12 text-gray-400" />,
    },
    {
      id: 4,
      title: "Feedbacks",
      icon: <MessageSquare className="h-12 w-12 text-gray-400" />,
    },
    {
      id: 5,
      title: "Statistique",
      icon: <BarChart3 className="h-12 w-12 text-gray-400" />,
    },
    {
      id: 6,
      title: "Paiements",
      icon: <Banknote className="h-12 w-12 text-gray-400" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="border-t-4 border-b-4 bg-white p-8" style={{ borderColor: "#14a3b8" }}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 bg-cyan-50 p-8 transition-all hover:shadow-lg hover:scale-105"
                style={{ borderColor: "#14a3b8" }}
              >
                <div className="flex items-center justify-center">{item.icon}</div>
                <h3 className="text-center text-lg font-medium text-gray-700">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VueScreen
