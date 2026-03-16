import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts, getAllCategories } from "@/lib/blog-data"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | TechNova",
  description: "Artigos, insights e tendências sobre tecnologia, transformação digital, segurança e desenvolvimento de software.",
}

export default function BlogPage() {
  const categories = getAllCategories()
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-accent mb-3">Blog</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Insights e tendências em tecnologia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Artigos escritos por nossos especialistas sobre transformação digital, 
                desenvolvimento, segurança e as melhores práticas do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                Todos
              </Badge>
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <Card className="bg-card border-border overflow-hidden hover:border-accent/30 transition-colors">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto bg-secondary flex items-center justify-center">
                    <div className="text-6xl font-bold text-muted-foreground/20">TN</div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime} de leitura</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Other Posts */}
        <section className="py-16 lg:py-20 bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Mais Artigos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full bg-card border-border hover:border-accent/30 transition-colors">
                    <div className="aspect-[16/10] bg-secondary flex items-center justify-center">
                      <div className="text-4xl font-bold text-muted-foreground/20">TN</div>
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2 mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{post.author.name}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Receba nossos insights por email
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Assine nossa newsletter e receba artigos exclusivos, tendências de mercado 
              e dicas práticas diretamente na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
