import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { CodeIcon, ShieldIcon, IntegrationIcon, ChartIcon, CloudIcon, SupportIcon } from "@/components/icons/tech-icons"

export const metadata: Metadata = {
  title: "Serviços | TechNova",
  description: "Conheça nossa gama completa de serviços de tecnologia: desenvolvimento de software, consultoria, segurança, integração, cloud e suporte.",
}

const services = [
  {
    id: "desenvolvimento",
    title: "Desenvolvimento de Software",
    description: "Criamos soluções sob medida para suas necessidades de negócio, utilizando as tecnologias mais modernas e arquiteturas escaláveis que crescem junto com sua empresa.",
    icon: CodeIcon,
    features: [
      "Aplicações Web e Mobile",
      "APIs e Microsserviços",
      "Sistemas Empresariais",
      "E-commerce e Marketplaces",
      "Automação de Processos",
      "Inteligência Artificial e ML",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoria em TI",
    description: "Nossa equipe de especialistas oferece orientação estratégica para otimizar sua infraestrutura tecnológica e processos, sempre com foco em resultados mensuráveis.",
    icon: ChartIcon,
    features: [
      "Diagnóstico Tecnológico",
      "Planejamento Estratégico de TI",
      "Análise de Processos",
      "Transformação Digital",
      "Governança de TI",
      "Gestão de Projetos",
    ],
  },
  {
    id: "seguranca",
    title: "Segurança da Informação",
    description: "Proteja seus dados, sistemas e reputação com nossas soluções de cibersegurança abrangentes, desde prevenção até resposta a incidentes.",
    icon: ShieldIcon,
    features: [
      "Auditoria de Segurança",
      "Testes de Penetração",
      "Compliance (LGPD, ISO 27001)",
      "Monitoramento 24/7",
      "Resposta a Incidentes",
      "Treinamento de Equipes",
    ],
  },
  {
    id: "integracao",
    title: "Integração de Sistemas",
    description: "Conectamos suas plataformas, sistemas legados e novas aplicações para criar um ecossistema digital coeso e eficiente.",
    icon: IntegrationIcon,
    features: [
      "APIs e Webservices",
      "ETL e Data Integration",
      "ERP e CRM Integration",
      "Middleware Solutions",
      "Legacy Modernization",
      "iPaaS Implementation",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Migração, gestão e otimização de infraestrutura em nuvem com práticas DevOps modernas para maior agilidade e redução de custos.",
    icon: CloudIcon,
    features: [
      "Migração para Cloud",
      "Arquitetura Multi-Cloud",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Kubernetes & Containers",
      "Otimização de Custos",
    ],
  },
  {
    id: "suporte",
    title: "Suporte Dedicado",
    description: "Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana, para manter suas operações sempre funcionando com máxima eficiência.",
    icon: SupportIcon,
    features: [
      "Help Desk Especializado",
      "Monitoramento Proativo",
      "SLA Garantido",
      "Gestão de Incidentes",
      "Manutenção Preventiva",
      "Documentação Técnica",
    ],
  },
]

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent mb-3">Nossos Serviços</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Soluções completas para sua transformação digital
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oferecemos uma gama completa de serviços tecnológicos para ajudar sua empresa 
                a crescer, inovar e se destacar no mercado competitivo de hoje.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 mb-6 text-accent">
                      <service.icon className="w-full h-full" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link href="/contato">
                        Solicitar Proposta
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <Card className={`bg-card border-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">O que inclui</CardTitle>
                      <CardDescription>
                        Principais entregas e capacidades deste serviço
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consulta gratuita e descubra como 
              podemos ajudar sua empresa a alcançar seus objetivos tecnológicos.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contato">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
