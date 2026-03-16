import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-secondary-foreground/70 mb-3">Junte-se a nós</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
              Quer fazer parte do nosso time de tecnólogos?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-4">
              Somos os artesãos de tecnologia da TechNova - uma consultoria de gestão líder 
              que ajuda inúmeras organizações a terem sucesso em suas transformações mais 
              importantes e estratégicas.
            </p>
            <p className="text-secondary-foreground/80 mb-8">
              Em nosso coletivo, sempre há espaço para mais pessoas com aquela deliciosa 
              combinação de expertise técnica e energia contagiante.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/carreiras">
                Junte-se ao coletivo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-background/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">TN</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/70">Nossa equipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
