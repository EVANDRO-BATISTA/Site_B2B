import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog-data"
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return { title: "Post não encontrado | TechNova" }
  }

  return {
    title: `${post.title} | TechNova Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Article Header */}
        <section className="py-16 lg:py-24 bg-card/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>
            
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-medium text-sm">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('pt-BR', { 
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.trim().startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                if (paragraph.trim().startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  )
                }
                if (paragraph.trim().match(/^\d+\./)) {
                  return (
                    <li key={index} className="text-muted-foreground ml-4 list-decimal">
                      {paragraph.replace(/^\d+\.\s*/, '')}
                    </li>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>

            {/* Share & CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <p className="text-sm text-muted-foreground">
                  Gostou do artigo? Compartilhe com sua rede!
                </p>
                <Button asChild>
                  <Link href="/contato">
                    Fale com um Especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="py-16 lg:py-20 bg-card/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Leia Também</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.slice(0, 3).map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="h-full bg-card border-border hover:border-accent/30 transition-colors">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
