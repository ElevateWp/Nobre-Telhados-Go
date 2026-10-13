import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import JsonLd from '@/components/ui/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://a-z-weld.vercel.app'),
  title: {
    default: 'Nobre Telhados Go',
    template: '%s',
  },
  description:
    'Nobre Telhados Go: serviços profissionais de telhados e calhas em Goiás. Reformas, reparos e limpeza com atendimento ágil e cuidadoso.',
  keywords: [
    'Nobre Telhados Go',
    'telhados em Goiás',
    'reforma e limpeza de telhados',
  ],
  authors: [{ name: 'Nobre Telhados Go' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#F5F7FA] selection:text-[#202124]">
        <PagePreloader />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[88px] sm:pt-[100px] md:pt-[112px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
