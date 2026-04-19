import Link from "next/link"
import { Film, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600">
                <Film className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Vouzin <span className="text-amber-500">229</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Le rire est la meilleure des médecines. Rejoignez-moi dans mon univers humoristique unique.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Liens rapides</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                Accueil
              </Link>
              <Link href="/a-propos" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                À propos
              </Link>
              <Link href="/galerie" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                Galerie vidéo
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Réseaux sociaux</h3>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@vounzin.comedien?_r=1&_t=ZS-95dwqTGL11D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571134721889"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-amber-500 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Vouzin Comédien 229. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground">
              Développé par <span className="font-semibold text-amber-500">Delfa Frost</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
