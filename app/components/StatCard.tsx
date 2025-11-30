import { type LucideIcon, TrendingUp } from "lucide-react"
import { Card, CardContent } from "./ui/card"

interface Props {
  title: string
  value: number
  icon: LucideIcon
  color: string
}

const StatCard = ({ title, value, icon: Icon, color }: Props) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>

            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>+12% ce mois</span>
            </div>
          </div>

          <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${color}/10`}>
            <Icon
              className={`h-6 w-6 text-${color}`}
              style={{
                color: `var(--color-${color})`,
              }}
            />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-1 w-full transition-all group-hover:h-1.5"
          style={{
            backgroundColor: `var(--color-${color})`,
          }}
        />
      </CardContent>
    </Card>
  )
}

export default StatCard
