import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroBase 0-2",
  description: "Desenvolvimento neurológico respeitoso para bebês 0-2 (Pikler/Gerber)",
};

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background text-text-primary" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-dvh grid grid-rows-[auto_1fr_auto]`}>
        <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">NeuroBase 0-2</Link>
            <ul className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/produtos">Produtos</Link></li>
              <li><Link href="/sobre-mim">Sobre Mim</Link></li>
              <li><Link href="/consultoria">Consultoria</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/consultoria" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                Agende Consultoria
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-[1200px] w-full mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-border py-8 text-sm text-text-secondary">
          <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
            <p>© {new Date().getFullYear()} NeuroBase 0-2. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link href="/politica-privacidade">Política de Privacidade</Link>
              <Link href="/termos-uso">Termos de Uso</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
