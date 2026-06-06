import './globals.css';
import type { Metadata } from 'next';
import { DotGothic16, Manrope, Archivo, Archivo_Narrow, Source_Serif_4 } from 'next/font/google';
import portfolioData from '@/data/portfolio.json';

const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dotgothic16',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const archivo = Archivo({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.role} Portfolio`,
  description: portfolioData.tagline,
  keywords: `software developer, full-stack, scalable solutions, ${portfolioData.name}, portfolio`,
  openGraph: {
    type: 'website',
    title: `${portfolioData.name} - ${portfolioData.role} Portfolio`,
    description: portfolioData.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Manrope:wght@400;600;700&family=Archivo:wght@400;800&family=Archivo+Narrow:wght@500&family=Source+Serif+4:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${dotGothic16.variable} ${manrope.variable} ${archivo.variable} ${archivoNarrow.variable} ${sourceSerif4.variable}`}
      >
        {children}
      </body>
    </html>
  );
}