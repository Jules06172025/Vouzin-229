"use client"

import { Play, Film } from "lucide-react"
import { useState } from "react"

interface Video {
  id: string
  title: string
  description: string | null
  video_url: string
  thumbnail_url: string | null
}

interface FeaturedVideoProps {
  video: Video | null
}

export function FeaturedVideo({ video }: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!video) {
    return (
      <div className="relative aspect-video w-full bg-muted flex flex-col items-center justify-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
          <Film className="h-10 w-10 text-white" />
        </div>
        <div className="text-center px-4">
          <h3 className="text-lg font-semibold text-foreground">Vidéo en vedette</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Les nouvelles vidéos apparaîtront ici bientôt
          </p>
        </div>
      </div>
    )
  }

  if (isPlaying) {
    return (
      <div className="relative aspect-video w-full">
        <video
          src={video.video_url}
          controls
          autoPlay
          className="h-full w-full object-cover"
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    )
  }

  return (
    <div 
      className="group relative aspect-video w-full cursor-pointer overflow-hidden"
      onClick={() => setIsPlaying(true)}
    >
      {video.thumbnail_url ? (
        <img
          src={video.thumbnail_url}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          crossOrigin="anonymous"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center">
          <Film className="h-16 w-16 text-amber-500/50" />
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
          <Play className="h-10 w-10 text-white ml-1" fill="white" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-white text-center px-4">{video.title}</h3>
        {video.description && (
          <p className="mt-2 text-sm text-white/80 text-center px-4 max-w-md line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
    </div>
  )
}
