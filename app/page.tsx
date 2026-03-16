import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ClientsSection } from "@/components/sections/clients"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
