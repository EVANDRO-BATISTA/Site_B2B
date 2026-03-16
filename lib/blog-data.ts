export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
  }
  category: string
  publishedAt: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "transformacao-digital-2024",
    title: "Transformação Digital em 2024: Tendências e Estratégias para Empresas B2B",
    excerpt: "Descubra as principais tendências de transformação digital que estão moldando o mercado B2B e como sua empresa pode se preparar para o futuro.",
    content: `
      A transformação digital deixou de ser uma opção para se tornar uma necessidade competitiva. Em 2024, empresas B2B que não investirem em tecnologia correm o risco de ficar para trás.

      ## As Principais Tendências

      ### 1. Inteligência Artificial e Machine Learning
      A IA está revolucionando a forma como empresas tomam decisões. Desde análise preditiva até automação de processos, as possibilidades são infinitas.

      ### 2. Cloud Computing Híbrido
      A combinação de nuvens públicas e privadas oferece o melhor dos dois mundos: flexibilidade e segurança.

      ### 3. Cibersegurança Avançada
      Com o aumento das ameaças, investir em segurança não é mais opcional.

      ## Como Implementar

      A chave para uma transformação digital bem-sucedida está no planejamento. Comece com um diagnóstico completo, defina prioridades e execute em fases.

      Entre em contato conosco para saber como podemos ajudar sua empresa nessa jornada.
    `,
    author: {
      name: "Carlos Silva",
      role: "CTO",
    },
    category: "Transformação Digital",
    publishedAt: "2024-03-15",
    readTime: "8 min",
  },
  {
    slug: "seguranca-dados-lgpd",
    title: "LGPD e Segurança de Dados: O Que Sua Empresa Precisa Saber",
    excerpt: "Um guia completo sobre conformidade com a LGPD e melhores práticas de segurança de dados para proteger sua empresa e seus clientes.",
    content: `
      A Lei Geral de Proteção de Dados (LGPD) entrou em vigor e muitas empresas ainda têm dúvidas sobre como se adequar.

      ## O Que é a LGPD?

      A LGPD é a lei brasileira que regulamenta o tratamento de dados pessoais. Ela estabelece regras claras sobre coleta, armazenamento e uso de informações.

      ## Principais Obrigações

      ### 1. Consentimento
      Obtenha autorização clara e específica para coletar dados.

      ### 2. Transparência
      Informe aos titulares como seus dados serão utilizados.

      ### 3. Segurança
      Implemente medidas técnicas para proteger os dados.

      ## Penalidades

      O descumprimento pode resultar em multas de até 2% do faturamento, limitadas a R$ 50 milhões por infração.

      Nossa equipe pode ajudar sua empresa a alcançar conformidade total com a LGPD.
    `,
    author: {
      name: "Ana Martins",
      role: "DPO",
    },
    category: "Segurança",
    publishedAt: "2024-03-10",
    readTime: "6 min",
  },
  {
    slug: "microsservicos-arquitetura-moderna",
    title: "Microsserviços: Por Que Adotar uma Arquitetura Moderna",
    excerpt: "Entenda os benefícios e desafios da arquitetura de microsserviços e quando ela é a escolha certa para seu projeto.",
    content: `
      A arquitetura de microsserviços tem ganhado popularidade, mas será que ela é adequada para todo tipo de projeto?

      ## O Que São Microsserviços?

      Microsserviços são uma abordagem arquitetural onde uma aplicação é construída como um conjunto de serviços pequenos e independentes.

      ## Benefícios

      ### 1. Escalabilidade
      Escale apenas os componentes que precisam de mais recursos.

      ### 2. Resiliência
      A falha de um serviço não derruba toda a aplicação.

      ### 3. Flexibilidade Tecnológica
      Use a melhor tecnologia para cada serviço.

      ## Quando Usar

      Microsserviços são ideais para:
      - Aplicações complexas e em crescimento
      - Times grandes e distribuídos
      - Necessidade de alta disponibilidade

      Quer saber se microsserviços são a escolha certa para seu projeto? Fale conosco!
    `,
    author: {
      name: "Pedro Costa",
      role: "Arquiteto de Software",
    },
    category: "Desenvolvimento",
    publishedAt: "2024-03-05",
    readTime: "7 min",
  },
  {
    slug: "devops-cultura-praticas",
    title: "DevOps: Mais Que Ferramentas, Uma Cultura",
    excerpt: "DevOps vai muito além de CI/CD. Descubra como implementar uma verdadeira cultura DevOps em sua organização.",
    content: `
      Muitas empresas investem em ferramentas de DevOps sem entender que o verdadeiro valor está na mudança cultural.

      ## O Que é DevOps?

      DevOps é um conjunto de práticas que combina desenvolvimento (Dev) e operações (Ops) para entregar software de forma mais rápida e confiável.

      ## Os Pilares do DevOps

      ### 1. Cultura
      Colaboração entre times, comunicação aberta e responsabilidade compartilhada.

      ### 2. Automação
      Automatize tudo que for possível: builds, testes, deploys.

      ### 3. Medição
      Meça tudo para tomar decisões baseadas em dados.

      ### 4. Compartilhamento
      Conhecimento deve fluir livremente entre times.

      ## Como Começar

      1. Avalie sua cultura atual
      2. Identifique pontos de atrito
      3. Comece pequeno e itere
      4. Celebre vitórias

      Nossa equipe pode guiar sua jornada DevOps do início ao fim.
    `,
    author: {
      name: "Lucas Oliveira",
      role: "DevOps Engineer",
    },
    category: "DevOps",
    publishedAt: "2024-02-28",
    readTime: "5 min",
  },
  {
    slug: "ia-negocios-aplicacoes-praticas",
    title: "IA nos Negócios: Aplicações Práticas Além do Hype",
    excerpt: "Veja casos reais de como a Inteligência Artificial está gerando valor para empresas B2B além das promessas exageradas.",
    content: `
      Entre tantas promessas sobre IA, é importante separar o hype da realidade. Veja aplicações práticas que já estão gerando resultados.

      ## Aplicações Reais de IA

      ### 1. Atendimento ao Cliente
      Chatbots inteligentes que resolvem 80% das dúvidas sem intervenção humana.

      ### 2. Análise Preditiva
      Antecipe problemas de manutenção, demanda de estoque e churn de clientes.

      ### 3. Automação de Processos
      RPA combinado com IA para automatizar tarefas complexas.

      ### 4. Análise de Documentos
      Extração automática de informações de contratos, notas fiscais e relatórios.

      ## Como Começar

      Não tente resolver tudo de uma vez. Identifique um problema específico e comece por ele.

      1. Defina o problema claramente
      2. Avalie a qualidade dos dados disponíveis
      3. Comece com um MVP
      4. Meça resultados e itere

      Quer explorar como IA pode ajudar seu negócio? Entre em contato!
    `,
    author: {
      name: "Mariana Santos",
      role: "Data Scientist",
    },
    category: "Inteligência Artificial",
    publishedAt: "2024-02-20",
    readTime: "6 min",
  },
  {
    slug: "cloud-migracao-estrategias",
    title: "Migração para Cloud: Estratégias para uma Transição Segura",
    excerpt: "Aprenda as melhores práticas para migrar sua infraestrutura para a nuvem minimizando riscos e maximizando benefícios.",
    content: `
      A migração para cloud é um passo importante, mas requer planejamento cuidadoso para evitar armadilhas comuns.

      ## Estratégias de Migração

      ### 1. Lift and Shift (Rehosting)
      Mova as aplicações como estão. Rápido, mas não otimizado.

      ### 2. Replatforming
      Faça ajustes mínimos para aproveitar recursos da nuvem.

      ### 3. Refactoring
      Reescreva para arquitetura cloud-native. Maior esforço, melhores resultados.

      ## Passos para uma Migração Segura

      1. **Assessment**: Mapeie todas as aplicações e dependências
      2. **Planejamento**: Defina prioridades e cronograma
      3. **POC**: Teste com aplicações não críticas primeiro
      4. **Migração**: Execute em fases com rollback plan
      5. **Otimização**: Ajuste recursos e custos continuamente

      ## Armadilhas Comuns

      - Subestimar custos de egresso de dados
      - Ignorar requisitos de compliance
      - Não treinar a equipe adequadamente

      Nossa equipe tem experiência em centenas de migrações. Podemos ajudar!
    `,
    author: {
      name: "Roberto Almeida",
      role: "Cloud Architect",
    },
    category: "Cloud",
    publishedAt: "2024-02-15",
    readTime: "9 min",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))]
}
