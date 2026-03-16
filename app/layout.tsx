import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'TechNova | Soluções em Tecnologia para Empresas',
  description: 'Transformamos negócios através de soluções tecnológicas inovadoras. Consultoria, desenvolvimento de software e transformação digital para empresas B2B.',
  keywords: ['tecnologia', 'consultoria', 'software', 'B2B', 'transformação digital', 'desenvolvimento'],
  authors: [{ name: 'TechNova' }],
  openGraph: {
    title: 'TechNova | Soluções em Tecnologia para Empresas',
    description: 'Transformamos negócios através de soluções tecnológicas inovadoras.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
