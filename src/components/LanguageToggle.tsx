'use client';

import { useRouter, usePathname } from 'next/navigation';
import { type Locale } from '@/lib/translations';

interface LanguageToggleProps {
  currentLang: Locale;
}

export default function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium text-text-primary hover:bg-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      {currentLang === 'pt' ? 'English' : 'Português'}
    </button>
  );
}
