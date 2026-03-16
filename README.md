# TechNova - Site Institucional B2B

Site institucional moderno para empresas de tecnologia que vendem para outras empresas (B2B), como consultorias e empresas de software.

## O Problema

Empresas de tecnologia B2B enfrentam desafios significativos para se posicionar no mercado digital:

- **Falta de presença digital profissional**: Muitas empresas ainda não possuem um site que transmita credibilidade e profissionalismo
- **Dificuldade em comunicar proposta de valor**: Serviços complexos de tecnologia são difíceis de explicar de forma clara e acessível
- **Baixa visibilidade orgânica**: Sem uma estratégia de conteúdo (blog), empresas perdem oportunidades de SEO e geração de leads
- **Processo de contato ineficiente**: Formulários genéricos não capturam as informações necessárias para qualificar leads
- **Design desatualizado**: Sites antigos afastam potenciais clientes que associam design ruim a serviços de baixa qualidade

## A Solução

Este projeto oferece um site institucional completo e moderno que resolve todos esses problemas:

### Páginas Incluídas

1. **Home**: Hero impactante com proposta de valor clara, estatísticas de credibilidade, preview de serviços e CTAs estratégicos
2. **Serviços**: Página detalhada com todos os serviços oferecidos, features específicas e CTAs para conversão
3. **Metodologia**: Apresentação do processo de trabalho em 6 etapas, transmitindo organização e profissionalismo
4. **Blog**: Sistema completo de blog para SEO com categorias, posts individuais e newsletter
5. **Contato**: Formulário completo com campos específicos para B2B (empresa, serviço de interesse) e informações de contato

### Recursos de Design

- **Visual moderno**: Design escuro e elegante inspirado em sites de tecnologia de ponta
- **Ícones SVG personalizados**: Ilustrações únicas que reforçam a identidade visual
- **Totalmente responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações sutis**: Microinterações que melhoram a experiência do usuário
- **Acessibilidade**: Seguindo as melhores práticas de WCAG

## Tecnologias Embarcadas

### Core

- **[Next.js 16](https://nextjs.org/)**: Framework React com App Router, SSR/SSG e otimizações automáticas
- **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces com os hooks mais recentes
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para código mais seguro e manutenível

### Estilização

- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e consistente
- **[shadcn/ui](https://ui.shadcn.com/)**: Componentes acessíveis e customizáveis baseados em Radix UI
- **[Lucide Icons](https://lucide.dev/)**: Biblioteca de ícones consistente e leve

### Qualidade

- **SEO otimizado**: Meta tags, Open Graph e estrutura semântica para melhor indexação
- **Performance**: Lazy loading, otimização de fontes e images next/image
- **Acessibilidade**: ARIA labels, navegação por teclado e contraste adequado

## Estrutura do Projeto

```
├── app/
│   ├── page.tsx              # Home
│   ├── servicos/page.tsx     # Serviços
│   ├── metodologia/page.tsx  # Metodologia
│   ├── blog/
│   │   ├── page.tsx          # Lista de posts
│   │   └── [slug]/page.tsx   # Post individual
│   ├── contato/page.tsx      # Contato
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Estilos globais e tema
├── components/
│   ├── layout/               # Header e Footer
│   ├── sections/             # Seções reutilizáveis
│   ├── icons/                # Ícones SVG customizados
│   └── ui/                   # Componentes shadcn/ui
├── lib/
│   ├── blog-data.ts          # Dados dos posts do blog
│   └── utils.ts              # Utilitários
└── README.md
```

## Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta
cd site-institucional

# Instale as dependências
pnpm install

# Execute em modo de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Iniciar servidor de produção
pnpm start
```

## Customização

### Cores e Tema

O tema pode ser personalizado editando as variáveis CSS em `app/globals.css`. O projeto usa o sistema de design tokens do shadcn/ui com suporte a modo escuro.

### Conteúdo

- **Textos**: Edite diretamente nos componentes de cada página
- **Blog**: Adicione novos posts em `lib/blog-data.ts`
- **Serviços**: Modifique a lista em `app/servicos/page.tsx`

### Marca

- Substitua "TechNova" pelo nome da sua empresa
- Atualize o logo no Header e Footer
- Personalize as cores de acordo com sua identidade visual

## Deploy

O projeto está pronto para deploy na Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido com Next.js e shadcn/ui
