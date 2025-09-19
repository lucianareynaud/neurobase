import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localeDetection: true,
  },
};

export default nextConfig;
