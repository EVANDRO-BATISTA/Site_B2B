import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProcessIcon, RocketIcon } from "@/components/icons/tech-icons"

export const metadata: Metadata = {
  title: "Nossa Metodologia | TechNova",
  description: "Conheça nossa metodologia de trabalho: processos ágeis, transparência e foco em resultados para entregar soluções tecnológicas de excelência.",
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Imersão profunda no seu negócio para entender desafios, objetivos e oportunidades. Mapeamos processos, entrevistamos stakeholders e analisamos o cenário atual.",
    deliverables: ["Documento de Requisitos", "Mapa de Processos", "Análise de Riscos"],
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos a arquitetura ideal, escolhemos as tecnologias mais adequadas e criamos um roadmap detalhado com marcos e entregas bem definidos.",
    deliverables: ["Arquitetura Técnica", "Roadmap do Projeto", "Estimativas e Cronograma"],
  },
  {
    number: "03",
    title: "Design",
    description: "Criamos protótipos e interfaces centradas no usuário, validando cada decisão de design com testes e feedbacks antes da implementação.",
    deliverables: ["Wireframes e Protótipos", "Design System", "Especificações de UI/UX"],
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Implementação ágil com sprints curtos, entregas frequentes e comunicação constante. Código limpo, testado e documentado.",
    deliverables: ["Código Fonte", "Testes Automatizados", "Documentação Técnica"],
  },
  {
    number: "05",
    title: "Testes & QA",
    description: "Garantia de qualidade rigorosa com testes funcionais, de performance, segurança e usabilidade antes de cada release.",
    deliverables: ["Relatórios de Teste", "Métricas de Qualidade", "Certificação de Segurança"],
  },
  {
    number: "06",
    title: "Deploy & Suporte",
    description: "Implantação segura com zero downtime, treinamento de usuários e suporte contínuo para garantir o sucesso da solução.",
    deliverables: ["Ambiente de Produção", "Treinamentos", "SLA de Suporte"],
  },
]

const principles = [
  {
    title: "Transparência Total",
    description: "Acesso em tempo real ao progresso do projeto, decisões documentadas e comunicação aberta em todos os níveis.",
  },
  {
    title: "Entregas Incrementais",
    description: "Valor entregue desde as primeiras semanas, permitindo validação contínua e ajustes rápidos de direção.",
  },
  {
    title: "Qualidade Intrínseca",
    description: "Código revisado, testado e documentado. Não sacrificamos qualidade por velocidade.",
  },
  {
    title: "Parceria de Longo Prazo",
    description: "Não somos apenas fornecedores - somos parceiros comprometidos com o sucesso contínuo do seu negócio.",
  },
]

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-accent mb-3">Nossa Metodologia</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                  Uma abordagem global para um modelo de futuro
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Nossa metodologia combina as melhores práticas do mercado com anos de 
                  experiência para entregar soluções que realmente transformam negócios.
                </p>
                <Button asChild>
                  <Link href="/contato">
                    Iniciar um Projeto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="w-24 h-24 mx-auto text-accent">
                  <ProcessIcon className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nosso Processo
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada projeto segue um processo estruturado, mas flexível, que garante 
                entregas de qualidade dentro do prazo e orçamento.
              </p>
            </div>

            <div className="grid gap-8">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-12"
                >
                  <div className="flex md:justify-end">
                    <span className="text-6xl font-bold text-accent/20">{step.number}</span>
                  </div>
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-3">Entregas:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item) => (
                            <span 
                              key={item}
                              className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nossos Princípios
              </h2>
              <p className="text-lg text-muted-foreground">
                Valores que guiam cada decisão e cada linha de código que escrevemos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map((principle) => (
                <Card key={principle.title} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 mx-auto mb-8 text-primary-foreground/80">
              <RocketIcon className="w-full h-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Nossa metodologia já ajudou mais de 150 empresas a transformar suas 
              operações. Sua empresa pode ser a próxima.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contato">
                Fale com um Especialista
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
