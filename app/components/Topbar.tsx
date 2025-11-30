import { Bell, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

const Topbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-card px-6 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-sm text-white"
          style={{ backgroundColor: "#14a3b8" }}
        >
          N'S
        </div>
        <span className="text-lg font-semibold text-foreground">N'Stat Admin</span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: "#14a3b8" }}
          >
            12
          </span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                AD
              </div>
              <span className="font-medium">ADMIN</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profil</DropdownMenuItem>
            <DropdownMenuItem>Paramètres</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Déconnexion</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Topbar
