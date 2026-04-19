import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Clock, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact | Vouzin Comédien 229",
  description: "Contactez Vouzin Comédien 229 pour des collaborations, des événements ou simplement pour dire bonjour.",
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
            <Mail className="h-4 w-4" />
            <span>Restons en contact</span>
          </div>
          <h1 className="text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl text-balance">
            Contactez{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Vouzin
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question, une proposition de collaboration ou juste envie de discuter ? 
            N&apos;hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-2 border-amber-500/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Envoyez un message</h2>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-transparent hover:border-amber-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shrink-0">
                    <Facebook className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Facebook</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Suivez-moi et envoyez-moi un message sur Facebook
                    </p>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61571134721889"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 font-medium text-sm"
                    >
                      Visiter ma page
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-amber-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shrink-0">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">TikTok</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Retrouvez mes dernières vidéos et créations
                    </p>
                    <a 
                      href="https://www.tiktok.com/@vounzin.comedien?_r=1&_t=ZS-95dwqTGL11D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-500 hover:text-amber-600 font-medium text-sm"
                    >
                      @vounzin.comedien
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-amber-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                    <p className="text-muted-foreground text-sm">
                      Bénin, Afrique de l&apos;Ouest
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Code pays : +229
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-transparent hover:border-amber-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Disponibilité</h3>
                    <p className="text-muted-foreground text-sm">
                      Je réponds généralement sous 24-48h
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Pour les urgences, contactez-moi sur Facebook
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
                }
