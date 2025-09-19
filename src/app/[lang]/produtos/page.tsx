import { getTranslations, type Locale } from "@/lib/translations";

interface ProdutosPageProps {
  params: { lang: Locale };
}

export default function ProdutosPage({ params }: ProdutosPageProps) {
  const t = getTranslations(params.lang);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {params.lang === 'en' ? 'Products' : 'Produtos'}
      </h1>
      <p className="text-text-secondary">
        {params.lang === 'en' 
          ? 'Discover our products and resources for respectful child development.'
          : 'Conheça nossos produtos e recursos para desenvolvimento infantil respeitoso.'
        }
      </p>
    </div>
  );
}
