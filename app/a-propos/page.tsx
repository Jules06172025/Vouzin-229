import { Metadata } from "next"
import { Mic2, Heart, Star, Trophy, Sparkles, Target, Laugh, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "À propos | Vouzin Comédien 229",
  description: "Découvrez le parcours, le style et l'univers artistique de Vouzin Comédien 229.",
}

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
            <Mic2 className="h-4 w-4" />
            <span>Mon histoire</span>
          </div>
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl text-balance">
            À propos de{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Vouzin
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Un voyage au cœur de la comédie béninoise, porté par la passion et le désir de faire rire
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-2 border-amber-500/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Mon Parcours</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Vouzin Comédien 229, c&apos;est avant tout une passion née dans les rues animées du Bénin. 
                    Depuis mon plus jeune âge, j&apos;ai toujours eu ce don naturel pour faire rire mon entourage, 
                    transformant les situations du quotidien en véritables moments de joie.
                  </p>
                  <p>
                    Le chiffre &quot;229&quot; représente fièrement l&apos;indicatif téléphonique du Bénin, 
                    mon pays d&apos;origine et source inépuisable d&apos;inspiration pour mes créations humoristiques.
                  </p>
                  <p>
                    C&apos;est avec détermination et créativité que j&apos;ai décidé de partager mon talent 
                    avec le monde entier à travers les réseaux sociaux, touchant des milliers de personnes 
                    qui partagent désormais mes éclats de rire.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-amber-500/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                    <Laugh className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Mon Style</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mon humour puise dans la richesse de la culture africaine, mélangeant traditions 
                    et modernité pour créer un style unique et reconnaissable. Je m&apos;inspire des 
                    situations de la vie quotidienne, des relations familiales et des interactions sociales.
                  </p>
                  <p>
                    Chaque sketch est une histoire, chaque personnage une facette de notre société. 
                    Je joue sur les expressions, les accents et les mimiques pour créer des moments 
                    inoubliables qui résonnent avec mon public.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-2 border-amber-500/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Mon Identité Artistique</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Je suis un artiste complet : comédien, créateur de contenu et entertaineur. 
                    Ma marque de fabrique ? Une énergie débordante, des personnages hauts en couleur 
                    et un sens aigu de l&apos;observation qui me permet de capturer l&apos;essence 
                    même de nos travers quotidiens.
                  </p>
                  <p>
                    Sur scène comme devant la caméra, je me transforme, j&apos;incarne des dizaines 
                    de personnages différents, chacun avec sa propre personnalité et ses propres histoires à raconter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-amber-500/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Ma Vision</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Mon objectif est simple mais ambitieux : faire rayonner l&apos;humour africain 
                    à travers le monde. Je veux montrer que le rire est universel et que notre culture 
                    regorge de trésors humoristiques qui méritent d&apos;être partagés.
                  </p>
                  <p>
                    Chaque vidéo, chaque sketch est une invitation au voyage, une porte ouverte 
                    sur un monde où la joie et la bonne humeur règnent en maîtres.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            { icon: Users, label: "Fans", value: "Communauté grandissante" },
            { icon: Star, label: "Étoile montante", value: "Du 229" },
            { icon: Trophy, label: "Passion", value: "Sans limites" },
            { icon: Sparkles, label: "Créativité", value: "Infinie" },
          ].map((stat, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-amber-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
      }
