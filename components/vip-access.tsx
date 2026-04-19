"use client"

import { useState, useEffect } from "react"
import { Lock, Crown, Upload, CheckCircle, AlertCircle, Loader2, Film, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"

const VIP_CODE = "Frost"

export function VipAccess() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [codeInput, setCodeInput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [videos, setVideos] = useState<Array<{id: string; title: string; video_url: string; created_at: string}>>([])
  const [isLoadingVideos, setIsLoadingVideos] = useState(false)

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [isFeatured, setIsFeatured] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const vipAuth = localStorage.getItem("vip_authenticated")
    if (vipAuth === "true") {
      setIsAuthenticated(true)
      loadVideos()
    }
  }, [])

  async function loadVideos() {
    setIsLoadingVideos(true)
    const supabase = createClient()
    const { data } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false })
    
    setVideos(data || [])
    setIsLoadingVideos(false)
  }

  function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (codeInput === VIP_CODE) {
      setIsAuthenticated(true)
      localStorage.setItem("vip_authenticated", "true")
      setError(null)
      loadVideos()
    } else {
      setError("Code incorrect. Veuillez réessayer.")
    }
  }

  function handleLogout() {
    setIsAuthenticated(false)
    localStorage.removeItem("vip_authenticated")
    setCodeInput("")
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault()
    if (!videoFile || !title.trim()) {
      setUploadError("Veuillez remplir tous les champs requis.")
      return
    }

    setIsUploading(true)
    setUploadError(null)

    try {
      const supabase = createClient()

      // Upload video file to Supabase Storage
      const videoFileName = `${Date.now()}-${videoFile.name}`
      const { data: videoData, error: videoError } = await supabase.storage
        .from("videos")
        .upload(videoFileName, videoFile)

      if (videoError) throw new Error("Erreur lors du téléchargement de la vidéo")

      const { data: { publicUrl: videoUrl } } = supabase.storage
        .from("videos")
        .getPublicUrl(videoFileName)

      let thumbnailUrl = null
      if (thumbnailFile) {
        const thumbFileName = `thumb-${Date.now()}-${thumbnailFile.name}`
        const { error: thumbError } = await supabase.storage
          .from("videos")
          .upload(thumbFileName, thumbnailFile)

        if (!thumbError) {
          const { data: { publicUrl } } = supabase.storage
            .from("videos")
            .getPublicUrl(thumbFileName)
          thumbnailUrl = publicUrl
        }
      }

      // Insert video record
      const { error: dbError } = await supabase
        .from("videos")
        .insert({
          title,
          description: description || null,
          video_url: videoUrl,
          thumbnail_url: thumbnailUrl,
          is_featured: isFeatured,
          uploaded_by: "VIP Member",
        })

      if (dbError) throw new Error("Erreur lors de l'enregistrement de la vidéo")

      setUploadSuccess(true)
      setTitle("")
      setDescription("")
      setVideoFile(null)
      setThumbnailFile(null)
      setIsFeatured(false)
      loadVideos()

      setTimeout(() => setUploadSuccess(false), 3000)
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setIsUploading(false)
    }
  }

  async function handleDeleteVideo(videoId: string, videoUrl: string) {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette vidéo ?")) return

    try {
      const supabase = createClient()
      
      // Extract filename from URL to delete from storage
      if (videoUrl) {
        const urlParts = videoUrl.split("/")
        const fileName = urlParts[urlParts.length - 1]
        if (fileName) {
          await supabase.storage.from("videos").remove([fileName])
        }
      }

      // Delete the video record from database
      const { error } = await supabase
        .from("videos")
        .delete()
        .eq("id", videoId)
      
      if (error) {
        alert("Erreur lors de la suppression: " + error.message)
        return
      }

      // Refresh the video list
      loadVideos()
    } catch (err) {
      alert("Erreur lors de la suppression de la vidéo")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto">
        <Card className="border-2 border-amber-500/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Accès restreint</h2>
              <p className="text-muted-foreground">
                Entrez le code VIP pour accéder à cet espace exclusif
              </p>
            </div>

            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Code VIP"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className="text-center text-lg border-2 focus:border-amber-500"
              />
              
              {error && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
              >
                <Lock className="mr-2 h-4 w-4" />
                Accéder
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* VIP Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
            <Crown className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Bienvenue, membre VIP !</h2>
            <p className="text-sm text-muted-foreground">Vous avez accès à toutes les fonctionnalités</p>
          </div>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Déconnexion
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Upload Form */}
        <Card className="border-2 border-amber-500/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Importer une vidéo</h3>
                <p className="text-sm text-muted-foreground">La vidéo sera visible publiquement</p>
              </div>
            </div>

            {uploadSuccess && (
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span>Vidéo importée avec succès !</span>
              </div>
            )}

            <form onSubmit={handleUpload} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Titre de la vidéo *
                </label>
                <Input
                  placeholder="Ex: Mon nouveau sketch"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border-2 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Description
                </label>
                <Textarea
                  placeholder="Décrivez votre vidéo..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="border-2 focus:border-amber-500 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Fichier vidéo *
                </label>
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                  required
                  className="border-2 focus:border-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Miniature (optionnel)
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                  className="border-2 focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="h-4 w-4 rounded border-2 text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="featured" className="text-sm text-foreground">
                  Mettre en vedette sur la page d&apos;accueil
                </label>
              </div>

              {uploadError && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {uploadError}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isUploading}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Importation en cours...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Importer la vidéo
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Video Management */}
        <Card className="border-2 border-amber-500/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                <Film className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Vidéos importées</h3>
                <p className="text-sm text-muted-foreground">{videos.length} vidéo(s) au total</p>
              </div>
            </div>

            {isLoadingVideos ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
              </div>
            ) : videos.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {videos.map((video) => (
                  <div 
                    key={video.id} 
                    className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{video.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(video.created_at).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteVideo(video.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Film className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Aucune vidéo importée</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
