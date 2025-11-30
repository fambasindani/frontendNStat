"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, LayoutDashboard, BarChart3, Calendar, LineChart, FileText } from "lucide-react"
import { Input } from "./ui/input"

const Sidebar = () => {
  const pathname = usePathname()

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: LayoutDashboard, label: "Ménage", href: "/menage" },
    { icon: BarChart3, label: "Paiement", href: "/paiement" },
    { icon: LineChart, label: "Coupon", href: "/coupon" },
    { icon: FileText, label: "Entreprise", href: "/entreprise" },
  ]

 /*  const secondaryItems = [
    { icon: Calendar, label: "Calendrier", href: "/calendar" },
    { icon: BarChart3, label: "Statistiques", href: "/stats" },
  ] */

  return (
    <aside className="sticky top-[57px] h-[calc(100vh-57px)] w-64 border-r border-border bg-card p-4">
      <div className="mb-6">
        <h5 className="mb-4 text-sm font-semibold text-muted-foreground">Administrator</h5>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="text" placeholder="Rechercher..." className="pl-9" />
        </div>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item, idx) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="my-4 border-t border-border" />
{/* 
      <div className="space-y-1">
        <p className="mb-2 px-3 text-xs font-semibold text-muted-foreground">OUTILS</p>
        {secondaryItems.map((item, idx) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </div> */}
    </aside>
  )
}

export default Sidebar
