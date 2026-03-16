import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CodeIcon, ShieldIcon, IntegrationIcon, ChartIcon, CloudIcon, SupportIcon } from "@/components/icons/tech-icons"

const services = [
  {
    title: "Desenvolvimento de Software",
    description: "Criamos soluções sob medida para suas necessidades, com tecnologias modernas e arquiteturas escaláveis.",
    icon: CodeIcon,
    href: "/servicos#desenvolvimento",
  },
  {
    title: "Consultoria em TI",
    description: "Orientação estratégica para otimizar sua infraestrutura e processos tecnológicos com foco em resultados.",
    icon: ChartIcon,
    href: "/servicos#consultoria",
  },
  {
    title: "Segurança da Informação",
    description: "Proteja seus dados e sistemas com nossas soluções de cibersegurança de última geração.",
    icon: ShieldIcon,
    href: "/servicos#seguranca",
  },
  {
    title: "Integração de Sistemas",
    description: "Conectamos suas plataformas e automatizamos processos para maior eficiência operacional.",
    icon: IntegrationIcon,
    href: "/servicos#integracao",
  },
  {
    title: "Cloud & DevOps",
    description: "Migração, gestão e otimização de infraestrutura em nuvem com práticas DevOps modernas.",
    icon: CloudIcon,
    href: "/servicos#cloud",
  },
  {
    title: "Suporte Dedicado",
    description: "Suporte técnico especializado 24/7 para manter suas operações sempre funcionando.",
    icon: SupportIcon,
    href: "/servicos#suporte",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-accent mb-3">O que fazemos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Nossa coleção de serviços abrange diversas necessidades em cada etapa do processo de transformação.
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore como ajudamos empresas a se transformarem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card hover:bg-secondary/50 border-border hover:border-accent/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 mb-4 text-muted-foreground group-hover:text-accent transition-colors">
                  <service.icon className="w-full h-full" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
