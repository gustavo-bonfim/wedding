import type { Metadata } from 'next';
import { Unna } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

const BurguesFont = LocalFont({
  src: '../Burgues-Script-Regular.ttf',
  variable: '--font-burgues',
});

const unna = Unna({
  subsets: ['latin'],
  variable: '--font-unna',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Wedding',
};

import { twMerge } from 'tailwind-merge';
import Providers from './providers';

const fonts = [BurguesFont.variable, unna.variable].join(' ');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={twMerge(fonts, 'scroll-smooth')}>
      <head>
        <title>Casamento K&G</title>
      </head>
      <body>
        <Providers>
          <div className="container mx-auto min-h-screen space-y-6 p-4 antialiased">
            <main>{children}</main>
          </div>
        </Providers>
      </body>
      <Toaster richColors />
    </html>
  );
}
