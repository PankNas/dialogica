import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Widget } from '@/features/widget';
import { ReactNode } from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Metrics } from '@/features/metrics';
import { MediaProvider } from '@/app/providers';
import { ErrorBoundary } from '@/shared/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Диалогика - Интеллектуальные коммуникации для бизнеса',
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
        <Metrics />

        <ErrorBoundary>
          <MediaProvider>
            <div className="flex flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </MediaProvider>
        </ErrorBoundary>

        <Widget />
      </body>
    </html>
  );
}
