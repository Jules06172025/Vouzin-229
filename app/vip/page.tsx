import { Metadata } from "next"
import { Lock, Crown } from "lucide-react"
import { VipAccess } from "@/components/vip-access"

export const metadata: Metadata = {
  title: "Espace VIP | Vouzin Comédien 229",
  description: "Espace exclusif réservé aux membres VIP de Vouzin Comédien 229.",
}

export default function VipPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
            <Crown className="h-4 w-4" />
            <span>Accès exclusif</span>
          </div>
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl text-balance">
            Espace{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              VIP
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Bienvenue dans l&apos;espace réservé aux membres privilégiés. 
            Entrez votre code d&apos;accès pour débloquer les fonctionnalités exclusives.
          </p>
        </div>

        <VipAccess />
      </div>
    </div>
  )
}
