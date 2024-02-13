import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Wedding',
};

import Header from '~/components/header';
import Providers from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body>
        <Providers>
          <div className="container mx-auto min-h-screen space-y-6 p-4 antialiased">
            <Header />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
      <Toaster richColors />
    </html>
  );
}
