import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Widget } from '@/features/widget';
import { ReactNode } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { AlertProvider } from '@/shared/ui/alert';

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
    <html lang="ru" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AlertProvider>
          <div className="flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>

          <Widget />
        </AlertProvider>
      </body>
    </html>
  );
}
