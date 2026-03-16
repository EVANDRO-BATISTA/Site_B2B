"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Github, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@technova.com.br",
    description: "Respondemos em até 24h",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (11) 3456-7890",
    description: "Seg-Sex, 9h às 18h",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "São Paulo, SP",
    description: "Av. Paulista, 1000 - 10º andar",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Segunda a Sexta",
    description: "09:00 - 18:00 (BRT)",
  },
]

const services = [
  "Desenvolvimento de Software",
  "Consultoria em TI",
  "Segurança da Informação",
  "Integração de Sistemas",
  "Cloud & DevOps",
  "Suporte Dedicado",
  "Outro",
]

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent mb-3">Contato</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Vamos conversar sobre seu projeto?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Entre em contato conosco para uma consulta gratuita. Nossa equipe de 
                especialistas está pronta para ajudar sua empresa a alcançar seus objetivos.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Escolha o canal que preferir ou preencha o formulário ao lado.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-foreground">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-4">Siga-nos</p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Envie sua mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Send className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Mensagem enviada!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Obrigado pelo contato. Nossa equipe responderá em breve.
                        </p>
                        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                          Enviar nova mensagem
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Seu nome"
                                required
                              />
                            </Field>
                          </FieldGroup>
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="email">Email corporativo</FieldLabel>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email@empresa.com"
                                required
                              />
                            </Field>
                          </FieldGroup>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="company">Empresa</FieldLabel>
                              <Input
                                id="company"
                                name="company"
                                placeholder="Nome da empresa"
                              />
                            </Field>
                          </FieldGroup>
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="phone">Telefone</FieldLabel>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="(11) 99999-9999"
                              />
                            </Field>
                          </FieldGroup>
                        </div>

                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="service">Serviço de interesse</FieldLabel>
                            <Select name="service">
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione um serviço" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                        </FieldGroup>

                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="Descreva seu projeto ou necessidade..."
                              rows={5}
                              required
                            />
                            <FieldDescription>
                              Quanto mais detalhes, melhor poderemos ajudá-lo.
                            </FieldDescription>
                          </Field>
                        </FieldGroup>

                        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>Enviando...</>
                          ) : (
                            <>
                              Enviar Mensagem
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] bg-secondary flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">Mapa interativo</p>
            <p className="text-sm text-muted-foreground/70">Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
