import { getTranslations, type Locale } from "@/lib/translations";

interface ConsultoriaPageProps {
  params: { lang: Locale };
}

export default function ConsultoriaPage({ params }: ConsultoriaPageProps) {
  const t = getTranslations(params.lang);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {params.lang === 'en' ? 'Consultation' : 'Consultoria'}
      </h1>
      <p className="text-text-secondary">
        {params.lang === 'en' 
          ? 'Personalized consultation for respectful neurological development of babies 0-2 years.'
          : 'Consultoria personalizada para desenvolvimento neurológico respeitoso de bebês 0-2 anos.'
        }
      </p>
    </div>
  );
}
