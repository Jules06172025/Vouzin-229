import Link from "next/link"
import { Play, Sparkles, Users, Video, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeaturedVideo } from "@/components/featured-video"
import { createClient } from "@/lib/supabase/server"

export const revalidate = 60

async function getFeaturedVideo() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(1)
  
  return data?.[0] || null
}

export default async function HomePage() {
  const featuredVideo = await getFeaturedVideo()

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                <Sparkles className="h-4 w-4" />
                <span>Bienvenue dans mon univers</span>
              </div>
              
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                Vouzin{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Comédien 229
                </span>
              </h1>
              
              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed">
                Plongez dans un monde où le rire est roi. Des sketchs originaux, 
                une énergie contagieuse et un humour authentique qui vous fera 
                oublier tous vos soucis.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  <Link href="/galerie">
                    <Play className="mr-2 h-5 w-5" />
                    Voir les vidéos
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.tiktok.com/@vounzin.comedien?_r=1&_t=ZS-95dwqTGL11D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5 fill-current">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    TikTok
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-600/20 blur-3xl" />
              <Card className="relative overflow-hidden border-2 border-amber-500/20">
                <CardContent className="p-0">
                  <FeaturedVideo video={featuredVideo} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Pourquoi me suivre ?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce qui rend mon contenu unique et rejoignez une communauté qui aime rire
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group relative overflow-hidden border-2 border-transparent hover:border-amber-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white transition-transform group-hover:scale-110">
                  <Video className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Contenu Original</h3>
                <p className="text-muted-foreground">
                  Des sketchs uniques et créatifs qui reflètent la vie quotidienne avec humour et authenticité.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-2 border-transparent hover:border-amber-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white transition-transform group-hover:scale-110">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Énergie Positive</h3>
                <p className="text-muted-foreground">
                  Une dose de bonne humeur garantie pour égayer votre journée et vous faire sourire.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-2 border-transparent hover:border-amber-500/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white transition-transform group-hover:scale-110">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Communauté Unie</h3>
                <p className="text-muted-foreground">
                  Rejoignez une famille de fans qui partagent la passion du rire et du divertissement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Card className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-3xl font-bold md:text-4xl text-balance">
                Prêt à rire ?
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Explorez ma galerie de vidéos et découvrez des heures de divertissement
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-white/90">
                  <Link href="/galerie">
                    Explorer la galerie
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/a-propos">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
