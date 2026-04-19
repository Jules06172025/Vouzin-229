"use client"

import { useState, useMemo } from "react"
import { Heart, Share2, Play, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"

interface Video {
  id: string
  title: string
  description: string | null
  video_url: string
  thumbnail_url: string | null
  likes_count: number
  views_count: number
  created_at: string
}

interface VideoCardProps {
  video: Video
}

// Generate a deterministic random number based on video id
function seededRandom(seed: string): number {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

export function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [extraLikes, setExtraLikes] = useState(0)

  // Generate unique random likes for each video based on its id
  const randomLikes = useMemo(() => {
    const seed = seededRandom(video.id)
    return (seed % 4500) + 500 // Between 500 and 5000 likes
  }, [video.id])

  const totalLikes = randomLikes + video.likes_count + extraLikes

  function handleLike() {
    if (isLiked) {
      setExtraLikes((prev) => prev - 1)
      setIsLiked(false)
    } else {
      setExtraLikes((prev) => prev + 1)
      setIsLiked(true)
    }
  }

  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description || `Regardez cette vidéo de Vouzin Comédien 229 !`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié !")
    }
  }

  function formatLikes(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K"
    }
    return count.toString()
  }

  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-amber-500/30 transition-all duration-300">
      <CardContent className="p-0">
        {/* Video Player / Thumbnail */}
        <div className="relative aspect-video">
          {isPlaying ? (
            <video
              src={video.video_url}
              controls
              autoPlay
              className="h-full w-full object-cover"
            />
          ) : (
            <div 
              className="relative h-full w-full cursor-pointer"
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
                  <Film className="h-12 w-12 text-amber-500/50" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 text-white ml-1" fill="white" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground line-clamp-2">{video.title}</h3>
          {video.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>
          )}
          
          <p className="text-xs text-muted-foreground">
            {formatDistanceToNow(new Date(video.created_at), { addSuffix: true, locale: fr })}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={isLiked ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-red-500"}
            >
              <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
              {formatLikes(totalLikes)}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-muted-foreground hover:text-amber-500 ml-auto"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>


        </div>
      </CardContent>
    </Card>
  )
}
