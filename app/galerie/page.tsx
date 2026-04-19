import { Metadata } from "next"
import { Film, Play } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { VideoCard } from "@/components/video-card"

export const metadata: Metadata = {
  title: "Galerie Vidéo | Vouzin Comédien 229",
  description: "Découvrez toutes les vidéos humoristiques de Vouzin Comédien 229.",
}

export const revalidate = 30

async function getVideos() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false })
  
  return data || []
}

export default async function GalleryPage() {
  const videos = await getVideos()

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
            <Play className="h-4 w-4" />
            <span>Mes créations</span>
          </div>
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl text-balance">
            Galerie{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Vidéo
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez ici toutes mes vidéos humoristiques. Likez, commentez et partagez vos préférées !
          </p>
        </div>

        {/* Videos Grid */}
        {videos.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted mb-6">
              <Film className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Aucune vidéo pour le moment
            </h2>
            <p className="text-muted-foreground max-w-md">
              Les nouvelles vidéos seront ajoutées bientôt. Revenez régulièrement pour découvrir du nouveau contenu !
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
