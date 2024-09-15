import { Analytics } from '@vercel/analytics/react';
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
  title: 'Casamento K&G',
  description: 'Venha celebrar esta data especial conosco!',
  metadataBase: new URL('https://kethelyngustavowedd.com.br'),
  openGraph: {
    title: 'Casamento K&G',
    description: 'Venha celebrar esta data especial conosco!',
  },
  robots: {
    index: false,
  },
};

import { twMerge } from 'tailwind-merge';
import Providers from './providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={twMerge(BurguesFont.variable, unna.variable, 'scroll-smooth')}
    >
      <body>
        <Providers>
          <div className="container mx-auto min-h-screen space-y-6 overflow-x-clip p-4 antialiased">
            <main>{children}</main>
          </div>
        </Providers>
        <Analytics />
        <Toaster richColors />
      </body>
    </html>
  );
}
