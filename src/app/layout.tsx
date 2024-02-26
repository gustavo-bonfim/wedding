import type { Metadata } from 'next';
import { Inter, Monsieur_La_Doulaise, Unna } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Toaster } from '~/components/ui/sonner';

import './globals.css';

const BurguesFont = LocalFont({
  src: '../Burgues-Script-Regular.ttf',
  variable: '--font-burgues',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const doulaise = Monsieur_La_Doulaise({
  subsets: ['latin'],
  variable: '--font-doulaise',
  weight: '400',
});
const unna = Unna({
  subsets: ['latin'],
  variable: '--font-unna',
  weight: ['400', '700'],
});

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
    <html
      lang="pt"
      className={`${inter.variable} ${BurguesFont.variable} ${doulaise.variable} ${unna.variable} scroll-smooth`}
    >
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
