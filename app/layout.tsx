import type { Metadata } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Vouzin Comédien 229 | Humour et Divertissement',
  description: 'Découvrez l\'univers humoristique unique de Vouzin Comédien 229. Rires garantis, sketchs originaux et contenus exclusifs.',
  keywords: ['comédien', 'humour', 'Bénin', '229', 'Vouzin', 'divertissement', 'sketch', 'comédie'],
  authors: [{ name: 'Delfa Frost' }],
  creator: 'Delfa Frost',
  openGraph: {
    title: 'Vouzin Comédien 229',
    description: 'L\'humour béninois dans toute sa splendeur',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="bg-background">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
