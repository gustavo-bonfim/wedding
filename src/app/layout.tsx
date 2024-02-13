import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

const BurguesFont = LocalFont({
  src: '../Burgues-Script-Regular.ttf',
  variable: '--font-burgues',
});
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
    <html lang="pt" className={`${inter.variable} ${BurguesFont.variable}`}>
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
