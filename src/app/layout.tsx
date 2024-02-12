import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Wedding',
};

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
          <div className="container mx-auto min-h-screen p-4 antialiased">
            {children}
          </div>
        </Providers>
      </body>
      <Toaster richColors />
    </html>
  );
}
