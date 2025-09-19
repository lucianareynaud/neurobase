import { getTranslations, type Locale } from "@/lib/translations";

interface ContatoPageProps {
  params: { lang: Locale };
}

export default function ContatoPage({ params }: ContatoPageProps) {
  const t = getTranslations(params.lang);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {params.lang === 'en' ? 'Contact' : 'Contato'}
      </h1>
      <p className="text-text-secondary">
        {params.lang === 'en' 
          ? 'Get in touch with us for more information about our services.'
          : 'Entre em contato conosco para mais informações sobre nossos serviços.'
        }
      </p>
    </div>
  );
}
