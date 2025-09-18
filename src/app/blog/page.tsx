import Link from "next/link";

const blogPosts = [
  {
    id: "primeiro-ensinamento-pikler",
    title: "O Primeiro Ensinamento de Emmi Pikler: Respeito à Autonomia e Movimento Livre",
    excerpt: "Como a liberdade de movimento desde os primeiros dias de vida pode transformar o desenvolvimento neurológico do bebê",
    date: "2024-12-19",
    readTime: "8 min",
    tags: ["Emmi Pikler", "Movimento Livre", "Desenvolvimento Infantil"],
    featured: true
  }
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Blog</h1>
        <p className="text-text-secondary">Artigos sobre desenvolvimento neurológico respeitoso para bebês 0-2 anos, baseados nas metodologias de Emmi Pikler e Magda Gerber.</p>
      </div>

      {/* Post em Destaque */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <article key={post.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-[16/9] bg-secondary/60 border-b border-border flex items-center justify-center">
            <p className="text-text-secondary">[Imagem do post]</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('pt-BR')}</time>
              <span>•</span>
              <span>{post.readTime} de leitura</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary hover:text-primary transition-colors">
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/blog/${post.id}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
            >
              Ler artigo completo →
            </Link>
          </div>
        </article>
      ))}

      {/* Seção de Categorias (para futuros posts) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">Categorias</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">Emmi Pikler</h3>
            <p className="text-sm text-text-secondary">Fundamentos da metodologia Pikler</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">Magda Gerber</h3>
            <p className="text-sm text-text-secondary">Abordagem RIE e cuidados respeitosos</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">Neurociência</h3>
            <p className="text-sm text-text-secondary">Desenvolvimento neurológico 0-2 anos</p>
          </div>
        </div>
      </section>

      {/* Newsletter (futuro) */}
      <div className="bg-secondary/40 border border-border rounded-lg p-6 text-center">
        <h3 className="font-semibold text-text-primary mb-2">Receba Novos Artigos</h3>
        <p className="text-sm text-text-secondary mb-4">
          Cadastre-se para receber os novos artigos sobre desenvolvimento infantil respeitoso
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-95 text-sm font-medium">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}


