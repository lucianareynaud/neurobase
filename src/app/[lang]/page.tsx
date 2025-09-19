import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

interface HomePageProps {
  params: { lang: Locale };
}

export default function Home({ params }: HomePageProps) {
  const t = getTranslations(params.lang);

  return (
    <div className="space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            {t.home.title}
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            {t.home.subtitle}
          </p>
          <div className="flex gap-4">
            <a href="#abordagem" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
              {t.home.cta1}
            </a>
            <Link href={`/${params.lang}/consultoria`} className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary hover:bg-secondary/40">
              {t.home.cta2}
            </Link>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-secondary/60 border border-border" aria-hidden />
      </section>

      <section className="grid sm:grid-cols-3 gap-4" aria-label="credibilidade">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">{t.home.credibility.experience}</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">{t.home.credibility.education}</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">{t.home.credibility.methodology}</p>
        </div>
      </section>
    </div>
  );
}
