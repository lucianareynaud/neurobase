import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "../globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { getTranslations, type Locale } from "@/lib/translations";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const t = getTranslations(params.lang);
  
  return {
    title: params.lang === 'en' ? "NeuroBase 0-2" : "NeuroBase 0-2",
    description: params.lang === 'en' 
      ? "Respectful neurological development for babies 0-2 (Pikler/Gerber)"
      : "Desenvolvimento neurológico respeitoso para bebês 0-2 (Pikler/Gerber)",
  };
}

const noFlashThemeScript = `(() => {
  try {
    const storage = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = storage ? storage === 'dark' : prefersDark;
    if (shouldDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch {}
})();`;

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const t = getTranslations(params.lang);

  return (
    <html lang={params.lang} className="bg-background text-text-primary" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-dvh grid grid-rows-[auto_1fr_auto]`}>
        <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href={`/${params.lang}`} className="text-lg font-semibold tracking-tight">NeuroBase 0-2</Link>
            <ul className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
              <li><Link href={`/${params.lang}`}>{t.nav.home}</Link></li>
              <li><Link href={`/${params.lang}/blog`}>{t.nav.blog}</Link></li>
              <li><Link href={`/${params.lang}/produtos`}>{t.nav.products}</Link></li>
              <li><Link href={`/${params.lang}/sobre-mim`}>{t.nav.about}</Link></li>
              <li><Link href={`/${params.lang}/consultoria`}>{t.nav.consultation}</Link></li>
              <li><Link href={`/${params.lang}/contato`}>{t.nav.contact}</Link></li>
            </ul>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle currentLang={params.lang} />
              <Link href={`/${params.lang}/consultoria`} className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                {t.nav.scheduleConsultation}
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-[1200px] w-full mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-border py-8 text-sm text-text-secondary">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            <p>© {new Date().getFullYear()} NeuroBase 0-2. {t.footer.copyright}</p>
            <div className="flex gap-4">
              <Link href={`/${params.lang}/politica-privacidade`}>{t.footer.privacy}</Link>
              <Link href={`/${params.lang}/termos-uso`}>{t.footer.terms}</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
