import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { TwinWidget } from '@/features/twinWidget';
import { ReactNode } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dialogica - Интеллектуальные коммуникации для бизнеса',
  description:
    'Проектирование, разработка и внедрение AI голосовых ботов, чат-ботов и других сервисов коммуникаций',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>

        <TwinWidget />
      </body>
    </html>
  );
}
