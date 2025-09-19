import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

interface BlogPageProps {
  params: { lang: Locale };
}

const blogPosts = {
  pt: [
    {
      id: "primeiro-ensinamento-pikler",
      title: "O Primeiro Ensinamento de Emmi Pikler: Respeito à Autonomia e Movimento Livre",
      excerpt: "Como a liberdade de movimento desde os primeiros dias de vida pode transformar o desenvolvimento neurológico do bebê",
      date: "2024-12-19",
      readTime: "8 min",
      tags: ["Emmi Pikler", "Movimento Livre", "Desenvolvimento Infantil"],
      featured: true
    }
  ],
  en: [
    {
      id: "first-pikler-teaching",
      title: "Emmi Pikler's First Teaching: Respect for Autonomy and Free Movement",
      excerpt: "How freedom of movement from the first days of life can transform the baby's neurological development",
      date: "2024-12-19",
      readTime: "8 min",
      tags: ["Emmi Pikler", "Free Movement", "Child Development"],
      featured: true
    }
  ]
};

export default function BlogPage({ params }: BlogPageProps) {
  const t = getTranslations(params.lang);
  const posts = blogPosts[params.lang];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold">{t.blog.title}</h1>
        <p className="text-text-secondary">{t.blog.subtitle}</p>
      </div>

      {/* Post em Destaque */}
      {posts.filter(post => post.featured).map((post) => (
        <article key={post.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-[16/9] bg-secondary/60 border-b border-border flex items-center justify-center">
            <p className="text-text-secondary">[Imagem do post]</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(params.lang === 'en' ? 'en-US' : 'pt-BR')}</time>
              <span>•</span>
              <span>{post.readTime} {t.blogPost.readTime}</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary hover:text-primary transition-colors">
              <Link href={`/${params.lang}/blog/${post.id}`}>
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
              href={`/${params.lang}/blog/${post.id}`}
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
            >
              {t.blog.readMore} →
            </Link>
          </div>
        </article>
      ))}

      {/* Seção de Categorias (para futuros posts) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">{t.blog.categories}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">{t.blog.categoriesList.pikler.title}</h3>
            <p className="text-sm text-text-secondary">{t.blog.categoriesList.pikler.description}</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">{t.blog.categoriesList.gerber.title}</h3>
            <p className="text-sm text-text-secondary">{t.blog.categoriesList.gerber.description}</p>
          </div>
          <div className="bg-background border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-text-primary mb-2">{t.blog.categoriesList.neuroscience.title}</h3>
            <p className="text-sm text-text-secondary">{t.blog.categoriesList.neuroscience.description}</p>
          </div>
        </div>
      </section>

      {/* Newsletter (futuro) */}
      <div className="bg-secondary/40 border border-border rounded-lg p-6 text-center">
        <h3 className="font-semibold text-text-primary mb-2">{t.blog.newsletter.title}</h3>
        <p className="text-sm text-text-secondary mb-4">
          {t.blog.newsletter.description}
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder={t.blog.newsletter.placeholder}
            className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:opacity-95 text-sm font-medium">
            {t.blog.newsletter.button}
          </button>
        </div>
      </div>
    </div>
  );
}
