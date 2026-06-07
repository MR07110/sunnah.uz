import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SUNNAH.UZ Admin',
  description: 'Hadislar admin paneli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
