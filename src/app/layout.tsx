import { redirect } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Redirect to Portuguese version by default
  redirect('/pt');
}
