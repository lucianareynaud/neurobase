import { getTranslations, type Locale } from "@/lib/translations";

interface SobreMimPageProps {
  params: { lang: Locale };
}

export default function SobreMimPage({ params }: SobreMimPageProps) {
  const t = getTranslations(params.lang);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {params.lang === 'en' ? 'About Me' : 'Sobre Mim'}
      </h1>
      <p className="text-text-secondary">
        {params.lang === 'en' 
          ? 'Learn more about my background and experience in child development.'
          : 'Conheça mais sobre minha formação e experiência em desenvolvimento infantil.'
        }
      </p>
    </div>
  );
}
