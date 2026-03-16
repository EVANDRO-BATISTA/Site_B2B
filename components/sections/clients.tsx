const clients = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
]

export function ClientsSection() {
  return (
    <section className="py-16 lg:py-20 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-10">
          Empresas que confiam em nossas soluções
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div 
              key={client}
              className="flex items-center justify-center h-12 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <div className="px-6 py-2 border border-border rounded-lg">
                <span className="font-medium text-sm">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
